const express = require('express');
const { postComment, getComments, deleteComment } = require('../controllers/commentController');

const router = express.Router();

router.post('/', postComment);
router.get('/:articleId', getComments);
router.delete('/:commentId/:userId', deleteComment);

module.exports = router;
