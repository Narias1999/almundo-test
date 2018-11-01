'use strict'

const { Schema } = require('mongoose')

const hotelSchema = new Schema({
  name: String,
  stars: Number,
  images: [String],
  price: Number,
  description: String,
  country: String
})

module.exports = db => db.model('hotels', hotelSchema)
