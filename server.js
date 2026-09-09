import "dotenv/config";
import express from "express";
import cors from "cors";
import OpenAI from "openai";

const app = express();
const port = process.env.PORT || 3000;
const client = new OpenAI();

app.use(cors());
app.use(express.json({limit:"1mb"}));
app.use(express.static("."));

app.post("/api/evaluate", async (req,res)=>{
  try{
    const {role, skills, question, answer, competency, difficulty} = req.body;
    if(!question || !answer) return res.status(400).json({error:"question and answer are required"});

    const response = await client.responses.create({
      model: process.env.OPENAI_MODEL || "gpt-5.6-luna",
      store: false,
      instructions: `You are an expert technical interviewer for DataNova Consulting.
Evaluate a candidate answer fairly against the question and competency. Do not infer protected traits.
Focus only on job-relevant evidence. Keep the final hiring decision human-reviewed.
Return ONLY valid JSON with keys:
score (integer 0-100), strengths (array of strings), gaps (array of strings), evidence (array of strings), follow_up (string).`,
      input: JSON.stringify({
        role, skills, difficulty, competency, question, answer
      })
    });

    const text = response.output_text || "";
    const cleaned = text.replace(/^```json\s*/,"").replace(/\s*```$/,"").trim();
    const parsed = JSON.parse(cleaned);
    res.json(parsed);
  }catch(err){
    console.error(err);
    res.status(500).json({error:"AI evaluation failed"});
  }
});

app.listen(port, ()=>console.log(`DataNova AI Interview running on http://localhost:${port}`));
