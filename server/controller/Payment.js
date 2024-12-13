const { default: mongoose } = require("mongoose");
const User = require("../models/User")
const mailsender = require("../utils/sendMail");
const randn = require('randn');
const { paymentSuccessEmail } = require("../mail/paymentSuccessEmail");
const paymentStatus = require("../models/PayStatus");
const Products = require("../models/Products");

require("dotenv").config();

exports.capturePayment = async(req,res)=>{
    
    try {
        // take the courseid and userid
        const  {products} = req.body;
        const userId = req.user.id;

        let result=``;
        for(const item of products){
            if(result==``){
                result += `${item.productName} * ${item.selectQuantity} = price: ${item.price*item.selectQuantity}`;
            }
            else{
                result += `,  ${item.productName} * ${item.selectQuantity} = price: ${item.price*item.selectQuantity}`;
            }
        }
        // console.log(result);
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
        
        for(const item of products){
            
            const payStatus = await paymentStatus.create({
                productId: item._id,
                userId,
                quantity:item.selectQuantity,
                invoice
            });
            // console.log("product is: ", payStatus);
            const res = await paymentStatus.findById(payStatus._id).populate("productId").populate("userId").exec();
            // console.log("res is : ", res);
        }
       
        // console.log("invoice is: ", invoice);
        // console.log("user is: ", user);
        return res.status(200).json({
            success:true,
            message:"payment and status inserted in it successfully",
        })
        
    } catch (error) {
        console.log("error at payment Create is: ", error.message);
        return res.status(500).json({
            success:false,
            message:"error at payment creation"
        })
    }

}

exports.findUnpaidPayments = async(req,res)=>{

    try {
        console.log("first");
        const response = await paymentStatus.find({})
                                            .populate("productId")
                                            .populate("userId")
                                            .exec();

        // console.log("response is: ", response);

        return res.status(200).json({
            success:true,
            data:response,
            message:"payment status fetched successfully",
        })

    } catch (error) {
        
        return res.status(500).json({
            success:false,
            message:"error at payment fetching"
        })
    }
}

exports.PaymentStatusUpdate = async(req,res)=>{

    try {
        const {payment_id} = req.body;
        // console.log("in payment Status Update .............................................................................");
        // console.log("payment is a: ",payment_id);
        const PaymentStatus = await paymentStatus.findByIdAndUpdate(payment_id,
            {
                payStatus:"done"
            },
            {new:true}
        ).populate("productId").populate("userId").exec();

        const resQuantity = PaymentStatus.productId.quantity - PaymentStatus.quantity;
        // console.log("result quantity: ", resQuantity);
        const productData = await Products.findByIdAndUpdate(PaymentStatus.productId._id,{
            quantity: resQuantity
        },{new:true});
        // console.log("product data is: ", productData);
        const userdata = await User.findByIdAndUpdate(PaymentStatus.userId._id,{
                $push:{
                    accountProducts: PaymentStatus._id
                }, 
            },
            {new:true}
        );
        // console.log("user data is: ", userdata);

        const response = await paymentStatus.find({})
                                            .populate("productId")
                                            .populate("userId")
                                            .exec();

        return res.status(200).json({
            success:true,
            data:response,
            message:"payment status Updated  successfully, reload the data",
        })

    } catch (error) {
        
        console.log("error at payment status update: ", error);

        return res.status(500).json({
            success:false,
            message:"error at payment saving and doing the things"
        })
    }
}

exports.ProductHistory= async(req,res)=>{

    try {
        const userId = req.user.id;
        // console.log("user is a: ",userId);
        const response = await User.findById(userId)
                                            .populate({
                                                path:"accountProducts",
                                                populate: {path: "productId"}
                                            })
                                            .exec();



        return res.status(200).json({
            success:true,
            data:response,
            message:"payment history fetched  successfully",
        })

    } catch (error) {
        
        console.log("error at payment history: ", error);

        return res.status(500).json({
            success:false,
            message:"error at fetching history"
        })
    }
}