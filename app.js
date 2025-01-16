require("dotenv").config();
const express = require("express");
const cookiesParser = require("cookie-parser");
const app = express();
const authRoutes = require("./routes/authRoutes");
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookiesParser());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
