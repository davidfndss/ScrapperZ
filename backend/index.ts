import express from 'express';
import axios from 'axios';
import { JSDOM } from 'jsdom';
import cors from 'cors';

const app = express();
const PORT = 3333;
app.use(cors());

// Define the structure of a product to be returned in the API response
interface IProduct {
  title: string;
  rating: string;
  reviews: string | null;
  imageUrl: string;
  badge?: string | null;
}

// Scrapes Amazon search results for a given keyword
// Endpoint usage: http://localhost:3333/api/scrape?keyword=nike
app.get('/api/scrape', async (req, res) => {
  const keyword = (req.query.keyword as string).toLowerCase();

  if (!keyword) {
    return res.status(400).json({ error: 'Missing "keyword" query parameter.' });
  }

  // Amazon Url + keyword parameter
  const url = `https://www.amazon.com/s?k=${encodeURIComponent(keyword)}`;

  try {
    // Make a GET request to Amazon with appropriate headers
    const { data } = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9',
      },
    });

    // Parse the response HTML using jsdom
    const dom = new JSDOM(data);
    const products: IProduct[] = [];

    // Loop through product containers on the Amazon search page
    dom.window.document.querySelectorAll('.s-main-slot .s-result-item').forEach(item => {
      const title = item.querySelector('h2.a-size-base-plus')?.textContent?.trim() || item.querySelector('h2.a-size-medium')?.textContent?.trim() || null;
      const rating = item.querySelector('.a-icon-alt')?.textContent?.trim() || null;
      const reviews = item.querySelector('.a-size-base.s-underline-text')?.textContent?.trim() || null;
      const imageUrl = item.querySelector('.s-image')?.getAttribute('src') || null;
      const badge = item.querySelector('.a-badge-text')?.textContent?.trim() || null;

      // Push only valid product entries
      if (title && rating && imageUrl) {
        products.push({ title, rating, reviews, imageUrl, badge });
      }
    });

    // Return the array of scraped products as JSON
    res.json(products);
  } catch (error) {
    // Log detailed error info
    console.error('An error occurred during scraping:', error);

    // Specific error handling for Amazon blocking or downtime
    if (axios.isAxiosError(error) && error.response?.status === 503) {
      res.status(503).send('O servidor da Amazon está temporariamente indisponível para buscas pelos nossos servidores. Por favor tente novamente mais tarde.');
    } else {
      res.status(500).send('Ocorreu um Erro ao buscar os produtos.');
    }
  }
});

// Start the server on the defined port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🔥🔥🔥`);
});