const { GoogleGenerativeAI } = require("@google/generative-ai");
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GeminiService {
    const genAI = new GoogleGenerativeAI(environment.geminiApiKey);


    // Example method for making a POST request to Gemini API
    generateContent(data: any): Observable<any> {

        // For text-only input, use the gemini-pro model
        const model = this.genAI.getGenerativeModel({ model: "gemini-pro" });

        const prompt = data

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        console.log(text);
        return text;
    }
