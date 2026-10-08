import Groq from 'groq-sdk';
import { SYSTEM_PROMPT } from '../src/lib/chatbotPrompt.js';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: "Oops, this method isn't allowed here." });
  }

  try {
    // Initialize Groq securely on the backend (Serverless Function)
    const groq = new Groq({
      apiKey: process.env.VITE_GROQ_API_KEY, 
    });

    const { messages } = req.body;

    // Combine the hidden system prompt with the user messages
    const apiMessages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...messages
    ];

    // Request Groq API
    const completion = await groq.chat.completions.create({
      messages: apiMessages,
      model: 'openai/gpt-oss-120b',
      temperature: 0.5,
      max_tokens: 1024,
    });

    // Send the reply back to the frontend
    const reply = completion.choices[0]?.message?.content || "I didn't quite catch that! Could you try asking in a different way? 😅";
    return res.status(200).json({ reply });

  } catch (error) {
    console.error("Secure Backend Groq API Error:", error);
    return res.status(500).json({ error: "My brain is on a short break right now! Please email Siratim directly instead. 😅" });
  }
}
