'use strict'

const connectDB = require('./connection')
const setupHotel = require('./models/hotel')
const hotelController = require('./controllers/hotel')
let db
module.exports = async function () {
  if (!db) {
    while (!db) {
      try {
        db = await connectDB()
      } catch (e) {
        console.log(e)
        db = false
      }
    }
  }
  const hotelModel = setupHotel(db)

  return {
    hotel: hotelController(hotelModel)
  }
}
