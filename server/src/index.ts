import express from "express";
import cors from "cors";

import userRoutes from "./routes/users";
import authRoutes from "./routes/auth";

import "dotenv/config";
import mongoose from "mongoose";

import cookieParser from "cookie-parser";

mongoose.connect(process.env.DB_CONNECTION_STRING as string);

const app = express();

app.use(cookieParser());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
