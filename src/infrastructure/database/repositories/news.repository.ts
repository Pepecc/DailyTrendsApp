import { News } from "../../../domain/news/news.entity";
import { NewsRepository } from "../../../domain/repositories/news.repository";
import { newsModel } from "../model/news.model";

export class NewsRepo implements NewsRepository {
  async getAllNews(): Promise<News> {
    const docs = await newsModel.find().lean();
    let newsResult: News[] = [];    
    newsResult = docs.map((doc) => new News(doc.headline, doc.createdAt, doc.source));
    throw new Error('Method not implemented.');
  }
  searchNewsById(id: string): Promise<News> {
    throw new Error("Method not implemented.");
  }
  deleteNewsById(id: string): Promise<News> {
    throw new Error("Method not implemented.");
  }
  
}