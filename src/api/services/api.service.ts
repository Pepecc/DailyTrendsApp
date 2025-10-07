import { NewsRepo } from '../../infrastructure/database/repositories/news.repository';

const newsRepo = new NewsRepo();

export async function allNews() {
  try {
    const storedNews = await newsRepo.getAllNews();
    return storedNews;
  } catch (error) {
    throw new Error('Error en el servicio allNews ' + error);
  }
}

export async function sourceNews(sourceName: string) {
  try {
    const newsFiltered = await newsRepo.searchNewsBySource(sourceName);
    return newsFiltered;
  } catch (error) {
    throw new Error('Error en el servicio sourceNews ' + error);
  }
}

