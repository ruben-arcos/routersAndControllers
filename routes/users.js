const express = require('express')
const router = express.Router()
//importing all functions from users controller file
const usersController = require('../controllers/users')

// write routes below

router.get('/', (req, res) => {
	res.send('Hello Express app');
});

router.get('/users', usersController.list)

router.get('/users/:id',usersController.show)

router.post('/users', usersController.create )

module.exports = router