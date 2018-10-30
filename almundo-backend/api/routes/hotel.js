'use strict'

const express = require('express')
const api = express.Router()

let hotelModel

api.use('*', async (req, res, next) => {
  if (!hotelModel) {
    hotelModel = req.db.hotel
  }
  next()
})

api.get('/',
  async (req, res, next) => {
    let hotels
    try {
      hotels = await hotelModel.getAll()
    } catch (error) {
      return next(error)
    }

    res.send(hotels)
  }
)

api.get('/:id',
  async (req, res, next) => {
    const { id } = req.params
    let hotel
    try {
      hotel = await hotelModel.getOne(id)
    } catch (error) {
      return next(error)
    }

    res.send(hotel)
  }
)

module.exports = api
