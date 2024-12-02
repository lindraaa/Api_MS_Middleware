const basicAuth = require("express-basic-auth")
const {gundamSchema} = require("../schema")

module.exports.createBasicAuth = (username, password, unAuthorizedMessage = "Authorized Access ONLY!!!") => {
    return basicAuth({
        users: {
            [username]: password
        },
        challenge: true,
        unauthorizedResponse: unAuthorizedMessage
    })
    
}

module.exports.validateInfo = (req, res, next) => {
    const { error } = gundamSchema.validate(req.body);
    if(error){
        const error_message = error.details[0].message;//gettng the error message for JOI
        return res.status(400).json({message:error_message});
    }
    next();
}