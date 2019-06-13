const express = require('express');
const hello = require('./hello.route');

const router = express.Router();

router.use('/hello', hello);

module.exports = router;
