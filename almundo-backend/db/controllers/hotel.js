'use strict'

let hotelModel
/**
 * Query all the hotels and return an array with them
 */
const getAll = () => hotelModel.find({})

/**
 * Query one hotel by id and return it
 * @param {String} id 
 */
const getOne = (id) => hotelModel.findById(id)

/**
 * Insert hotels
 * @param {Array} hotel Array of hotels to insert
 */
const create = (hotels) => hotelModel.insertMany(hotels)

const drop = () => hotelModel.deleteMany({})

module.exports = function (hotel) {
  hotelModel = hotel

  const methods = {
    create,
    getAll,
    getOne,
    drop,
  }

  return methods
}
