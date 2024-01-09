const {constants} = require("../constants");

const errorHandler = (err, req, res,next) =>{
    const statuscode = res.statusCode ? res.statusCode : 500;
    switch (statuscode) {
        case constants.VALIDATION_ERROR:
            res.json({
                title: "validation Field", 
                message: err.message, 
                stackTrace: err.stack
            });
            break;
        case constants.NOT_FOUND:
            res.json({
                title: "Not Found", 
                message: err.message, 
                stackTrace: err.stack
            });
            break;
            case constants.UNAUTHORIZED:
            res.json({
                title: "Uauthorized", 
                message: err.message, 
                stackTrace: err.stack
            });
            break;
            case constants.FORBIDDEN:
            res.json({
                title: "Forbidden", 
                message: err.message, 
                stackTrace: err.stack
            });
            break;
            case constants.SERVER_ERROR:
            res.json({
                title: "Server Error", 
                message: err.message, 
                stackTrace: err.stack
            });
            break;
        default:
            console.log("No Error, Everyting is fine");
    }
};

module.exports = errorHandler;