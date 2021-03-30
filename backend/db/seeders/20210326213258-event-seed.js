'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

   return queryInterface.bulkInsert('Events', [
      // Free
      {
        title: 'Puff Pastry 101',
        image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F124377153%2F199607744421%2F1%2Foriginal.20210127-210812?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=1%2C0%2C620%2C310&s=02f65d1569df56733968c8741147a40b',
        host: 'Sara Johnson',
        time: new Date(),
        summary: 'Sara Johnson began over 15 years ago as a baking adventure between two childhood friends. The mission: to make the tastiest treats imaginable using clean ingredients. A gazillion delicious bites later, Michel and Augustin had put together a tribe of Troublemakers of Taste (as we’re affectionately known), and have brought that dream from France to the USA. We may be in a new country, but our passion for life, liberty and the pursuit of deliciousness translates très bien. Join us on the adventure!',
        ticketPrice: 0.00,
        categoryId: 1,
      },
      {
        title: 'Puff Pastry 102',
        image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F124377153%2F199607744421%2F1%2Foriginal.20210127-210812?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=1%2C0%2C620%2C310&s=02f65d1569df56733968c8741147a40b',
        host: 'Sara Johnson',
        time: new Date(),
        summary: 'Sara Johnson began over 15 years ago as a baking adventure between two childhood friends. The mission: to make the tastiest treats imaginable using clean ingredients. A gazillion delicious bites later, Michel and Augustin had put together a tribe of Troublemakers of Taste (as we’re affectionately known), and have brought that dream from France to the USA. We may be in a new country, but our passion for life, liberty and the pursuit of deliciousness translates très bien. Join us on the adventure!',
        ticketPrice: 0.00,
        categoryId: 1,
      },
      {
        title: 'Puff Pastry 103',
        image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F124377153%2F199607744421%2F1%2Foriginal.20210127-210812?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=1%2C0%2C620%2C310&s=02f65d1569df56733968c8741147a40b',
        host: 'Sara Johnson',
        time: new Date(),
        summary: 'Sara Johnson began over 15 years ago as a baking adventure between two childhood friends. The mission: to make the tastiest treats imaginable using clean ingredients. A gazillion delicious bites later, Michel and Augustin had put together a tribe of Troublemakers of Taste (as we’re affectionately known), and have brought that dream from France to the USA. We may be in a new country, but our passion for life, liberty and the pursuit of deliciousness translates très bien. Join us on the adventure!',
        ticketPrice: 0.00,
        categoryId: 1,
      },
      // Music
      {
        title: 'Peace, Love and Guitars',
        image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F124394401%2F183464873829%2F1%2Foriginal.20210128-002151?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C6336%2C3168&s=35fbd40e00b30685b91b251a6de98020',
        host: 'Eduardo Porter',
        time: new Date(),
        summary: 'The New York City Classical Guitar Society is proud to present two premiere video concerts featuring Ben Verdery and Friends.',
        ticketPrice: 9.99,
        categoryId: 2,
      },
      {
        title: 'Peace, Love and Guitars 2',
        image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F124394401%2F183464873829%2F1%2Foriginal.20210128-002151?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C6336%2C3168&s=35fbd40e00b30685b91b251a6de98020',
        host: 'Eduardo Porter',
        time: new Date(),
        summary: 'The New York City Classical Guitar Society is proud to present two premiere video concerts featuring Ben Verdery and Friends.',
        ticketPrice: 9.99,
        categoryId: 2,
      },
      {
        title: 'Peace, Love and Guitars 3',
        image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F124394401%2F183464873829%2F1%2Foriginal.20210128-002151?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C6336%2C3168&s=35fbd40e00b30685b91b251a6de98020',
        host: 'Eduardo Porter',
        time: new Date(),
        summary: 'The New York City Classical Guitar Society is proud to present two premiere video concerts featuring Ben Verdery and Friends.',
        ticketPrice: 9.99,
        categoryId: 2,
      },
      // Food and Bev
      {
        title: 'Brunch Virtual Beer Festival',
        image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F128625537%2F12602525447%2F1%2Foriginal.20210310-153811?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=1a7b90dfbe153029d0a3fcf25752b7c9',
        host: 'Valerie Chandler',
        time: new Date(),
        summary: 'A Brunch themed Virtual Beer Festival is coming to your living room this April. The Brunch Virtual Beerfest brings 10 breakfast-centric craft beers including beermosa styles, coffee flavored, and pastry infused along with a piece of candied thick cut bacon. Follow along and day drink as each brewery guides you through their beer and brewery. ',
        ticketPrice: 9.99,
        categoryId: 3,
      },
      {
        title: 'Bigger Brunch Virtual Beer Festival',
        image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F128625537%2F12602525447%2F1%2Foriginal.20210310-153811?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=1a7b90dfbe153029d0a3fcf25752b7c9',
        host: 'Valerie Chandler',
        time: new Date(),
        summary: 'A Brunch themed Virtual Beer Festival is coming to your living room this April. The Brunch Virtual Beerfest brings 10 breakfast-centric craft beers including beermosa styles, coffee flavored, and pastry infused along with a piece of candied thick cut bacon. Follow along and day drink as each brewery guides you through their beer and brewery. ',
        ticketPrice: 9.99,
        categoryId: 3,
      },
      {
        title: 'Biggest Brunch Virtual Beer Festival',
        image: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F128625537%2F12602525447%2F1%2Foriginal.20210310-153811?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=1a7b90dfbe153029d0a3fcf25752b7c9',
        host: 'Valerie Chandler',
        time: new Date(),
        summary: 'A Brunch themed Virtual Beer Festival is coming to your living room this April. The Brunch Virtual Beerfest brings 10 breakfast-centric craft beers including beermosa styles, coffee flavored, and pastry infused along with a piece of candied thick cut bacon. Follow along and day drink as each brewery guides you through their beer and brewery. ',
        ticketPrice: 9.99,
        categoryId: 3,
      },
      // Games
      {
        title: 'E3 Up & Coming Showcase',
        image: 'https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2013/06/07/100798697-145936699.530x298.?v=1370615733',
        host: 'Greg Bass',
        time: new Date(),
        summary: 'Come witness the unveiling of next-gens greatest games to hit the market!',
        ticketPrice: 9.99,
        categoryId: 4,
      },
      {
        title: 'Best of E3',
        image: 'https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2013/06/07/100798697-145936699.530x298.?v=1370615733',
        host: 'Greg Bass',
        time: new Date(),
        summary: 'Come witness the unveiling of next-gens greatest games to hit the market!',
        ticketPrice: 9.99,
        categoryId: 4,
      },
      {
        title: 'When is the next E3?',
        image: 'https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2013/06/07/100798697-145936699.530x298.?v=1370615733',
        host: 'Greg Bass',
        time: new Date(),
        summary: 'Come witness the unveiling of next-gens greatest games to hit the market!',
        ticketPrice: 9.99,
        categoryId: 4,
      },
      // Networking
      {
        title: 'National Association of Realtors Virtual Banquet',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpWMuidNP06v1bQqURXSnEG0IssqfBcWgjBw&usqp=CAU',
        host: 'Krystal Warner',
        time: new Date(),
        summary: `Best virtual real estate networking event around!`,
        ticketPrice: 9.99,
        categoryId: 5,
      },
      {
        title: 'Why do this to yourself? Networking, really!?',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpWMuidNP06v1bQqURXSnEG0IssqfBcWgjBw&usqp=CAU',
        host: 'Krystal Warner',
        time: new Date(),
        summary: 'Come witness the unveiling of next-gens greatest games to hit the market!',
        ticketPrice: 9.99,
        categoryId: 5,
      },
      {
        title: 'How to Sell A Pen',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpWMuidNP06v1bQqURXSnEG0IssqfBcWgjBw&usqp=CAU',
        host: 'Krystal Warner',
        time: new Date(),
        summary: 'Come witness the unveiling of next-gens greatest games to hit the market!',
        ticketPrice: 9.99,
        categoryId: 5,
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Events', null, {});
  }
};
