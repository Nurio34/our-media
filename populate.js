
const DataSchema = require("./7-schema/data")
const connectDB = require("./6-connectDB/connect")
const datas = require("./data.json")
    require("dotenv").config()

const start = async()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        await DataSchema.deleteMany()
        await DataSchema.create(datas)
        process.exit(0) 
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

start()