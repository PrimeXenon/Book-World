const { User } = require('../models')

class UserController {
    static async showAllUser(req, res) {
        try {
            const users = await User.findAll({
                order: [
                    ['id', 'ASC']
                ]
            })

            res.status(200).json(users)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    static async showProfileUser(req, res) {
        try {
            const id = Number(req.params.id)

            const user = await User.findByPk(id)

            if (user) {
                res.status(200).json(user)
            } else {
                res.status(404).json({
                    message: `UserId ${id} not found` 
                })
            }
            
        } catch (error) {
            res.status(500).json(error)
        }
    }
    static async addUser(req, res) {
        try {
            const { email, password, name, avatar } = req.body

            let result = await User.create({
                email, password, name, avatar
            })

            res.status(201).json(result)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    static async deleteUser(req, res) {
        try {
            const id = Number(req.params.id)
            let result = await User.destroy({
                where: {id}
            })

            if (result === 1) {
                res.status(200).json({
                    message: `UserId ${id} deleted` 
                })
            } else {
                res.status(400).json({
                    message: `UserId ${id} not deleted` 
                })
            }
        } catch (error) {
            res.status(500).json(error)
        }
    }
    static async updateUser(req, res) {
        try {
            const { email, password, name, avatar } = req.body
            const id = Number(req.params.id)

            let result = await User.update({
                email, password, name, avatar
            }, {
                where: {id}
            })

            if (result[0] === 1) {
                res.status(201).json({
                    message: `UserId ${id} updated` 
                })
            } else {
                res.status(400).json({
                    message: `UserId ${id} not updated` 
                })
            }
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = UserController