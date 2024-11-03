const db = require('../db');

const registerUser = (req, res) => {
  const { name, dob, email, password } = req.body;
  const profileImage = req.file ? req.file.filename : null;

  const query = 'INSERT INTO usuario (NomeUsuario, DatadeNascimento, EmailUsuario, SenhaUsuario, ImagemUsuario) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [name, dob, email, password, profileImage], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: 'User registered successfully', userId: result.insertId });
  });
};

module.exports = { registerUser };
