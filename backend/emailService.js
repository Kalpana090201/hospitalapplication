const nodemailer=require("nodemailer")

const transporter=nodemailer.createTransport({
    service:"Gmail",
    auth:{
        user:'kalpanabethini@gmail.com',
        pass:"pbeywnbgjuffmibw"
    }
})
module.exports=transporter