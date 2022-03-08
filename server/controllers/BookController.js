const { Book } = require('../models')

class BookController {
    static async showAllBook(req, res) {
        try {
            const books = await Book.findAll({
                order: [
                    ['id', 'ASC']
                ]
            })

            res.status(200).json(books)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    static async showDetailBook(req, res) {
        try {
            const id = Number(req.params.id)

            const book = await Book.findByPk(id)

            if (book) {
                res.status(200).json(book)
            } else {
                res.status(404).json({
                    message: `BookId ${id} not found` 
                })
            }
            
        } catch (error) {
            res.status(500).json(error)
        }
    }
    static async addBook(req, res) {
        try {
            const { title, cover, page, author } = req.body

            let result = await Book.create({
                title, cover, page, author
            })

            res.status(201).json(result)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    static async deleteBook(req, res) {
        try {
            const id = Number(req.params.id)
            let result = await Book.destroy({
                where: {id}
            })

            if (result === 1) {
                res.status(200).json({
                    message: `BookId ${id} deleted` 
                })
            } else {
                res.status(400).json({
                    message: `BookId ${id} not deleted` 
                })
            }
        } catch (error) {
            res.status(500).json(error)
        }
    }
    static async updateBook(req, res) {
        try {
            const { title, cover, page, author } = req.body
            const id = Number(req.params.id)

            let result = await Book.update({
                title, cover, page, author
            }, {
                where: {id}
            })

            if (result[0] === 1) {
                res.status(201).json({
                    message: `BookId ${id} updated` 
                })
            } else {
                res.status(400).json({
                    message: `BookId ${id} not updated` 
                })
            }
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async updateStatusBook(req, res) {
        try {
            const status = req.params.status
            const id = Number(req.params.id)

            let result = await Book.update({
                status
            }, {
                where: {id}
            })

            if (result[0] === 1) {
                res.status(201).json({
                    message: `BookId ${id} status becomes '${status}'` 
                })
            } else {
                res.status(400).json({
                    message: `BookId ${id} status not updated` 
                })
            }
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = BookController