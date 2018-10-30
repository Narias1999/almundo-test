'use strict'

// db connection data

const user = 'ytE64n94KRgwy6LG'
const password = 'LPzQ79SBzT6mYT6C'
const host = 'ds245523.mlab.com'
const port = 45523
const dbName = 'almundo-db'

// db connection config options

const config = {
  uri: `mongodb://${user}:${password}@${host}:${port}/${dbName}`,
  options: {
    useNewUrlParser: true,
    autoIndex: true, // Don't build indexes
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0
  }
}

module.exports = config
