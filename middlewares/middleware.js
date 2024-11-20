const basicAuth = require("express-basic-auth")

module.exports.createBasicAuth = (username, password, unAuthorizedMessage = "Authorized Access ONLY!!!") =>{
    return basicAuth({
        users: {
            [username] : password
        },
        challenge:true,
        unauthorizedResponse: unAuthorizedMessage
    })
}