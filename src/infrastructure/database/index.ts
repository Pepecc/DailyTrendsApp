import { Db, MongoClient } from "mongodb";

const DB_URI= process.env.DB_CONNECTION_STRING as string;
const DB_NAME= process.env.DB_NAME as string;

let database: Db;

export async function connectDb () {
    try {
        const client = new MongoClient(DB_URI);
        await client.connect();
        database = client.db(DB_NAME);
        console.log('Connection to MongoDB established.');
        return database;
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
}