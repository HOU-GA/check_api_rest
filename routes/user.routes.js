//l'import de l'express: Routing
const express = require('express')

//import auto du modele

const { addUser, allUser, getOne, updateUser, supUser } = require('../controllers/user.controller')

const router = express.Router()

//add
router.post('/add', addUser);

//read
router.get('/all', allUser);

router.get('/:id', getOne);

//Update
router.put('/:id', updateUser);

//Delete
router.delete('/:id', supUser);

module.exports = router;

