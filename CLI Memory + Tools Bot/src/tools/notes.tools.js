import { tool } from "langchain";
import * as z from "zod";

const notes = [];

export const createNotes = tool(
    async function createNotes({title, description}) {
        notes.push({
            title, description
        });

        return JSON.stringify({
            message: "Note created successfully",
            success: true,
        });
        
    }, 
    {
        name: "createNotes",
        description: "Create a new note with description and tile when user asks to create or remember the note",
        schema: z.object({
            title: z.string(),
            description: z.string(),
        })
    }
);

export const readNotes = tool(
    async function readNotes({}) {
        return JSON.stringify(notes);
    },
    {
        name: "readNotes",
        description: "Read existing notes when user asks to read or show the notes",
        schema: z.object({})
    }
);