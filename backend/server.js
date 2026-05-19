const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://ai-complaint-frontend-9hzx.onrender.com",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("AI Complaint Backend is running");
});

app.use(
  "/api/complaints",
  require("./routes/complaintRoutes")
);

app.use(
  "/api/auth",
  require("./routes/authRoutes")
);

app.use(
  "/api/ai",
  require("./routes/aiRoutes")
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});