import 'dotenv/config';
import puppeteer from 'puppeteer';
import jsdom from 'jsdom';
import { NewsRepo } from '../infrastructure/database/repositories/news.repository';
import { connectDb } from '../infrastructure/database';


launchScrapper();




async function launchScrapper() {
  
  console.log('launch scraper')
  await connectDb();
  

  console.info(new Date + ' Ejecutando proceso scrapper');
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const response = await page.goto(process.env.NEWS_URL as string);
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

    console.log('Noticias ', noticias);

    await browser.close();

      const newsRepo = new NewsRepo();
      await newsRepo.getAllNews();

    return;
  } catch (error) {
    console.error(error);
  }
}










