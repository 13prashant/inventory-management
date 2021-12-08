const express = require('express')

const { getEmployees, createEmployee, getEmployee, updateEmployee, deleteEmployee } = require('../controllers/employees')

const router = express.Router()

const {protect} = require('../middlewares/auth')

router.route('/')
    .get(getEmployees)
    .post(protect, createEmployee)

router.route('/:id')
    .get(getEmployee)
    .put(protect, updateEmployee)
    .delete(protect, deleteEmployee)

module.exports = router