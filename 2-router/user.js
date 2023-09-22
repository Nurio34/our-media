
const express = require("express")
const UserRouter = express.Router()

const authMiddleware = require("../4-middlewares/authentication")

const {userPage, getAllData, createData} = require("../3-controllers/user")

    UserRouter.route("/").get(userPage)
    UserRouter.route("/home").get(authMiddleware,getAllData).post(authMiddleware,createData)

module.exports = UserRouter