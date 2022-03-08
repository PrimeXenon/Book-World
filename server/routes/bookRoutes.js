const bookRoutes = require('express').Router()
const BookController = require('../controllers/BookController')

bookRoutes.get('/', BookController.showAllBook)
bookRoutes.get('/detail/:id', BookController.showDetailBook)
bookRoutes.post('/add', BookController.addBook)

bookRoutes.delete('/delete/:id', BookController.deleteBook)

bookRoutes.put('/update/:id', BookController.updateBook)
bookRoutes.put('/updateStatus/:id/:status', BookController.updateStatusBook)


module.exports = bookRoutes