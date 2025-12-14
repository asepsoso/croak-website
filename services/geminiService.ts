import { GoogleGenAI } from "@google/genai";

// Initialize the client
// process.env.API_KEY is guaranteed to be available in this environment.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are Croak, a cynical, sarcastic, and chaotic frog crypto trader on Solana. 
You give brief, savage, one-sentence roasts about the user's potential trades, the market state, or their life choices. 
You are pessimistic but funny. 
Keep it under 25 words. 
Do not give actual financial advice. 
Use slang like "bagholder", "rekt", "moon", "ngmi", "wagmi" ironically.
`;

const STATIC_RESPONSES = [
  "Your next trade? Pain.",
  "Charts look like your ex: toxic.",
  "Buy? Sell? No. Cope.",
  "The frog has spoken. You're doomed.",
  "Green candles? Delusion.",
  "Leverage is just a faster way to zero.",
  "I've seen puddles deeper than this liquidity.",
];

export const getCroakWisdom = async (): Promise<string> => {
  try {
    // 5% chance to just return a static classic roast for speed/variety
    if (Math.random() < 0.05) {
        return STATIC_RESPONSES[Math.floor(Math.random() * STATIC_RESPONSES.length)];
    }

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: 'Give me a savage crypto trading roast.',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 1.1, // High temperature for more chaos
        maxOutputTokens: 50,
      }
    });

    return response.text || STATIC_RESPONSES[0];
  } catch (error) {
    console.error("Croak AI Connection Error:", error);
    // Fallback to static responses if API fails (or key is invalid)
    return STATIC_RESPONSES[Math.floor(Math.random() * STATIC_RESPONSES.length)];
  }
};
