const { validationResult } = require('express-validator');
const ApiError = require('../utils/apiError');
const { statusCodes } = require('http-status-codes');


const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const formattedErrors = errors.array().map((e) => `${e.path}: ${e.msg}`);
        throw new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, formattedErrors.join(', '), errors.array());
    }
    next();
};

module.exports = { validate };