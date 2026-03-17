import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { HORSES, SOLD_HORSES } from '../constants';

// Initialize the API
// Note: In a real production app, this should be proxied through a backend to protect the key.
// However, per instructions, we use process.env.API_KEY directly.
const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
Du är en vänlig och kunnig AI-assistent ("Concierge") för Ekelunda Gård, en hästgård i Skåne som föder upp islandshästar.
Din uppgift är att svara på frågor från besökare om gården, hästarna och rasen islandshästar.

Här är information om gården och hästarna:
Vi har ${HORSES.length} hästar just nu på gården.
Vi bedriver småskalig uppfödning med fokus på hållbara hästar med bra lynne och gångarter.
Vi finns i det vackra skånska landskapet.

Här är listan över våra nuvarande hästar:
${HORSES.map(h => `- ${h.name} (Född ${h.birthYear}, ${h.color}, ${h.gender}): ${h.description}`).join('\n')}

Här är några hästar vi sålt (om någon frågar efter en häst som inte finns ovan):
${SOLD_HORSES.map(h => `- ${h.name}`).join('\n')}

Svara alltid på svenska. Var artig, professionell och kortfattad.
Om någon frågar om att köpa häst, be dem kontakta oss via email eller telefon (finns på kontaktsidan).
`;

let chatSession: Chat | null = null;

export const getChatSession = (): Chat => {
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = getChatSession();
    const response: GenerateContentResponse = await chat.sendMessage({ message });
    return response.text || "Ursäkta, jag förstod inte riktigt. Kan du försöka igen?";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Tyvärr uppstod ett fel vid anslutningen till vår assistent. Försök igen senare.";
  }
};