
const express = require('express')
const pokenea = require('../controllers/pokeneaContrtoller')
const router = express.Router()

router.get('/pokeneas', pokenea.sendInfoPokenea)
router.get('/show', pokenea.sendPhrasePokenea)

  
module.exports = router