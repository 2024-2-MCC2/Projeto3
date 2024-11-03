const express = require('express');
const bcrypt = require('bcrypt');
const multer = require('multer');
const db = require('../db');
const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

//Cadastro
router.post('/register', upload.single('profileImage'), async (req, res) => {
    const { email, password, nome, datadeNascimento } = req.body;
    const imagem = req.file ? req.file.buffer : null;

    if (!email || !password || !nome || !datadeNascimento) {
        console.log(req.body);
        return res.status(400).json({ error: 'All fields are required' });
    }
    
    try {
        const hash = await bcrypt.hash(password, 10);
        
        await new Promise((resolve, reject) => {
            db.query(
                'INSERT INTO usuario (EmailUsuario, SenhaUsuario, NomeUsuario, DatadeNascimento, ImagemUsuario) VALUES (?, ?, ?, ?, ?)', 
                [email, hash, nome, datadeNascimento, imagem],
                (err, results) => {
                    if (err) return reject(err);
                    resolve(results);
                }
            );
        });
        
        res.status(201).json({ message: 'User registered successfully' });
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
            return res.status(404).json({ message: 'User not found' });
        }

        const user = results[0];

        const match = await bcrypt.compare(password, user.SenhaUsuario);
        if (!match) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const imageBase64 = user.ImagemUsuario ? user.ImagemUsuario.toString('base64') : null;

        const { SenhaUsuario, ImagemUsuario, ...userInfo } = user;
        return res.json({ user: { ...userInfo, ImagemUsuario: imageBase64 } });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: err.message });
    }
});




module.exports = router;
