import { ChatGroq } from "@langchain/groq"
import * as readline from "node:readline/promises"
import { stdin as input, stdout as output } from "node:process"
import dotenv from "dotenv"
dotenv.config()


const llm = new ChatGroq({
    model: "openai/gpt-oss-120b",
    apiKey: process.env.API_KEY,
});

const messages = [];

const rl = readline.createInterface({ input, output });

while (true) {
    const userInput = await rl.question("User Input: ");
    messages.push({
        role: "user",
        content: userInput,
    });

    const stream = await llm.stream(messages);
    let answer = "";
    for await (const chunk of stream) {
        if (typeof chunk.content === "string") {
            process.stdout.write(chunk.content);
            answer += chunk.content;
        }
    };


    messages.push({role: "assistant", content: answer});    
    process.stdout.write("\n");
}

