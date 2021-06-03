const faker = require('faker');

// const FREE = `https://github.com/eramsay20/ebrite/blob/master/wiki-resources/event-card-images/free.jpeg?raw=true`;
// const MUSIC = `https://github.com/eramsay20/ebrite/blob/master/wiki-resources/event-card-images/music.jpeg?raw=true`;
// const GAME = `https://github.com/eramsay20/ebrite/blob/master/wiki-resources/event-card-images/gaming.jpeg?raw=true`;
// const SHOW = `https://github.com/eramsay20/ebrite/blob/master/wiki-resources/event-card-images/shows.jpeg?raw=true`;
// const CLASS = `https://github.com/eramsay20/ebrite/blob/master/wiki-resources/event-card-images/classes.jpeg?raw=true`;
// const NETWORK = `https://github.com/eramsay20/ebrite/blob/master/wiki-resources/event-card-images/networking.jpeg?raw=true`;


// const seedEvents = (num) => {
//   let i = 0;
//   while(i < num){
//     const freeEvent = {
//       title: faker.lorem.words(4),
//       image: faker.image.nature(),
//       host: faker.name.findName(),
//       time: `${faker.date.future()}`,
//       summary: faker.lorem.paragraphs(3),
//       ticketPrice: 0.00,
//       categoryId: 1,
//     }

//     const musicEvent = {
//       title: faker.lorem.words(4),
//       image: faker.image.technics(),
//       host: faker.name.findName(),
//       time: `${faker.date.future()}`,
//       summary: faker.lorem.paragraphs(3),
//       ticketPrice: Number(faker.finance.amount(5, 35, 2)),
//       categoryId: 2,
//     }


//     const gameEvent = {
//       title: faker.lorem.words(4),
//       image: faker.image.abstract,
//       host: faker.name.findName(),
//       time: `${faker.date.future()}`,
//       summary: faker.lorem.paragraphs(3),
//       ticketPrice: Number(faker.finance.amount(5, 35, 2)),
//       categoryId: 3,
//     }


//     const showEvent = {
//       title: faker.lorem.words(4),
//       image: faker.image.nightlife(),
//       host: faker.name.findName(),
//       time: `${faker.date.future()}`,
//       summary: faker.lorem.paragraphs(3),
//       ticketPrice: Number(faker.finance.amount(5, 35, 2)),
//       categoryId: 4,
//     }


//     const classEvent = {
//       title: faker.lorem.words(4),
//       image: faker.image.people(),
//       host: faker.name.findName(),
//       time: `${faker.date.future()}`,
//       summary: faker.lorem.paragraphs(3),
//       ticketPrice: Number(faker.finance.amount(5, 35, 2)),
//       categoryId: 5,
//     }

//     const networkEvent = {
//       title: faker.lorem.words(4),
//       image: faker.image.business(),
//       host: faker.name.findName(),
//       time: `${faker.date.future()}`,
//       summary: faker.lorem.paragraphs(3),
//       ticketPrice: Number(faker.finance.amount(5, 35, 2)),
//       categoryId: 6,
//     }

//     console.log(freeEvent,",")
//     console.log(musicEvent,",")
//     console.log(gameEvent,",")
//     console.log(showEvent,",")
//     console.log(classEvent,",")
//     console.log(networkEvent,",")
//     i++
//   }
// }

// seedEvents(8)

// summary: faker.lorem.sentences(6),





const seedEvents = (numEvents, categoryId) => {
  let i = 0;
  while (i < numEvents) {
    const e1 = {
      title: faker.random.words(4),
      image: faker.random.image(),
      host: faker.name.findName(),
      time: `${faker.date.future()}`,
      summary: faker.lorem.paragraphs(3),
      ticketPrice: faker.finance.amount(0.00, 50.00, 2),
      categoryId: categoryId,
    }
    console.log(e1, ",")
    i++
  }
}

seedEvents(8, 1)
seedEvents(8, 2)
seedEvents(8, 3)
seedEvents(8, 4)
seedEvents(8, 5)
seedEvents(8, 6)
