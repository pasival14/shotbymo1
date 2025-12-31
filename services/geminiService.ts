
import { GoogleGenAI, Type } from '@google/genai';
import { AIConceptResponse } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateCreativeConcept = async (description: string): Promise<AIConceptResponse> => {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Generate a creative mobile videography concept for the following brand/event description: "${description}". 
    The tone should be cinematic, modern, and engaging. Focus on vertical (9:16) storytelling.`,
    config: {
      responseMimeType: 'application/json',
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          vibe: { type: Type.STRING, description: 'Overall mood and aesthetic' },
          scenes: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                visual: { type: Type.STRING, description: 'What we see' },
                audio: { type: Type.STRING, description: 'Sound/Music direction' }
              },
              required: ['visual', 'audio']
            }
          },
          tips: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: 'Technical or creative tips for filming'
          }
        },
        required: ['vibe', 'scenes', 'tips']
      }
    }
  });

  return JSON.parse(response.text || '{}');
};
