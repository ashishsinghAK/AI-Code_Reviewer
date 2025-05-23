async function generateContent(prompt) {
  const { GoogleGenAI } = await import('@google/genai');
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  // Prepare the request
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: [
      {
        role: "user",
        parts: [{ text: prompt }]
      }
    ],
  });
  
  const text = response.candidates?.[0]?.content?.parts?.[0]?.text;
  return text ?? "No content returned";
}

module.exports = generateContent;
