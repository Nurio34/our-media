
const express = require("express")
const path = require("path")
const app = express()

const AuthSchema = require("../7-schema/auth")

const {BadRequestError, UnauthenticatedError} = require("../5-errors")
const { StatusCodes } = require("http-status-codes")


    app.use(express.static("./1-project"))


    //** LOGIN FORMU SUBMITLENDIĞINDE */

const login = async(req,res) => {


        const {userInfo,password} = req.body


            if(!userInfo || !password) {
                throw new BadRequestError("Please provide email and password")
            }

        const user = await AuthSchema.findOne({email:userInfo})

            if(!userInfo) {
                throw new UnauthenticatedError("Something wrong with the email. Check it")
            }

        const arePasswordsMatched = await user.comparePasswords(password)


            if(!arePasswordsMatched) {
                throw new UnauthenticatedError("Password is incorrect")
            }

        const token = await user.createToken("token")

            res.status(StatusCodes.OK).json({token,arePasswordsMatched})


}

    //** REGİSTER FORMU SUBMİTLENDİĞİNDE */

const register = async(req,res) => {

    try {

        const {userMailOrPhone, fullName, userName, password} = req.body

        const userData = {
            fullName : fullName,
            userName : userName,
            password : password
        }

            if(userMailOrPhone.indexOf("@")>-1) {
                userData.email = userMailOrPhone
            } else {
                userData.phoneNumber = userMailOrPhone
            }

        const user = await AuthSchema.create(userData)
        
        const token = user.createToken()

            res.status(StatusCodes.OK).json(token)

        // const filePath = path.join(__dirname, "../1-project/html/authedHome.html");

        //     res.status(StatusCodes.OK).sendFile(filePath)

    } catch (error) {

        res.status(500).send(error)
    }
}

    module.exports = {login,register}