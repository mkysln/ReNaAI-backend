import Groq from  "groq-sdk";
import dotenv from "dotenv";
import { weeklyCoachPrompt } from "../prompts/weeklyCoach.prompt";
dotenv.config();
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY ,
});
export async function generateWeeklyCoach(userData: any) {
    const completion = await groq.chat.completions.create({
      model: "openai/gpt-oss-120b",
      messages: [
        {
          role: "user",
          content: weeklyCoachPrompt(userData)
        },
    ],});
    return completion.choices[0].message.content;
}