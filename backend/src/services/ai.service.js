import { GoogleGenAI } from "@google/genai";
import { GOOGLE_GEMINI_KEY } from "../../constants.js";

const ai = new GoogleGenAI({ apiKey: GOOGLE_GEMINI_KEY });
// console.log(GOOGLE_GEMINI_KEY);

async function generateContent(prompt) {
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: prompt,
    });

    // console.log(response.text);
    return response.text
}

export default generateContent;