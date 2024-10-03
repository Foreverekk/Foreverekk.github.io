const express = require('express');
const app = express();
const mongoose = require('mongoose');
const postRoutes = require('./routes/postRoutes');
const userRoutes = require('./routes/userRoutes');

// Middleware
app.use(express.json());

// Routes
app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);

// Error handling
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

module.exports = app;
