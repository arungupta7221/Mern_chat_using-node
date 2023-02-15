const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
const colors = require('colors')
const chats = require('./data/data')
const connectToDB = require('./config/db')
dotenv.config()
connectToDB()
app.use(cors())
app.get('/api/chats', (req, res) => {
  res.send(chats)
})
const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`server is connected on port ${port}`.bgCyan.white)
})
