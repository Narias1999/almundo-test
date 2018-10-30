'use strict'
const mongoose = require('mongoose')
const config = require('./config')
const chalk = require('chalk')

/**
 * Esta función hace la conección a la base de datos
 */
function conection () {
  console.log(`${chalk.green('[almundo-db]')} Making db connection....`)
  const db = mongoose.createConnection(config.uri, config.options)
  console.log(`${chalk.green('[almundo-db]')} Connection finished succesfully`)
  return db
}

module.exports = conection
