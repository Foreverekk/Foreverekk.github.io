const express = require('express');
const router = express.Router();
const { getAllPosts, getPostById } = require('../controllers/postController');

// Get all posts
router.get('/', getAllPosts);

// Get a single post by ID
router.get('/:id', getPostById);

module.exports = router;
