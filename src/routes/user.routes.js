const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
    const userData = req.body
    console.log(userData)

    res.status(201).json({message: 'a'})
})

module.exports = router