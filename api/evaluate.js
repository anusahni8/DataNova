import OpenAI from "openai";

export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "method not allowed" });
  }

  try {
    const { role, skills, question, answer, competency, difficulty } = req.body || {};
    if (!question || !answer) {
      return res.status(400).json({ error: "question and answer are required" });
    }

    const client = new OpenAI();
    const response = await client.responses.create({
      model: process.env.OPENAI_MODEL || "gpt-5.6-luna",
      store: false,
      instructions: `You are an expert technical interviewer for DataNova Consulting.
Evaluate a candidate answer fairly against the question and competency. Do not infer protected traits.
Focus only on job-relevant evidence. Keep the final hiring decision human-reviewed.
Return ONLY valid JSON with keys:
score (integer 0-100), strengths (array of strings), gaps (array of strings), evidence (array of strings), follow_up (string).`,
      input: JSON.stringify({
        role,
        skills,
        difficulty,
        competency,
        question,
        answer,
      }),
    });

    const text = response.output_text || "";
    const cleaned = text.replace(/^```json\s*/, "").replace(/\s*```$/, "").trim();
    return res.json(JSON.parse(cleaned));
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "AI evaluation failed" });
  }
}
