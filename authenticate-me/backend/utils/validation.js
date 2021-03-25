const { validationResult } = require('express-validator');

// middleware for formatting errors from express-validator middleware
const handleValidationErrors = (req, _res, next) => {

  // express-validator syntax to pull our errors from the req body
  const validationErrors = validationResult(req);

  if(!validationErrors.isEmpty()){
    // map over errors and extract the err msg from each; store in array of err msgs
    const errors = validationErrors.array().map(error => `${error.msg}`);

    const err = Error('Bad request.');
    err.errors = errors; // store msgs on new err obj
    err.status = 400;
    err.title = 'Bad request.'
    next(err);
  }
  next();
}

module.exports = { handleValidationErrors, }
