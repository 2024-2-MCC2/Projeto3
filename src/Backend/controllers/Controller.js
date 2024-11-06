const db = require('../config/db');
const bcrypt = require('bcrypt');
const multer = require('multer');
const path = require('path');

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../../Frontend/public/uploads');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage });

// User registration
const registerUser = async (req, res) => {
    const { name, email, password, dateOfBirth } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const profilePhoto = req.file ? req.file.path : null;

        const sql = 'INSERT INTO usuario (NomeUsuario, EmailUsuario, SenhaUsuario, DatadeNascimento, ImagemUsuario) VALUES (?, ?, ?, ?, ?)';
        db.query(sql, [name, email, hashedPassword, dateOfBirth, profilePhoto], (err, result) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.status(201).json({ message: 'User registered successfully' });
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { registerUser, upload };
