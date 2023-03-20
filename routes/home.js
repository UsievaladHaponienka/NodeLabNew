const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello and welcome to homepage!');
})

module.exports = router;