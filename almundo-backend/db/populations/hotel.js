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

const hotelImages = [
  'https://cdn.hotelplanner.com/Common/Images/_HotelPlanner/Home-Page/fade/sld6.jpg',
  'https://ihg.scene7.com/is/image/ihg/intercontinental-hong-kong-4619204796-2x1?fit=fit,1&wid=2400&hei=1200',
  'https://www.leonardo-hotels.es/octopus/Upload/images/Rooms/rc3blrhgranada01.jpg',
  'https://images.trvl-media.com/hotels/13000000/12510000/12507000/12506986/12506986_59_z.jpg',
  'http://beta.letsgotours.com/wp-content/uploads/2018/09/imperial-hotel-double-room.jpg',
  'http://www.nobuhotels.com/uploads/9/8/6/9/98696408/editor/nobu-miami-beach-hotels-page_3.jpeg?1505488180',
  'https://storage.googleapis.com/static-content-hc/sites/default/files/slider-piscina-giralda.jpg',
  'http://www.hospitalitydesigns.com/drive/uploads/2015/07/Iniala-Beach-House-exterior-1000x600.jpg',
  'https://www.choicehotels.com/hotelmedia/MX/MX-S/torreon/MX065/480/Exterior1.JPG',
  'http://dolphinhotelsvizag.com/assets/img/rooms/executive-room.jpg',
  'https://www.riversideparkhotel.com/upload/slide_images/riverside-park-hotel-new-couple-deluxe-9.jpg',
  'https://www.bastionhotels.com/sites/default/files/styles/carousel_590_x_395_/public/images/rooms/Bastion%20Hotels%20Amsterdam%20Amstel%20-%20Deluxe%20Kamer%20-%2018.jpg?itok=c5m0vxrC',
  'http://www.chandrikahotel.com/images/hotel.jpg',
  'https://images.unsplash.com/photo-1492455417212-e162ed4446e1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e8bd81d8bc531873ab3af61d83ef0c19&w=1000&q=80',
  'https://www.gingerhotels.com/resourcefiles/hotel-profile-listing/ginger-east-delhi-hotel-th-1.jpg',
  'https://www.corinthia.com/application/files/6315/0460/7084/corinthia-hotel-tripoli-lobby.jpg',
  'https://s-ec.bstatic.com/images/hotel/max1024x768/112/112107707.jpg',
  'http://www.pacifichoteldehradun.in/images/dehradun_landing_page.jpg'
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
    const hotelNumber = Math.floor(Math.random() * hotelImages.length)
    images.push(hotelImages[hotelNumber])
  }
  return {
    name: faker.address.streetName() + ' Hotel',
    stars: Math.floor(Math.random() * 5) + 1,
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
