const router = require('express').Router();

router.get('/', (req,res) => {
    res.json({
        message: "home page"
    })
})

const userRoutes = require('./userRoutes')
const bookRoutes = require('./bookRoutes')
const userBookRoutes = require('./userBookRoutes')

router.use('/user', userRoutes)
router.use('/book', bookRoutes)
router.use('/myBooks', userBookRoutes)

module.exports = router