const { User_Book, User, Book } = require('../models')

class UserBookController {
    static async showAllUserBook(req, res) {
        try {
            const results = await User_Book.findAll({
                order: [
                    ['id', 'ASC']
                ],
                include: [
                    User,
                    Book
                ]
            })

            res.status(200).json(results)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    static async addUserBook(req, res) {
        try {
            const { UserId, BookId } = req.body

            let result = await User_Book.create({
                UserId, BookId
            })

            res.status(201).json(result)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    static async deleteUserBook(req, res) {
        try {
            const id = Number(req.params.id)
            let result = await User_Book.destroy({
                where: { id }
            })

            if (result === 1) {
                res.status(200).json({
                    message: `User_BookId ${id} deleted`
                })
            } else {
                res.status(400).json({
                    message: `User_BookId ${id} not deleted`
                })
            }
        } catch (error) {
            res.status(500).json(error)
        }
    }
    static async updateUserBook(req, res) {
        try {
            const { UserId, BookId } = req.body
            const id = Number(req.params.id)

            let result = await User_Book.update({
                UserId, BookId
            }, {
                where: { id }
            })

            if (result[0] === 1) {
                res.status(201).json({
                    message: `User_BookId ${id} updated`
                })
            } else {
                res.status(400).json({
                    message: `User_BookId ${id} not updated`
                })
            }
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = UserBookController