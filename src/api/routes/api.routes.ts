import { Router } from 'express';
import { getAllNews, getNewsByDate, getNewsBySource } from '../controllers/api.controller';

const apiRouter = Router();

apiRouter.get('/get-all-news', getAllNews);
apiRouter.get('/get-source-news', getNewsBySource);
apiRouter.get('/get-date-news', getNewsByDate);

export default apiRouter;