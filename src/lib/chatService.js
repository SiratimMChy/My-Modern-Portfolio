import Groq from 'groq-sdk';
import { SYSTEM_PROMPT } from './chatbotPrompt';

export const getChatResponse = async (newMessages) => {

  const formattedMessages = newMessages.map(msg => ({
    role: msg.role === 'assistant' ? 'assistant' : 'user',
    content: msg.content
  }));


  if (import.meta.env.PROD) {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: formattedMessages })
    });
    
    const data = await response.json();
    return data.reply;
  } 
  

  const groq = new Groq({
    apiKey: import.meta.env.VITE_GROQ_API_KEY,
    dangerouslyAllowBrowser: true, 
  });

  const apiMessages = [
    { role: 'system', content: SYSTEM_PROMPT },
    ...formattedMessages
  ];

  const completion = await groq.chat.completions.create({
    messages: apiMessages,
    model: 'openai/gpt-oss-120b',
    temperature: 0.5,
    max_tokens: 1024,
  });

  return completion.choices[0]?.message?.content || "I didn't quite catch that! Could you try asking in a different way? 😅";
};
