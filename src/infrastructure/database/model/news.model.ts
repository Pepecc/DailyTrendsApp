import mongoose from "mongoose";
import { newsSchema } from "../schemas/news.schema";

const DB_COLLECTION = process.env.COLLECTION_NAME as string;

export const newsModel = mongoose.model('news', newsSchema, DB_COLLECTION);