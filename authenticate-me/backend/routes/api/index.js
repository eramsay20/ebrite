const router = require('express').Router();
const asyncHandler = require('express-async-handler');

const { setTokenCookie } = require('../../utils/auth');
const { User } = require('../../db/models/');

// GET /api/set-token-cookie
router.get('/set-token-cookie', asyncHandler(async (req, res) => {
  const user = await User.findOne({
      where: {
        username: 'DemoUser'
      },
    })
  setTokenCookie(res, user);
  return res.json({ user });
}));


module.exports = router;
