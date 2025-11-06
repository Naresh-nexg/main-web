import { GoogleGenAI, Type } from "@google/genai";
import { GeminiResponse } from "../types";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const passionSchema = {
  type: Type.OBJECT,
  properties: {
    passion: {
      type: Type.STRING,
      description: "A potential career path or field of passion."
    },
    description: {
      type: Type.STRING,
      description: "A brief, inspiring description of why this could be a great career path."
    },
    skills_to_develop: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
      description: "A list of 3-5 key skills to develop for this path."
    },
    potential_careers: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
      description: "A list of 3-5 potential job titles or roles in this field."
    },
    learning_resources_suggestions: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
      description: "A list of 3-5 types of learning resources (e.g., 'Online courses on Coursera', 'Read books by...', 'Join communities like...')."
    }
  },
  required: ["passion", "description", "skills_to_develop", "potential_careers", "learning_resources_suggestions"],
};

export const getPassionRecommendations = async (interests: string): Promise<GeminiResponse> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Based on the following user interests, act as Aptrowin, a friendly and encouraging AI career mentor for students. Identify 3 potential career paths or fields of passion. For each one, provide an inspiring description, key skills to develop, potential job titles, and suggestions for learning resources. User interests: "${interests}"`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            recommendations: {
              type: Type.ARRAY,
              items: passionSchema,
            },
          },
        },
      },
    });

    const jsonText = response.text.trim();
    const parsedResponse = JSON.parse(jsonText) as GeminiResponse;
    
    if (!parsedResponse.recommendations || !Array.isArray(parsedResponse.recommendations)) {
        throw new Error("Invalid response structure from Gemini API");
    }

    return parsedResponse;
  } catch (error) {
    console.error("Error fetching recommendations from Gemini:", error);
    throw new Error("Failed to get recommendations from Gemini.");
  }
};
