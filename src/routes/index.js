const {Router} = require('express')
const userRouter = require('./user.router.js')
const productRouter = require('./product.router.js')

const router = Router()

router.use('/api/user', userRouter)
router.use('/api/product', userRouter)

module.exports = router