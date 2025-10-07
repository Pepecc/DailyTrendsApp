import { News } from '../news/news.entity';

export interface NewsRepository {
  getAllNews(): Promise<News[]>;

  storeNews(news: News[]): Promise<void>;

  searchNewsBySource(sourceName: string): Promise<News[]>;
}
