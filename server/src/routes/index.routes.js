const express = require('express');
const router = express.Router();

// Ruta principal
router.get('/',(req, res) => {
    res.send("Bienvenido al inicio");
});

module.exports = router;