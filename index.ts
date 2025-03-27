import express from 'express'

const app = express()
const PORT = 3333

app.get('/ping', (req, res) => {
  res.json('pong!')
})

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT} 🔥🔥🔥`)
})
