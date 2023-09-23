
const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const AuthSchema = new mongoose.Schema({
    email:{
        type: String,
        match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                'Please provide a valid email'
        ],
        unique: [true, "This email already exists"]
    },
    phoneNumber:{
        type:String,
        maxlength: [11,"Format : 0552612XXXX"],
        minlength: [11,"Format : 0552612XXXX"]
    },
    fullName:{
        type: String,
        required: [true, 'Please provide Fullname'],
        minlength: [6,"Cant be less thane 6 characters"]
    },
    userName:{
        type: String,
        required: [true, 'Please provide Username'],
        minlength: [3,"Cant be less than 3 characters"],
        unique : true
    },
    password:{
        type: String,
        required: [true, 'Please provide password'],
        // match : []
        minlength: [8,"More than 8 characters good for your security"]
    },
    profilePic: {
        type:String,
        default : "pfofile pic URL"
    },
    quote:{
        type:String,
        default : "Live yo life"
    }
},
{timestamps : true}
)

AuthSchema.pre("save",async function(){

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password,salt)
})

AuthSchema.methods.comparePasswords = async function(logedPassword) {
    return await bcrypt.compare(logedPassword,this.password)
}

AuthSchema.methods.createToken = function() {
    return jwt.sign({userId:this._id,userName : this.userName, profilePic: this.profilePic, quote:this.quote},process.env.JWT_SECRET)
}

module.exports = mongoose.model("authdatas", AuthSchema)