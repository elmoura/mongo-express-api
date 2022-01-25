const mongoose = require('mongoose');

const connect = async () => mongoose.connect(process.env.MONGO_URL)

let connection;

connect()
  .catch((error) => console.error(error))
  .then((mongooseResult) => {
    connection = mongooseResult
    console.log('Connected to MongoDB')
  })

module.exports = { connection }