const express = require('express');
const userRouter = express.Router();
const {
    getUsers, 
    postUsers, 
    getUserById,
    updateUserById,
    deleteUserById
} = require('../controllers/user')

userRouter.route('/').get(getUsers).post(postUsers)
userRouter.route('/:id').get(getUserById).put(updateUserById).delete(deleteUserById)

module.exports = {userRouter}


/*
    GET http://localhost:5000/
    POST http://localhost:5000/
    GET http://localhost:5000/{{id}}
    PUT http://localhost:500/{{id}}
    DELETE http://localhost:5000/{{id}}
*/