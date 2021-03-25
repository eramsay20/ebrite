const express = require('express')
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator'); // don't need validationResult since we're using custom handler instead

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User } = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

// Restore session for user
router.get('/', restoreUser, (req, res) => {
  const { user } = req; // pull user out of req (set by restoreUser mw)

  if(user) {
    return res.json({ user: user.toSafeObject() }); // return user if exists
  } else {
    return res.json({}) // else return an empty obj
  }
})

// Login validation middleware functions; stored sequentially in an array
const validateLogin = [
  check('credential')
    .exists({checkFalsy: true})
    .withMessage('Please provide a valid email or username.'),
  check('password')
    .exists({checkFalsy: true})
    .withMessage('Please provide a password.'),
  handleValidationErrors,
]

// Log In -- TESTED, OK
router.post('/', validateLogin, asyncHandler(async (req, res, next) => {
  const { credential, password } = req.body;

  const user = await User.login({ credential, password });

  if(!user) {
    const err = new Error('Login failed.');
    err.status = 401;
    err.title = 'Login failed.';
    err.errors = ['The provided credentials were invalid.'];
    return next(err);
  }

  await setTokenCookie(res, user);

  return res.json({ user });
}))

// Log out -- TESTED, OK
router.delete('/', (_req, res) => { // _req indicates it should not be changed/used here
  res.clearCookie('token') // remove token from session
  return res.json({ message: 'success' });
});


module.exports = router;
