const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const studentRoutes = require("./routes/studentRoutes");
const courseRoutes = require("./routes/courseRoutes");
const uniRoutes = require("./routes/uniRoutes");
const authRoutes = require("./routes/authRoutes");
const recommendationRoutes = require("./routes/recommendationRoutes");
const chatRoutes = require("./routes/chatRoute");
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
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/students", studentRoutes);
app.use("/api/v1/courses", courseRoutes);
app.use("/api/v1/universities", uniRoutes);
app.use("/api/v1/recommendations", recommendationRoutes);
app.use("/api/v1/chat", chatRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

// Error handling middleware (Add this new middleware)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
    error: process.env.NODE_ENV === "development" ? err.message : undefined,
  });
});

// 404 handler (Add this new middleware)
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Endpoint not found",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
