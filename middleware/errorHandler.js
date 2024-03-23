const { Constants } = require('../constants');

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case Constants.VALIDATION_ERROR:
            res.json({
                title: "Validation Error",
                message: err.message,
                stackTrace: err.stackTrace,
            });
            return;
        case Constants.NOT_FOUND:
            res.json({
                title: "Not Found",
                message: err.message,
                stackTrace: err.stackTrace,
            });
            return;
        case Constants.UNAUTHORIZED:
            res.json({
                title: "Unauthorized",
                message: err.message,
                stackTrace: err.stackTrace,
            });
            return;
        case Constants.FORBIDDEN:
            res.json({
                title: "Forbidden",
                message: err.message,
                stackTrace: err.stackTrace,
            });
            return;
        case Constants.SERVER_ERROR:
            res.json({
                title: "Internal Server Error",
                message: err.message,
                stackTrace: err.stackTrace,
            });
            return;
        default:
            break;
    }
};

module.exports = errorHandler;
