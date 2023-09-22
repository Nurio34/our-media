

const express = require("express")

const AuthRouter = express.Router()

const {login,register} = require("../3-controllers/auth")

    AuthRouter.route("/login").post(login)
    AuthRouter.route("/register").post(register)



    module.exports = AuthRouter