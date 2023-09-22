
const path = require("path")
const DataSchema = require("../7-schema/data")

const userPage = async(req,res) => {

    try {
        
        const filePath = path.join(__dirname, "../1-project/html/user.html")
            res.status(200).sendFile(filePath)
    } catch (error) {
        res.status(500).send("Error Page")
    }
}

const getAllData = async(req,res)=> {

    try {
        
        const userID = req.user

            const obtainedDatas = await DataSchema.find(userID)

        res.status(200).json(obtainedDatas)

    } catch (error) {
        res.status(500).send("Error Page while getAllData()")
    }
}

const createData = async(req,res)=> {

    try {
        
        const {userId} = req.user
        const dataGot = req.body

        const dataObj = {
            userId : userId,
            message : dataGot.message
        }
        const createdData = await DataSchema.create(dataObj)

            res.status(200).json(createdData)

    } catch (error) {
        res.status(500).send("Error Page while createData()")
    }
}


module.exports = {userPage, getAllData, createData}