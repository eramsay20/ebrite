const router = require('express').Router()
const asyncHandler = require('express-async-handler');

const { Event, Registration, Category, Favorite, User } = require('../../db/models');
const { restoreUser, requireAuth } = require('../../utils/auth');

/* GET */

// Load all events - OK
router.get('/', asyncHandler( async(req, res) => {
  const events = await Event.findAll({ include: Category });
  res.json({ events })
}))

// Load users registered events - OK
router.get('/registrations', restoreUser, asyncHandler( async(req, res) => {
  const { user } = req
  const registrations = await Registration.findAll({
    where: { userId: user.id },
    include: [Event],
  });
  const registeredEvents = registrations.map(reg => reg.Event);
  res.json(registeredEvents)
}))

// Load users favorite events
router.get('/favorites', restoreUser, asyncHandler( async(req, res) => {
  const { user } = req
  const userJoinData = await User.findByPk(1, { include: Event })
  const favorites = userJoinData.Events
  res.json(favorites)
}))




// Load event page; pass back related event info
// router.get('/:id', asyncHandler( async(req, res) => {
//   const eventId = parseInt(req.params.id, 10)
//   console.log(eventId);
//   const event = await Event.findByPk(eventId);
//   res.json({ event })
// }))

// Load event registration page; pass back related event info
// router.get('/:id/registration', asyncHandler( async(req, res) => {
//   const eventId = parseInt(req.params.id, 10)
//   const event = await Event.findByPk(eventId);
//   res.json({ event })
// }))

/* POST */

// Register user for an event
router.post('/:id/registration', requireAuth, asyncHandler( async(req, res) => {
  const { ticketCount } = req.body; // assumed mini form on page collecting the ticketCount from a select drop down
  const eventId = req.params.id
  const userId = req.user.id

  const registeredEvent = await Registration.create({ eventId, userId, ticketCount })
  const event = await Event.findByPk(eventId)

  res.json(event) //add event obj to array of registered events on front end
}))


/* DELETE */
// Remove user's registration to an event
router.delete('/:id/registration', requireAuth, asyncHandler( async(req, res) => {
  const eventId = parseInt(req.params.id, 10)
  const userId = req.user.id

  const registration = await Registration.findOne({
    where: {
      userId: userId,
      eventId: eventId
    }
  })
  await registration.destroy()
  res.json({ message: 'success' })
}))

module.exports = router;
