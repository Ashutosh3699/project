const express = require("express");
const app = express();
var cors = require("cors");

app.use(
    cors({
      origin: "*",
    })
  );

// fetching data from  .env
require("dotenv").config();
const port = process.env.PORT || 4000;

// cookie parser
const cookieParser = require("cookie-parser");
app.use(cookieParser());
// body parser
app.use(express.json());

// cloudinary
const connectCloudinary  =  require("./config/cloudinary");
connectCloudinary();


// ***********************************file uploader*******************
const fileuploader = require("express-fileupload");
app.use(fileuploader({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));

// database
const dbConnect = require("./config/database");
dbConnect();

// routers for user
const userRouter = require("./router/user");
app.use("/api/v1/userRouter", userRouter);


// routers for contact us
const contactUs = require("./router/contactUs");
app.use("/api/v1/contactUs", contactUs);

// routers for profile
const profile = require("./router/Profile");
app.use("/api/v1/profile", profile);

// routers for product router
const productRouter = require("./router/productRouter");
app.use("/api/v1/productRouter", productRouter);

// listen to server
app.listen(port, ()=>{
  console.log(`server is live at port number ${port}`)
})

// default page
app.get("/", (req,res)=>{

  res.send(`<h1>Home page.........</h1>`)
})









