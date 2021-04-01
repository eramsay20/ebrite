const express = require('express')
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Favorite, Registration } = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

const validateSignup = [
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
  check('username')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a username with at least 4 characters.'),
  check('username')
    .not()
    .isEmail()
    .withMessage('Username cannot be an email.'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  handleValidationErrors,
];

/* GET */

// Load user profile page; require signed in user to load
// router.get('/profile', requireAuth, asyncHandler( async(req, res) => {
//   const { user } = req;
//   res.json({user})
// }));


/* POST */

// Sign up for new account
router.post('', validateSignup, asyncHandler( async(req, res) => {
  const { email, password, username } = req.body;
  const user = await User.signup({email, username, password});

  await setTokenCookie(res, user);
  return res.json({ user });
}))

    // // Add Favorite to User Profile *** REVISIT AFTER EVENT CARD COMPONENT HAS BEEN CREATED
    // router.post('/favorite', requireAuth, asyncHandler( async(req, res) => {
    //   // TODO: grab event id from click actions, revisit after EventCard component has been created

    //   const userId = req.user.id
    //   await Favorite.create({eventId, userId});
    //   return res.json({ message: 'success' });
    // }))

    // // Add Favorite to User Profile *** REVISIT AFTER EVENT CARD COMPONENT HAS BEEN CREATED
    // router.delete('/favorite', requireAuth, asyncHandler( async(req, res) => {

    //   // TODO: grab event id from click actions, revisit after EventCard component has been created
    //   const userId = req.user.id

    //   const favorite = await Favorite.findOne({
    //     where: {
    //       eventId: eventId,
    //       userId: userId,
    //     }
    //   })
    //   await Favorite.destroy();
    //   return res.json({ message: 'success' });
    // }))


module.exports = router;
