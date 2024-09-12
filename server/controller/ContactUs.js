const mailsender = require("./mailsender");

require("dotenv").config();

exports.contactUs = async(req,res)=>{

    try {
        const {firstName, lastName, email,phoneNumber, message} = req.body;

        // validate karna hai toh karle
        if(!firstName || !lastName || !email || !phoneNumber || !message){
            return res.status(400).json({
                success:false,
                message: "Enter the data properly in the form"
            })
        }
        // send  mail to admin
        const senToAdmin = await mailsender(process.env.MAIL_EMAIL, `User have entered name:${firstName} ${lastName}`,  `message is ${message}`);
        // send mail to user
        const sentToUser = await mailsender(email, "Noreply mail", `your data has been recieved`);
        // return response
        return res.status(200).json({
            success:true,
            message: "Contact us data has been send successfully"
        })
    } catch (error) {
        
        return res.status(500).json({
            success:false,
            message:"Error occurred, have problem while email sending"
        })
    }
}