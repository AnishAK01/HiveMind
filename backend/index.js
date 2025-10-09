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
app.use(cors({
<<<<<<< HEAD
  origin: "http://localhost:5173"|| "https://hivemind-frontend.onrender.com", 
  credentials: true
}));
app.use(express.json()); 
=======
  origin:  "https://hivemind-frontend.onrender.com", 
  credentials: true
}));
app.use(express.json()); // Body parser
>>>>>>> 67a9bd5cf752f2db5e482475ec51872ba1dfed69

connectDB(); 

// Basic route
app.get('/', (req, res) => {
  res.send("Welcome to Hivemind API");
});


app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/posts', require('./routes/post.routes'));
app.use('/api/users', require('./routes/user.routes'));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
