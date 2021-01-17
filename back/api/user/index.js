const express = require('express');
const userCtrl = require('./user.ctrl');

const router = express.Router();

router.post('/', userCtrl.find);

module.exports = router;
