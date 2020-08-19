const express = require('express')
const router = express.Router()

// Home
const mainCtrl = require('../controllers/homeController.js')
router.get('/', mainCtrl.home)
router.get('/game', mainCtrl.game)
router.get('/end', mainCtrl.end)
router.post('/play', mainCtrl.play)

router.use((request, response)=>{
  response.status('404').send('404, page not found');
})

module.exports = router