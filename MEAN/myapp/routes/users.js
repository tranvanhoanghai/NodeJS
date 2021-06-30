const express = require('express');
const router = express.Router();
const usersController = require('../app/controllers/users');

/* GET users listing. */
router.get('/:slug', usersController.getDetail);
router.get('/', usersController.get);

module.exports = router;
