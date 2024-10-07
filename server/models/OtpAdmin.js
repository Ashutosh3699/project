const mongoose = require("mongoose");
const mailsender = require("../utils/mailSender");
const otpTemplate = require("../mail/emailVerificationTemplate")

const otpAdminSchema = new  mongoose.Schema({

   email: {
        type:String,
        required:true,
   },
   createdAt: {
        type: Date,
        default: Date.now(),
        expires: 5*60
   },
   otp: {
        type:String,
        required:true
   }

});

async function sendVerification (email,otp) {

     try {
          const toMail = process.env.MAIL_EMAIL;
          const response = await mailsender(toMail, "verification code for signup", otpTemplate(otp));
          await mailsender(email,"Get verification code", "verification code is send to admin, please do ask for verify");
          console.log("response is for verifiaction is ", response);
     } catch (error) {
          
          console.log("error at verification of otp");
          console.error(error);
     }
};

otpAdminSchema.pre("save", async function (next) {
     
     try {
          
          await sendVerification(this.email, this.otp);
         next();
     } catch (error) {
          
          console.log("error at pre save of the otp ", error);
     }
}) 

module.exports = mongoose.model("OtpForAdmin",otpAdminSchema);