require("dotenv").config();
const express = require("express");
const cookiesParser = require("cookie-parser");
const cors = require("cors");
const app = express();
const authRoutes = require("./routes/authRoutes");
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookiesParser());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
