const express = require('express');
const router = express.Router();
const  {getPanelHome}  =  require('../controllers/user.controller');

// Ruta principal
router.get('/', getPanelHome);
module.exports = router;