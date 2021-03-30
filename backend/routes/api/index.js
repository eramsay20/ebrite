const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const eventsRouter = require('./events.js');
// const { Registration, Event, User } = require('../../db/models');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/events', eventsRouter);


// DB CONNECTION TEST
// router.get('/test/:id', async (req, res) => {
//     const id = parseInt(req.params.id, 10);

//     const data = await Event.findAll({
//       include: {
//         model: Registration,
//         where: {
//             userId: id,
//         }
//       }
//     })
//     return res.json({data})
// })

module.exports = router;
