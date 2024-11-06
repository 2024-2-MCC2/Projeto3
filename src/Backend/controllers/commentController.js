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
        feedback_artigo.IdFeedbackArtigo AS commentId,  -- Correct commentId
        feedback_artigo.MensagemArtigo AS message,
        feedback_artigo.DataComentarioArt AS date,
        usuario.NomeUsuario AS userName,
        usuario.ImagemUsuario AS userImage,
        feedback_artigo.IdUsuario AS userId   -- Include userId
    FROM 
        feedback_artigo 
    JOIN 
        usuario ON feedback_artigo.IdUsuario = usuario.IdUsuario
    WHERE 
        feedback_artigo.IdArtigo = ?
    ORDER BY 
        feedback_artigo.DataComentarioArt DESC  -- Sort by date in descending order
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




const deleteComment = (req, res) => {
  const { commentId, userId } = req.params;

  const query = `
    DELETE FROM feedback_artigo
    WHERE IdFeedbackArtigo = ? AND IdUsuario = ?;
  `;

  db.query(query, [commentId, userId], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Comment not found or not authorized to delete this comment' });
    }

    res.status(200).json({ message: 'Comment deleted successfully' });
  });
};




module.exports = { postComment, getComments, deleteComment};
