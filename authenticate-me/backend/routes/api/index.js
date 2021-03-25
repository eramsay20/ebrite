const router = require('express').Router();

router.post('/test', (req, res) => {
  res.json({requestBody: req.body})
})

module.exports = router;


// TEST FETCH REQUEST
// fetch('/api/test', {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "XSRF-TOKEN": `bfUqKAKb-Q1Rsr6x4sTOtDZG53XWUYUXntD0`
//   },
//   body: JSON.stringify({ hello: 'world' })
// }).then(res => res.json()).then(data => console.log(data));
