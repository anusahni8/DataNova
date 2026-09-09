import "dotenv/config";
import express from "express";
import cors from "cors";
import evaluate from "./api/evaluate.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({limit:"1mb"}));
app.use(express.static("."));

app.post("/api/evaluate", evaluate);

app.listen(port, ()=>console.log(`DataNova AI Interview running on http://localhost:${port}`));
