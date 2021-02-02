import express from 'express'

const app = express()

app.get('/', (request, response) => {
  return response.json({ message: 'It Works' })
})

app.get('/health', (request, response) => {
  return response.json({ status: 'health' })
})

app.get('/health/ping', (request, response) => {
  return response.json({ status: 'pong' })
})

app.listen(3333, () => {
  console.log('Server started at port 3333')
})
