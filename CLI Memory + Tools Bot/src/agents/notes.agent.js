import { createAgent } from "langchain";
import llm from "../models/notes.model.js";
import { createNotes, readNotes } from "../tools/notes.tools.js";



const agent = createAgent({
    model: llm,
    tools: [readNotes, createNotes]
})


export default agent;