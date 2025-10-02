import mongoose from "mongoose";

export const newsSchema = new mongoose.Schema({
    headline: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true
    },
    source: {
        type: String,
        required: true
    }
});