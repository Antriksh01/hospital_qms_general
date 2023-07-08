import express from "express";
import cors from "cors";
// import mysql from "mysql";
import authRoutes from "./routes/auth.js";
const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["POST", "GET"],
    credentials: true,
  })
);

app.use("/auth/api", authRoutes);

app.listen(5000, () => {
  console.log("Server started on port 5000");
});