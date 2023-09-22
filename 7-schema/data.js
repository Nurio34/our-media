
const mongoose = require("mongoose")

const DataSchema = new mongoose.Schema(
    {
        userId : {
            type : mongoose.Types.ObjectId,
            required : [true, "Unauthenticated by mongoose/userId validation"]
        },
        message : {
            type : String,
        }
    },
    {timestamps : true}
)



module.exports = mongoose.model("userdatas",DataSchema)