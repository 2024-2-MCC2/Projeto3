const db = require('../db');

const postComment = (req, res) => {
  const { message, articleId, userId, userImage } = req.body;
  const query = 'INSERT INTO feedback_artigo (MensagemArtigo, IdArtigo, IdUsuario, ImagemUsuario) VALUES (?, ?, ?, ?)';
  
  db.query(query, [message, articleId, userId, userImage], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: 'Comment posted successfully', commentId: result.insertId });
  });
};


const getComments = (req, res) => {
  const { articleId } = req.params;
  const query = `
      SELECT 
          feedback_artigo.MensagemArtigo AS message,
          feedback_artigo.DataComentarioArt AS date,
          usuario.NomeUsuario AS userName,
          usuario.ImagemUsuario AS userImage
      FROM 
          feedback_artigo 
      JOIN 
          usuario ON feedback_artigo.IdUsuario = usuario.IdUsuario
      WHERE 
          feedback_artigo.IdArtigo = ?
  `;

  db.query(query, [articleId], (err, results) => {
      if (err) {
          return res.status(500).json({ error: err.message });
      }
      const commentsWithBase64Images = results.map(comment => ({
          ...comment,
          userImage: comment.userImage ? comment.userImage.toString('base64') : null,
      }));
      res.status(200).json(commentsWithBase64Images);
  });
};




module.exports = { postComment, getComments };
