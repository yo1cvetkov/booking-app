import express, { type Request, type Response } from "express";
import cors from "cors";

import "dotenv/config";
import mongoose from "mongoose";

mongoose.connect(process.env.DB_CONNECTION_STRING as string);

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.get("/api/test", async (req: Request, res: Response) => {
  res.json({ message: "Hello from server" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
