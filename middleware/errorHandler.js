const {constants} = require("../constants");
const errorHandler = (err, req, res,next) =>{

    const statuscode = res.statusCode ? res.statusCode : 500;
    switch (statuscode) {
        case constants.VALIDATION_ERROR:
            res.json({
                title:  `${constants.VALIDATION_ERROR}: BAD REQUEST`, 
                message: err.message, 
                stackTrace: err.stack
            });
            break;
        case constants.NOT_FOUND:
            res.json({
                title:  `${constants.NOT_FOUND}: NOT FOUND`, 
                message: err.message, 
                stackTrace: err.stack
            });
            break;
            case constants.UNAUTHORIZED:
            res.json({
                title:  `${constants.UNAUTHORIZED}: NOT AUTHORIZED`, 
                message: err.message, 
                stackTrace: err.stack
            });
            break;
            case constants.FORBIDDEN:
            res.json({
                title:  `${constants.FORBIDDEN}: FORBIDDEN`, 
                message: err.message, 
                stackTrace: err.stack
            });
            break;
            case constants.SERVER_ERROR:
            res.json({
                title:  `${constants.SERVER_ERROR}: INTERNAL SERVER ERROR`, 
                message: err.message, 
                stackTrace: err.stack
            });
            break;
        default:
            console.log("No Error, Everyting is fine");
    }
};

module.exports = errorHandler;