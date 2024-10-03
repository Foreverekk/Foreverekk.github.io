const app = require('./app');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;

// Database connection
mongoose.connect('mongodb://localhost:27017/corpa', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => console.log(err));
