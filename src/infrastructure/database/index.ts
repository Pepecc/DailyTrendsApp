import mongoose from 'mongoose';

const DB_URI = process.env.DB_CONNECTION_STRING as string;

export async function connectDb() {
    try {
    await mongoose.connect(DB_URI);
    console.log('Connection to MongoDB established.');
    } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
    }
}
