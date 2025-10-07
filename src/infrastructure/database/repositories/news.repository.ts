import { News } from '../../../domain/news/news.entity';
import { NewsRepository } from '../../../domain/repositories/news.repository';
import { newsModel } from '../model/news.model';

export class NewsRepo implements NewsRepository {
  async getAllNews(): Promise<News[]> {
    try {
      const docs = await newsModel.find();
      let newsResult: News[] = [];
      docs.forEach((doc) => {
        newsResult.push(new News(doc.headline, doc.createdAt, doc.source));
      });
      return newsResult;
    } catch (error) {
      throw new Error('Error al obtener las noticias ' + error);
    }
  }

  async storeNews(freshNews: News[]): Promise<void> {
    try {
      for await (let news of freshNews) {
        const itemNews = new newsModel(news);
        await itemNews.save();
      }
      console.log('Noticias guardadas con éxito en BBDD');
    } catch (error) {
      throw new Error('Error al guardar las noticias ' + error);
    }
  }

  async searchNewsBySource(sourceName: string): Promise<News[]> {
    try {
      const docs = await newsModel.find({ source: sourceName });
      let newsResult: News[] = [];
      docs.forEach((doc) => {
        newsResult.push(new News(doc.headline, doc.createdAt, doc.source));
      });
      return newsResult;
    } catch (error) {
      throw new Error('Error al buscar las noticias por fuente ' + error);
    }
  }

}
