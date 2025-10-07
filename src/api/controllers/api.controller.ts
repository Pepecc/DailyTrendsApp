import { Request, Response } from 'express';
import { allNews, sourceNews } from '../services/api.service';

export async function getAllNews(req: Request, res: Response): Promise<any> {
  console.log(new Date() + 'Se accedió al endpoint /api/news/get-all-news');
  try {
    const data = await allNews();
    res.json({ status: 200, data });
  } catch (error) {
    throw new Error('Error al obtener todas las noticias ' + error);
  }
}

export async function getNewsBySource(req: Request, res: Response): Promise<any> {
  console.log(new Date() + 'Se accedió al endpoint /api/news/get-source-news');
  try {
    const { source_name } = req.query;
    const data = await sourceNews(source_name as string);
    res.json({ status: 200, data });
  } catch (error) {
    throw new Error('Error al obtener las noticias por fuente ' + error);
  }
}

