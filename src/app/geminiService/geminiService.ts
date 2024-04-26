import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from "@google/generative-ai";
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import prompts from './prompts.json';
import { HttpClient } from '@angular/common/http';
import { Reaction } from "../dataModels/reaction";



@Injectable({
    providedIn: 'root'
})
export class GeminiService {
    constructor(private http: HttpClient) { }

    safetySettings = [
        {
            category: HarmCategory.HARM_CATEGORY_HARASSMENT,
            threshold: HarmBlockThreshold.BLOCK_NONE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
            threshold: HarmBlockThreshold.BLOCK_NONE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
            threshold: HarmBlockThreshold.BLOCK_NONE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
            threshold: HarmBlockThreshold.BLOCK_NONE,
        }
    ];

    genAI = new GoogleGenerativeAI(environment.geminiApiKey);

    async generateContent(data: any): Promise<any> {
        const model = this.genAI.getGenerativeModel({ model: "gemini-pro", safetySettings: this.safetySettings });
        const prompt = data
        const result = await model.generateContent(prompt);
        const response = await result.response;

        try {
            return JSON.parse(response.text());
        } catch (error) {
            return null;
        }
    }

    async generateReaction(reactions: String) {
        const reactionDataset = await this.http.get('assets/reactions.csv', { responseType: 'text' }).toPromise();
        return await this.generateContent(prompts.reaction + reactionDataset + "CURRENT CONVERSATION:" + reactions);
    }
}