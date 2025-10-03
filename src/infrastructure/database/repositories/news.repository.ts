import { News } from "../../../domain/news/news.entity";
import { NewsRepository } from "../../../domain/repositories/news.repository";
import { newsModel } from "../model/news.model";

export class NewsRepo implements NewsRepository {

  async getAllNews(): Promise<News[]> {
    const docs = await newsModel.find();
    console.log('News ', docs)
    let newsResult: News[] = [];

    docs.forEach((doc) => {
      newsResult.push(new News(
        doc.headline,
        doc.createdAt,
        doc.source
      ))
    });
    console.log('Results ', newsResult)
    return newsResult;
  }
  async searchNewsById(id: string): Promise<News> {

    throw new Error("Method not implemented.");
  }
  async deleteNewsById(id: string): Promise<News> {
    throw new Error("Method not implemented.");
  }
  
}