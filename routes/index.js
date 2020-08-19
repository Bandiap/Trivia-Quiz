const express = require('express')
const router = express.Router()

// Home
const mainCtrl = require('../controllers/homeController.js')
router.get('/', mainCtrl.home)
router.post('/play', mainCtrl.play)
router.get('/end', mainCtrl.end)

router.use((request, response)=>{
  response.status('404').send('404, page not found');
})

module.exports = router
