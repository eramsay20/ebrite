const router = require('express').Router()
const asyncHandler = require('express-async-handler');

const { Event, Registration, Category } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');

/* GET */

// Load all events
router.get('/', asyncHandler( async(req, res) => {
  const events = await Event.findAll({ include: Category });
  res.json({ events })
}))

// Load event page; pass back related event info
router.get('/:id', asyncHandler( async(req, res) => {
  const eventId = parseInt(req.params.id, 10)
  console.log(eventId);
  const event = await Event.findByPk(eventId);
  res.json({ event })
}))

// Load event registration page; pass back related event info
router.get('/:id/registration', asyncHandler( async(req, res) => {
  const eventId = parseInt(req.params.id, 10)
  const event = await Event.findByPk(eventId);
  res.json({ event })
}))

/* POST */

// Register user for an event
router.post('/:id/registration', requireAuth, asyncHandler( async(req, res) => {
  const { ticketCount } = req.body; // assumed mini form on page collecting the ticketCount from a select drop down
  const eventId = parseInt(req.params.id, 10)
  const userId = req.user.id

  await Registration.create({
    eventId, userId, ticketCount
  })

  res.json({ message: 'success' })
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
