const express = require('express');
const bcrypt = require('bcrypt');
const multer = require('multer');
const path = require('path');
const db = require('../db');
const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '..', '..', 'Frontend', 'public', 'uploads'));
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    },
});

const upload = multer({ storage });

// Cadastro
router.post('/register', upload.single('profileImage'), async (req, res) => {
    const { email, password, nome, datadeNascimento } = req.body;
    
    const imagemPath = req.file ? `/uploads/${req.file.filename}` : null;

    if (!email || !password || !nome || !datadeNascimento) {
        console.log(req.body);
        return res.status(400).json({ error: 'All fields are required' });
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

        const { SenhaUsuario, ...userInfo } = user;
        
        return res.json({ user: { ...userInfo, ImagemUsuario: user.ImagemUsuario } });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: err.message });
    }
});

module.exports = router;
