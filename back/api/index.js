const express = require('express');

const router = express.Router();

const user = require('./user');
const inspectionList = require('./inspectionList');

router.use('/user', user);
router.use('/inspectionList', inspectionList);

module.exports = router;
