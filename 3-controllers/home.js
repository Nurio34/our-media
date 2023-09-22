
const path = require("path")
const { StatusCodes } = require("http-status-codes")

const homePage = async(req,res) => {

    try {

        const filePath = path.join(__dirname, "../1-project/html/home.html");

            res.status(StatusCodes.OK).sendFile(filePath)

    } catch (error) {

        res.status(500).send(error)
    }
}

    //** KAYDOL BUTONUNA BASILDIĞINDA */

const registerPage = async(req,res)=> {

    const filePath = path.join(__dirname,"../1-project/html/register.html")

        res.status(StatusCodes.OK).sendFile(filePath)
}
    module.exports = {homePage,registerPage}