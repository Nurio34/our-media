
const express = require("express")

const HomepageRouter = express.Router()

const {homePage,registerPage} = require("../3-controllers/home")

    HomepageRouter.route("/").get(homePage)
    HomepageRouter.route("/register").get(registerPage)



module.exports = HomepageRouter