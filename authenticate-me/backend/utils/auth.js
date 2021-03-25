const jwt = require('jsonwebtoken');

const { jwtConfig } = require('../config');
const { User } = require('../db/models');

const { secret, expiresIn } = jwtConfig;

// Sets and sends a JWT Cookie
const setTokenCookie = (res, user) => {
  // Create the token
  const token = jwt.sign(
    { data: user.toSafeObject() },
    secret,
    { expiresIn: parseInt(expiresIn)}, // 604,800 seconds = 1 week
  );

  const isProduction = process.env.NODE_ENV === "production";

  // Set the token cookie
  res.cookie('token', token, {
    maxAge: expiresIn * 1000, // maxAge in milliseconds
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction && "Lax",
  });

  return token;
};

// Restore the session user info based on the contents of the JWT cookie
const restoreUser = (req, res, next) => {
  // token parsed from cookies
  const { token } = req.cookies;

  return jwt.verify(token, secret, null, async (err, jwtPayload) => {
    if (err) return next();

    try {
      const { id } = jwtPayload.data; // if user found
      req.user = await User.scope('currentUser').findByPk(id); // save user info on req
    } catch (e) {
      res.clearCookie('token'); // else clear the token
      return next();
    }

    if (!req.user) res.clearCookie('token');

    return next();
  });
};

// 1st restore user, then continue to the next req; else, return err
const requireAuth = [
  restoreUser,
  function (req, res, next) {
    if (req.user) return next();

    const err = new Error('Unauthorized');
    err.title = 'Unauthorized';
    err.errors = ['Unauthorized'];
    err.status = 401;
    return next(err);
  },
];
 module.exports = { setTokenCookie, restoreUser, requireAuth };
