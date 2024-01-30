import  { Schema, model } from "mongoose";


const SenderSchema = new Schema({
    Sender: {
        type: String,
        required: true
    },
    created_at: { type: Date, required: true, default: Date.now },


})

export const SenderModel = model('sender', SenderSchema)