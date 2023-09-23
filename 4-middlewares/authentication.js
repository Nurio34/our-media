
const jwt = require("jsonwebtoken")
const { UnauthenticatedError } = require("../5-errors")

const auth = async(req,res,next)=> {

    try {
        const authorize = req.headers.authorization

            if(!authorize || !authorize.startsWith("Bearer") || !authorize.length>12) {
                throw new UnauthenticatedError("Error in authMiddleWare while try")
            }

        const token = authorize.split(" ")[1]

        const payload = jwt.verify(token,process.env.JWT_SECRET)

            req.user = {userId : payload.userId, userName : payload.userName, profilePic: payload.profilePic, quote: payload.quote}
    } catch (error) {
        throw new UnauthenticatedError("Error inauthMiddleware with catch")
    }
    

    next()
}



module.exports = auth
