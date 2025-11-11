
import { GoogleGenAI } from "@google/genai";

if (!process.env.API_KEY) {
  console.warn(
    "API_KEY environment variable not set. Using a placeholder key. AI features will not work."
  );
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY ?? "YOUR_API_KEY_HERE" });

export const getHealthTip = async (topic: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return new Promise(resolve => setTimeout(() => resolve(`💡 **Mock Tip for ${topic}:** Drink plenty of water and get 8 hours of sleep. This is a mock response because the API key is not configured.`), 1000));
  }
  try {
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `You are a helpful medical assistant. Provide a concise, easy-to-understand health tip about "${topic}". The tip should be practical and safe for a general audience. Do not provide medical advice that could replace a doctor's consultation. Start the tip with a relevant emoji. Format your response in markdown.`,
        config: {
            temperature: 0.7,
            topP: 1,
            topK: 32,
            maxOutputTokens: 256,
        }
    });
    
    return response.text;
  } catch (error) {
    console.error("Error generating health tip:", error);
    return "❌ Sorry, I couldn't generate a health tip right now. Please check your connection or API key and try again.";
  }
};
