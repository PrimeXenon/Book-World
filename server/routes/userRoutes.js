const userRoutes = require('express').Router()
const UserController = require('../controllers/UserController')

userRoutes.get('/', UserController.showAllUser)
userRoutes.get('/profile/:id', UserController.showProfileUser)
userRoutes.post('/add', UserController.addUser)

userRoutes.delete('/delete/:id', UserController.deleteUser)
userRoutes.put('/update/:id', UserController.updateUser)

module.exports = userRoutes