const {Router} = require('express')

const router = Router()

router.get('/', (req, res)=>{
    res.send('get user')
})
router.get('/:uid', (req, res)=>{
    res.send('get user de ID')
})
router.post('/', (req, res)=>{
    res.send('post user')
})
router.put('/:uid', (req, res)=>{
    res.send('update user')
})
router.delete('/:uid', (req, res)=>{
    res.send('delete user')
})

module.exports = router