const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const colors = require("colors");
require("dotenv").config();
require("./Models/db");
const route = require("./Routes/userRoute");
const path = require("path");

const _dirname = path.resolve();

// ✅ CORS (no trailing slash in origin)
app.use(
  cors({
    origin: "https://netflix-kisz.onrender.com",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ✅ API routes
app.use("/api", route);

// ✅ Serve frontend build
app.use(express.static(path.join(_dirname, "frontend", "dist")));

// ✅ Express 5–safe catch-all route
app.use((req, res) => {
  res.sendFile(path.join(_dirname, "frontend", "dist", "index.html"));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port`.bgCyan.white, PORT);
});
