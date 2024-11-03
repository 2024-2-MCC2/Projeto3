const express = require('express');
const { postComment, getComments } = require('../controllers/commentController');

const router = express.Router();

router.post('/', postComment);
router.get('/:articleId', getComments);

module.exports = router;
