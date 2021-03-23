// Full Documentation - https://docs.turbo360.co
const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {

  const data = {  
      greeting : "This is my restaurant"
  }

  res.render('index', data)
})


module.exports = router
