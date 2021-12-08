const asyncHandler = require('../middlewares/async')
const ErrorResponse = require('../utils/errorResponse')
const User = require('../models/User')

// @desc        Register user
// @route       GET /api/v1/auth/register
// @access      Public
exports.register = asyncHandler(async (req, res, next) => {
    // const user = await User.create()

    res.status(200).json({ success: true })
})