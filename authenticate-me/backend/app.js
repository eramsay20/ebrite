const express = require('express');
const morgan = require('morgan'); // logs info about server req/res
const cors = require('cors'); // cross origin resource sharing mw
const csurf = require('csurf'); // CSRF protection mw
const cookieParser = require('cookie-parser'); // parses cookies (for csrf)
const helmet = require('helmet'); // security mw

const routes = require('./routes/index')
const { environment } = require('./config/index'); // get environment
const isProduction = environment === 'production'; // boolean checking whether being run in dev or prod

const app = express() // init Express application

  app.use(morgan('dev')) // connect morgan mw to log info about req/res
  app.use(cookieParser()); // add CP mw to parse cookies
  app.use(express.json()); // add express.json mw to parse JSON bodies from app/json requests

// --------------- Security Middleware -------------- //
  // enable cors only in dev; CORS not a problem in React prod env
  if(isProduction) app.use(cors())

  // helmet helps set a variety of headers to better secure the app
  app.use(helmet({ contentSecurityPolicy: false }))

  // Set the _csrf token and create req.csrfToken method. The csurf middleware will add a _csrf cookie that is HTTP-only (can't be read by JavaScript) to any server response. It also adds a method on all requests (req.csrfToken) that will be set to another cookie (XSRF-TOKEN) later on. These two cookies work together to provide CSRF (Cross-Site Request Forgery) protection for your application.
  app.use(
    csurf({
      cookie: {
        secure: isProduction,
        sameSite: isProduction && 'Lax',
        httpOnly: true,
      }
    })
  )
// ----------------------------------------------------- //

  app.use(routes) // connect app to routes, with all other middleware in place

module.exports = app;
