const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectTodDb = require('./db');



const authRouter = require("./routes/auth.route")
const userRouter = require ("./routes/user.route");
const isLoggedIn = require("./middleware");
const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {	});

app.use("/auth",authRouter);
app.use("/user",isLoggedIn,userRouter);

app.listen(PORT, () => {
    connectTodDb();
    console.log("Server running on port " + PORT)
});