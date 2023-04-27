import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import dataRoute from "./routes/Data.js";
import questionRoute from "./routes/Data.js";
dotenv.config();
const app = express();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

app.use(express.json());
app.use(cors());
app.use("/data", dataRoute);
app.use("/data/mcq", questionRoute);

app.listen(8080, () => {
  connect();
  console.log("connect");
});
