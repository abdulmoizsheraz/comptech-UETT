const ErrorHandler = require('../utils/ErrorHandler');
module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || 'Internal Server Error';


    // Wrong Mongoose Object ID Error
    if (err.name === 'CastError') {     // agar error ka name CastError hai toh    mtlb get product keta hua chawAL SI id bhaj dei tou yeh error aa skta hai toh uss ko deal krna ka lia hai 
        const message = `Resource not found. Invalid: ${err.path}`;
        err = new ErrorHandler(message, 400);
    }


    // json web token invalid error
    if (err.name === 'JsonWebTokenError') {
        const message = 'Json Web Token is invalid. Try Again!!!';
        err = new ErrorHandler(message, 400);
    }


    // json web token expired error 
    if (err.name === 'TokenExpiredError') {
        const message = 'Json Web Token is expired. Try Again!!!';
        err = new ErrorHandler(message, 400);
    }

    return res.status(err.statusCode).json({
        success: false,
        message: err.message
    });
}