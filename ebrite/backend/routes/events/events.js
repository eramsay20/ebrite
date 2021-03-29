const router = require('express').Router()
const asyncHandler = require('express-async-handler');

const { Event } =require('../../db/models');

/* GET */

// Load event page
router.get('/:id', asyncHandler( async(req, res) => {
 console.log('id');
}))


module.exports = router;
