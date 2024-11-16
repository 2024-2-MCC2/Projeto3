const express = require('express');
const bcrypt = require('bcrypt');
const multer = require('multer');
const path = require('path');
const db = require('../db');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../uploads'));
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage });

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EM_ORIGIN,
        pass: process.env.EM_PASSWORD, 
    },
});

const sendEmail = async (to, subject, text) => {
    const mailOptions = {
        from: process.env.EM_ORIGIN,
        to,
        subject,
        text,
    };
    
    try {
        await transporter.sendMail(mailOptions);
    } catch (err) {
        throw new Error("Erro ao enviar o email: " + err.message);
    }
};

router.post('/register', upload.single('profileImage'), async (req, res) => {
    const { email, password, nome, datadeNascimento } = req.body;
    
    const imagemPath = req.file ? `/uploads/${req.file.filename}` : null;

    if (!email || !password || !nome || !datadeNascimento) {
        return res.status(400).json({ error: 'Todos os campos tem que ser preenchidos' });
    }

    try {
        const hash = await bcrypt.hash(password, 10);
        
        await new Promise((resolve, reject) => {
            db.query(
                'INSERT INTO usuario (EmailUsuario, SenhaUsuario, NomeUsuario, DatadeNascimento, ImagemUsuario) VALUES (?, ?, ?, ?, ?)', 
                [email, hash, nome, datadeNascimento, imagemPath],
                (err, results) => {
                    if (err) return reject(err);
                    resolve(results);
                }
            );
        });

        const mailText = `Querido(a) ${nome},\n\nObrigado por se cadastrar na nossa plataforma. Estamos animados por ter você como membro\n\nAtenciosamente,\nEnrolados`;
        await sendEmail(email, 'Bem vindo ao Enrolados!!', mailText);

        res.status(201).json({ message: 'Usuário Registrado com sucesso' });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

// Login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const results = await new Promise((resolve, reject) => {
            db.query('SELECT * FROM usuario WHERE EmailUsuario = ?', [email], (err, results) => {
                if (err) return reject(err);
                resolve(results);
            });
        });

        if (!Array.isArray(results) || results.length === 0) {
            return res.status(404).json({ message: 'Usuário não encotrado' });
        }

        const user = results[0];

        const match = await bcrypt.compare(password, user.SenhaUsuario);
        if (!match) {
            return res.status(401).json({ message: 'Senha inválida' });
        }

        const { SenhaUsuario, ...userInfo } = user;
        
        return res.json({ user: { ...userInfo, ImagemUsuario: user.ImagemUsuario } });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: err.message });
    }
});

// Esqueceu a senha
router.post('/forgot-password', async (req, res) => {
    const { email } = req.body;

    try {
        const results = await new Promise((resolve, reject) => {
            db.query('SELECT * FROM usuario WHERE EmailUsuario = ?', [email], (err, results) => {
                if (err) return reject(err);
                resolve(results);
            });
        });

        if (!Array.isArray(results) || results.length === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        const resetToken = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });

        const resetLink = `http://localhost:3000/Mudar_Senha/${resetToken}`;
        const mailText = `Clique no link a seguir para mudar a sua senha: ${resetLink}`;
        await sendEmail(email, 'Pedido de mudar a senha', mailText);

        res.status(200).json({ message: 'Email para mudar a sua senha foi enviado ao seu email' });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao processar o seu pedido' });
    }
});

// Resetar a senha
router.post('/Mudar_Senha', async (req, res) => {
    const { token, password } = req.body;

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const hashedPassword = await bcrypt.hash(password, 10);

        await new Promise((resolve, reject) => {
            db.query('UPDATE usuario SET SenhaUsuario = ? WHERE EmailUsuario = ?', [hashedPassword, decoded.email], (err, results) => {
                if (err) return reject(err);
                resolve(results);
            });
        });

        res.status(200).json({ message: 'Senha nova registrada com sucesso' });

    } catch (err) {
        console.error(err);
        res.status(400).json({ error: 'Token invalido ou expirado' });
    }
});

module.exports = router;
