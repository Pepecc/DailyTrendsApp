import 'dotenv/config';
import puppeteer from 'puppeteer';
import jsdom from 'jsdom';
import { NewsRepo } from '../infrastructure/database/repositories/news.repository';
import { connectDb, disconnectDb } from '../infrastructure/database';
import { News } from '../domain/news/news.entity';
import { newsSource } from '../utils/constants';

launchScrapper('elpais');

async function launchScrapper(newsSrc: string) {
  console.log(new Date() + ' Launching scraper');
  await connectDb();

  console.info(new Date() + ' Ejecutando proceso scrapper');
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const mapping = newsSource.find((src) => src.id === newsSrc);
    const URL = mapping?.url;
    const sourceName = mapping?.name as string;
    const response = await page.goto(URL as string);
    const body = await response!.text();

    const {
      window: { document },
    } = new jsdom.JSDOM(body);

    let noticias: any = [];

    document.querySelectorAll('.c_h h2').forEach((el, indice) => {
      if (indice <= 4) {
        noticias.push(el.textContent);
      }
    });

    await browser.close();
    console.log(new Date() + ' Sscraper finished');
    const newsRepo = new NewsRepo();
    const result: News[] = createNewsObject(noticias, sourceName);
    await newsRepo.storeNews(result);
    await disconnectDb();
    return;
  } catch (error) {
    console.error(error);
  }
}

function createNewsObject(headlines: string[], source: string) {
  try {
    let newsArray: News[] = [];
    headlines.forEach((head) => {
      let objectNews: News = {
        headline: head,
        createdAt: new Date(),
        source: source,
      };
      newsArray.push(objectNews);
    });
    return newsArray;
  } catch (error) {
    throw new Error('Error al convertir objeto ' + error);
  }
}
