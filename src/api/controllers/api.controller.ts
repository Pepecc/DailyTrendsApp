import { Request, Response } from 'express';

export async function getAllNews(req: Request, res: Response): Promise<any> {
  console.log(new Date() + 'Se accedió al endpoint /api/news/get-all-news');
  try {
    res.json({ status: 200, message: 'Endpoint ok' });
  } catch (error) {
    throw new Error('Error al obtener todas las noticias ' + error);
  }
}

export async function getNewsBySource(req: Request, res: Response): Promise<any> {
  try {
    res.json({ status: 200, message: 'Endpoint ok' });
  } catch (error) {
    throw new Error('Error al obtener las noticias por fuente ' + error);
  }
}
