const express = require('express')

const {register, login, getMe, getEmployees, updateDetails, updatePassword} = require('../controllers/auth')

const router = express.Router()

const {protect, authorize} = require('../middlewares/auth')


router.post('/register', register)
router.post('/login', login)
router.get('/me', protect, getMe)
router.put('/updatedetails', protect, updateDetails)
router.put('/updatepassword', protect, updatePassword)
router.get('/employees', protect, getEmployees)

module.exports = router