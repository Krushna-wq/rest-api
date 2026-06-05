import { Request, Response } from "express";
import Note from "../models/model";

export const getAllNotes = async (req: Request, res: Response) => {
    try{
        const notes = await Note.find()
        res.json(notes)
    }catch(error){
       res.status(500).json({message: "Something went Wrong!"})
    }
}

export const deleteNote = async (req: Request, res: Response) => {
    try{
        const { id } = req.params
        await Note.findByIdAndDelete(id)
        res.json({message: "Note deleted"})
    }catch(error){
        res.status(500).json({message: "Something went Wrong"})
    }
}