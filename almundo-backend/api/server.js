'use strict'

const express = require('express')
const app = express()
const api = require('./api')
const chalk = require('chalk')
const port = process.env.PORT || 3300
const morgan = require('morgan')

/**
 * Express middleware setting headers
 */
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization')
  res.setHeader('Access-Control-Allow-Methods', 'GET')
  next()
})

app.use(morgan('combined'))


app.use('/api', api)

/**
 * Express error handler
 */
app.use((err, req, res, next) => {
  if (err.message.match(/not found/)) {
    return res.status(404).send({ error: err.message })
  }
  res.status(500).send({ error: err.message })
})


app.listen(port, () => {
  console.log(`${chalk.green('[almundo-api]')} server listening on ${chalk.blue('http://localhost:' + port)}`)
})