require("dotenv").config();
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config');
const authRoutes = require('./routes/auth.routes');
const postRoutes = require('./routes/post.routes');
const userRoutes = require('./routes/user.routes');
const path = require('path');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); // Body parser

connectDB(); // Connect to MongoDB

// Basic route
app.get('/', (req, res) => {
  res.send("Welcome to Hivemind API");
});
app.use(cors({
  origin: "https://hivemind-frontend.onrender.com", 
  credentials: true
}));

app.use('/api/users', require('./routes/auth.routes'));
app.use('/api/posts', require('./routes/post.routes'));
app.use('/api/users', require('./routes/user.routes'));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
