const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.write('Hello and welcome to homepage!!!!');
    res.send();
})

module.exports = router;