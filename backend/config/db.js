const mongoose = require('mongoose')
const colors = require('colors')
const connectToDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`mongodb connected : ${conn.connection.host}`.bgMagenta.blue)
  } catch (error) {
    console.log(`Error:${error.message}`)
    process.exit()
  }
}

module.exports = connectToDB
