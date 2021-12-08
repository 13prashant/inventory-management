const asyncHandler = require('../middlewares/async')
const ErrorResponse = require('../utils/errorResponse')
const User = require('../models/User')

// @desc        Register user
// @route       GET /api/v1/auth/register
// @access      Public
exports.register = asyncHandler(async (req, res, next) => {
    const {name, email, password, shop_name, shop_address} = req.body

    // Create user
    const user = await User.create({
        name,
        email,
        password,
        shop_name,
        shop_address
    })

    // Create token
    const token = user.getSignedJwtToken()

    res.status(200).json({ success: true, token })
})