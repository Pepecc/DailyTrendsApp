import { Router } from 'express';
import { getAllNews, getNewsBySource } from '../controllers/api.controller';

const apiRouter = Router();

apiRouter.get('/get-all-news', getAllNews);
apiRouter.get('/get-source-news', getNewsBySource);

export default apiRouter;