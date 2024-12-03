const { default: mongoose } = require("mongoose");
const User = require("../models/User")
const mailsender = require("../utils/sendMail");
const randn = require('randn');
const { paymentSuccessEmail } = require("../mail/paymentSuccessEmail");

require("dotenv").config();

exports.capturePayment = async(req,res)=>{
    
    try {
        // take the courseid and userid
        const  {products} = req.body;
        const userId = req.user.id;
        
        console.log(products);

        let result=``;
        for(const item of products){
            if(result==``){
                result += `${item.productName} * ${item.selectQuantity} = price: ${item.price*item.selectQuantity}`;
            }
            else{
                result += `,  ${item.productName} * ${item.selectQuantity} = price: ${item.price*item.selectQuantity}`;
            }
        }
        console.log(result);
        const invoice = randn(20);

        const user = await User.findById(userId);

        await mailsender(
            user.email,
            `Request for products by ${user.firstName} ${user.lastName}`,
            paymentSuccessEmail(`  ${user.firstName} ${user.lastName}`, result, invoice)
        );

        await mailsender(
            process.env.MAIL_EMAIL,
            `Successfull got request by ${user.firstName} ${user.lastName}`,
            paymentSuccessEmail(`  ${user.firstName} ${user.lastName}`, result, invoice)
        );
        
        return res.status(200).json({
            success:true,
            message:"Category and tag inserted in it successfully",
        })
        
    } catch (error) {
        console.log("error at category Create is: ", error.message);
        return res.status(500).json({
            success:false,
            message:"error at category creation"
        })
    }

}