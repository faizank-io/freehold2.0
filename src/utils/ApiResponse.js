const { statusCodes } = require('http-status-codes');

class ApiResponse {
    static success(req, data = null, message = 'Success', statusCode = StatusCodes.OK) {
        return res.status(statusCode).json({
            success: true,
            message,
            data,
        });
    }

    static error(req, message = "Error", statusCode = statusCodes.INTERNAL_SERVER_ERROR, data = null) {
        return res.status(statusCode).json({
            success: false,
            message,
            data,
        });
    }
}

module.exports = ApiResponse;
