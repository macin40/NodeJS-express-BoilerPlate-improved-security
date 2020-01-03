const express = require('express');
const router = express.Router();

router.get('/register', function (req, res, next) {
    res.status(200).send('Its working fine');
});

module.exports = router;
