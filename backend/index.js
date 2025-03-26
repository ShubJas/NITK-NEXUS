const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const studentRoutes = require("./routes/studentRoutes");
const courseRoutes = require("./routes/courseRoutes");
const connectDb = require("./config/db");
dotenv.config();
const PORT = process.env.PORT || 8000;
const app = express();

//Connect Database
connectDb();

//middleware
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your frontend origin
    credentials: true, // Enable credentials if needed
  })
);

//Routes
app.use("/api/v1/students", studentRoutes);
app.use("/api/v1/courses", courseRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log("Port Connected");
});
