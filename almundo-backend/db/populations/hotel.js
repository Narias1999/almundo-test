'use strict'

const faker = require('faker')
const db = require('..')
const chalk = require('chalk')
const readline = require('readline')

console.log(`${chalk.green('[almundo-hotel-pupulation]')}`)
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const actions = [
  'Do you want to clear all the hotels? (y/n) ',
  'How many registers do you want to insert? '
]

/**
 * Make questions in the terminal
 * @param {readline} rl The readline interface
 * @param {String} question The question ask
 */
const AskQuestion = (rl, question) => new Promise((resolve, reject) => {
  rl.question(question, answer => {
    resolve(answer)
  })
})

/**
 *
 * @param {Array} questions The questions to ask
 */
const Ask = (questions) => new Promise(async (resolve, reject) => {
  let results = []
  for (let i = 0; i < questions.length; i++) {
    let result = await AskQuestion(rl, questions[i])
    if (i === 1) {
      while (isNaN(result)) {
        console.log(`${chalk.red('Should be a number!')}`)
        result = await AskQuestion(rl, questions[i])
      }
      result = Number(result)
    }
    results.push(result)
  }
  rl.close()
  resolve(results)
})

/**
 * Returns one hotel with fake data
 */
function generateHotel () {
  const imageNumber = Math.floor(Math.random() * 6) + 1
  let images = []
  for (let i = 0; i < imageNumber; i++) {
    images.push(faker.image.city())
  }
  return {
    name: faker.address.streetName() + ' Hotel',
    stars: Math.floor(Math.random() * 5) + 1,
    lat: faker.address.latitude(),
    long: faker.address.longitude(),
    price: Math.floor(Math.random() * 200) + 30,
    country: faker.address.country(),
    description: faker.lorem.paragraph(),
    images
  }
}

/**
 * Execute the cli program
 */
async function exec () {
  try {
    const results = await Ask(actions)
    const { hotel } = await db()
    const clearDB = results[0].toLowerCase()
    if (clearDB === 'y') {
      console.log(`${chalk.green('[almundo-hotel-pupulation]')} droping the collection...`)
      await hotel.drop()
    }

    console.log(`${chalk.green('[almundo-hotel-pupulation]')} inserting the registers...`)

    // generate the array with fake hotels
    const hotels = []
    for (let i = 0; i < results[1]; i++) {
      hotels.push(generateHotel())
    }
    // insert the hotel
    await hotel.create(hotels)
    console.log(`${chalk.green('[almundo-hotel-pupulation]')} population finished successfully`)
  } catch (e) {
    console.log(`${chalk.red('[almundo-hotel-pupulation]')} An error occurrend when we're trying to insert the registers`)
    console.error(e.message)
    console.error(e.stack)
  }
  process.exit(0)
}
exec()
