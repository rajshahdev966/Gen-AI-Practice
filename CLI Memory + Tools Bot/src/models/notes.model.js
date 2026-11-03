import { ChatGroq } from "@langchain/groq"
import config from "../config/config.js";


const llm = new ChatGroq({
    apiKey: config.API_KEY,
    model: "openai/gpt-oss-120b",
});


export default llm;