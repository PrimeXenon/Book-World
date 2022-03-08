const userBookRoutes = require('express').Router()
const UserBookController = require('../controllers/UserBookController')

userBookRoutes.get('/', UserBookController.showAllUserBook)
// userBookRoutes.get('/detail/:id', UserBookController.showDetailBook)
userBookRoutes.post('/add', UserBookController.addUserBook)

userBookRoutes.delete('/delete/:id', UserBookController.deleteUserBook)

userBookRoutes.put('/update/:id', UserBookController.updateUserBook)
// userBookRoutes.put('/updateStatus/:id/:status', UserBookController.updateStatusBook)


module.exports = userBookRoutes