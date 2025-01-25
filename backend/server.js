const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const postRoutes = require('./routes/PostRoutes');
const multer = require('multer');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Log the MongoDB URI for debugging
console.log('MongoDB URI:', process.env.MONGO_URL);

// Database Connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log('MongoDB Connection Error:', err));

// Routes
app.use('/api/posts', postRoutes);

// Storage configuration for multer
const storage = multer.diskStorage({
  destination: (req, file, fn) => {
    fn(null, 'images');
  },
  filename: (req, file, fn) => {
    fn(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

app.post('/api/upload', upload.single('file'), (req, res) => {
  res.status(200).json('Image uploaded successfully');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
