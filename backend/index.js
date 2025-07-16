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
app.use(cors({
  origin: "https://hivemind-frontend.onrender.com", 
  credentials: true
}));
const app = express();

app.use(express.json()); 

connectDB();


app.get('/', (req, res) => {
  res.send("Welcome to Hivemind API");
});


app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/posts', require('./routes/post.routes'));
app.use('/api/users', require('./routes/user.routes'));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
