const express = require('express');
const router = express.Router();
const { getPanel } = require('../controllers/panel.controller');

// Rutas panel admin
router.get('/panel', getPanel);
router.post('/panel', );
router.put('/panel', );
router.delete('/panel', );

module.exports = router;