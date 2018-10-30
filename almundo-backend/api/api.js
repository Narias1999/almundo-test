'use stric'

const express = require('express')
const hotel = require('./routes/hotel')
const api = express.Router()
const almundoDB = require('db')

let db

api.use('*', async (req, res, next) => {
  if (!db) {
    try {
      db = await  almundoDB()
    } catch (error) {
      return next(error)
    }
  }

  req.db = db

  next()
})

api.use('/hotel', hotel)

module.exports = api