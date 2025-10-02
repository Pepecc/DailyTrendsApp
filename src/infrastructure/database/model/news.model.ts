import mongoose from "mongoose";
import { newsSchema } from "../schemas/news.schema";

export const newsModel = mongoose.model('News', newsSchema);