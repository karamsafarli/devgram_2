import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from '@google/generative-ai'

export const POST = async (req, res) => {
    try {
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const { prompt, imageParts } = await req.json();
        console.log(prompt)
        // console.log(imageParts)
        const modelName = imageParts.length > 0 ? "gemini-pro-vision" : "gemini-pro"
        const model = genAI.getGenerativeModel({ model: modelName });
        const data = imageParts.length > 0 ? [prompt, ...imageParts] : prompt;
        const result = await model.generateContent(data);
        const response = await result.response;
        const text = response.text();
        return NextResponse.json(text);
    } catch (error) {
        return NextResponse.json({ msg: error })
    }
}