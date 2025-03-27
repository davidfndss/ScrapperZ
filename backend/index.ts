import express from 'express'
import axios from 'axios'
import { JSDOM } from 'jsdom'
import cors from "cors";

const app = express()
const PORT = 3333
app.use(cors());

app.get('/ping', (req, res) => {
  res.json('pong!')
})

interface IProduct {
    title: string,
    rating: string,
    reviews: string | null,
    imageUrl: string,
    badge?: string | null
}

// to scrape an product, send an request to the /api/scrape/ endpoint with the <keyword> query param, like this: http://localhost:3333/api/scrape?keyword=nike
app.get('/api/scrape', async (req, res) => {
    const keyword = req.query.keyword as string
    const url = `https://www.amazon.com/s?k=${keyword}`
  
    try {
      const { data } = await axios.get(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
          'Accept-Language': 'en-US,en;q=0.9',
        },
      })
      const dom = new JSDOM(data)
      const products: IProduct[] = []
  
      dom.window.document.querySelectorAll('.s-main-slot .s-result-item').forEach(item => {
        const title = item.querySelector('h2.a-size-base-plus')?.textContent || null
        const rating = item.querySelector('.a-icon-alt')?.textContent || null
        const reviews = item.querySelector('.a-size-base.s-underline-text')?.textContent || null
        const imageUrl = item.querySelector('.s-image')?.getAttribute('src') || null
        const badge = item.querySelector('.a-badge-text')?.textContent || null


        if ( title && rating && imageUrl ) {
            products.push({ title, rating, reviews, imageUrl, badge })
        }
      })
  
      res.json(products)
    } catch (error) {
      console.error(error)

      if (axios.isAxiosError(error) && error.response && error.response.status === 503) {
        res.status(503).send('O servidor da Amazon está temporariamente indisponível. Tente novamente mais tarde.')
      } else {
        res.status(500).send('Erro ao buscar produtos')
      }
    }
})

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT} 🔥🔥🔥`)
})
