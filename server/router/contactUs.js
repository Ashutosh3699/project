const express = require("express");
const contactUsRouter = express.Router();

const {contactUs} = require("../controller/ContactUs");

contactUsRouter.post("/contactUsrouter", contactUs);

module.exports = contactUsRouter