
const express = require("express")
const app = express()
const http = require("http")
const server = http.createServer(app)
const ip = "127.0.0.1"
    require("dotenv").config()
const port = process.env.PORT || 5500
    require("express-async-errors")


    app.use(express.json())
    app.use(express.static("./1-project"))

const HomepageRouter = require("./2-router/home")
    app.use("/",HomepageRouter)

const AuthRouter = require("./2-router/auth")
    app.use("/auth",AuthRouter)

const UserRouter = require("./2-router/user")
    app.use("/user",UserRouter)



const notFound = require("./4-middlewares/notFound")
const asyncErrorHandler = require("./4-middlewares/error-handler")
    app.use(notFound)
    app.use(asyncErrorHandler)



const connectDB = require("./6-connectDB/connect")
const startServer = async() => {
    try {
        await connectDB(process.env.MONGO_URI)
        server.listen(port,ip,()=>{
        console.log(`Server is running on ${ip}:${port}`);
    })
    } catch (error) {
        console.log(error);
    }
}
startServer()