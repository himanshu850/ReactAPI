const express = require('express')
const router = express.Router()


// Getting all
router.get('/', (req, res) => {
    res.send("Hello World")
})
// Getting one
router.get('/:id', (req, res) => {

})
// Creating one
router.post('/', (req, res) => {

})
// Updating one
router.patch('/', (req, res) => {

})
//  Deleting one 
router.patch('/', (req, res) => {

})
module.exports = router