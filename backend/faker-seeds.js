const faker = require('faker');
const bcrypt = require('bcryptjs'); // password hashing

const randomNumber = (num) => {
  return Math.floor(Math.random()*Math.floor(num))+1
}

const CLASSES = `https://englishtribuneimages.blob.core.windows.net/gallary-content/2020/7/Desk/2020_7$largeimg_286600779.jpeg`
const FREE = ``;
const MUSIC = ``;


const seedEvents = (num) => {
  let i = 0;
  while(i < num){
    const event1 = {
      title: faker.lorem.words(6),
      image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F124377153%2F199607744421%2F1%2Foriginal.20210127-210812?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=1%2C0%2C620%2C310&s=02f65d1569df56733968c8741147a40b',
      host: faker.name.findName(),
      time: faker.date.future(),
      summary: faker.lorem.paragraphs(2),
      ticketPrice: 0.00
      categoryId: 1, // subtract one from total category count due to +1 in randomNum function
    }

    const event2 = {
      title: faker.lorem.words(6),
      image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F124377153%2F199607744421%2F1%2Foriginal.20210127-210812?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=1%2C0%2C620%2C310&s=02f65d1569df56733968c8741147a40b',
      host: faker.name.findName(),
      time: faker.date.future(),
      summary: faker.lorem.paragraphs(2),
      ticketPrice: faker.finance.amount(5, 35, 2), // 26.35
      categoryId: 2, // subtract one from total category count due to +1 in randomNum function
    }


    const event3 = {
      title: faker.lorem.words(6),
      image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F124377153%2F199607744421%2F1%2Foriginal.20210127-210812?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=1%2C0%2C620%2C310&s=02f65d1569df56733968c8741147a40b',
      host: faker.name.findName(),
      time: faker.date.future(),
      summary: faker.lorem.paragraphs(2),
      ticketPrice: faker.finance.amount(5, 35, 2), // 26.35
      categoryId: 3, // subtract one from total category count due to +1 in randomNum function
    }


    const event4 = {
      title: faker.lorem.words(6),
      image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F124377153%2F199607744421%2F1%2Foriginal.20210127-210812?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=1%2C0%2C620%2C310&s=02f65d1569df56733968c8741147a40b',
      host: faker.name.findName(),
      time: faker.date.future(),
      summary: faker.lorem.paragraphs(2),
      ticketPrice: faker.finance.amount(5, 35, 2), // 26.35
      categoryId: 4, // subtract one from total category count due to +1 in randomNum function
    }


    const event5 = {
      title: faker.lorem.words(6),
      image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F124377153%2F199607744421%2F1%2Foriginal.20210127-210812?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=1%2C0%2C620%2C310&s=02f65d1569df56733968c8741147a40b',
      host: faker.name.findName(),
      time: faker.date.future(),
      summary: faker.lorem.paragraphs(2),
      ticketPrice: faker.finance.amount(5, 35, 2, '$'), // $26.35
      categoryId: 5, // subtract one from total category count due to +1 in randomNum function
    }

    console.log(event1,",")
    console.log(event2,",")
    console.log(event3,",")
    console.log(event4,",")
    console.log(event5,",")
    i++
  }
}


seedEvents(20)

// summary: faker.lorem.sentences(6),
