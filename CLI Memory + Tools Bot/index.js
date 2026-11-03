import agent from "./src/agents/notes.agent.js";
import rl from "./src/utils/readline.js"


const messages = [];


while(true){
    const userInput = await rl.question("You: ");

    messages.push({
        role: "user",
        content: userInput,
    });

    const stream = await agent.stream({messages}, {streamMode: "messages"});
    let answer = ""
    for await(const [chunk, metadata] of stream){
        if(typeof chunk.text === "string" && chunk.text.length > 0){
            process.stdout.write(chunk.text);
            answer += chunk.text;
        }
    };
    messages.push({
        role: "assistant",
        content: answer,
    });
    process.stdout.write("\n");
}

