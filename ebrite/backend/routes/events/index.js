const router = require('express').Router();
const eventsRouter = require('./events.js');

router.use('/events', eventsRouter);


module.exports = router;
