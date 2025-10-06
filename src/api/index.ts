import 'dotenv/config';
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import apiRouter from './routes/api.routes';

const PORT: number = parseInt(process.env.API_PORT!) || 3000;

export const app = express();

app.use(bodyParser.urlencoded());

app.use('/api/news', apiRouter);

app.get('/health', (req: Request, res: Response) => {
  console.info(new Date() + ` Se ha accedido al endpoint /health`);
  res.status(200).json({ code: 200, message: 'Status OK' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.info(new Date() + ` Servidor escuchando en el puerto: ${PORT}`);
});
