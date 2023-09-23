
    //** USER SAYFASINI AÇMAK İÇİN */
const path = require("path")

const userPage = async(req,res) => {

    try {
        
        const filePath = path.join(__dirname, "../1-project/html/user.html")
            res.status(200).sendFile(filePath)

    } catch (error) {
        res.status(500).send("Error Page")
    }
}

    //** AUTH ve USER DATALARLA İLGİLİ FONKSİYONLAR */
const DataSchema = require("../7-schema/data")
const AuthSchema = require("../7-schema/auth")

const getAllData = async(req,res)=> {

    try {
        
        //** DECODED TOKEN'DAN ELDE ETTİĞİMİZ PAYLOAD */
        const {userId,userName,profilePic,quote} = req.user

        const authData = {
            userName : userName,
            profilePic : profilePic,
            quote : quote
        }

        //** BAŞARILI GİRİŞ YAPMIŞ KİŞİYE AİT PAYLAŞIM DATALARI */
        let data = DataSchema.find({userId})

            //** DATAYI SORTLAMA SEÇENEKLERİ */
            data = data.sort("-createdAt")

        data = await data
        
        //** AUTH DATADAKİ TÜM KİŞİLERE AİT DATALAR */
        const authDatas = await AuthSchema.find()

        //** PAYLOAD BİLGİLERİ ve PAYLAŞIM DATALARI İLE OLUŞTURULMUŞ DATA */
        const userData = {
            authData : authData,
            postData : data,
            authDatas : authDatas
        }

            res.status(200).json(userData)

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