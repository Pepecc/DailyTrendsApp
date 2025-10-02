import { News } from '../news/news.entity';

export interface NewsRepository {
  getAllNews(): Promise<News>;

  searchNewsById(id: string): Promise<News>;

  deleteNewsById(id: string): Promise<News>;
}

