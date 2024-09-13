const express = require("express");
const app = express();
var cors = require("cors");

app.use(
    cors({
      origin: "*",
    })
  );

// body parser
app.use(express.json());
require("dotenv").config();

const port = process.env.PORT || 4000;

// routing setup
const routes = require("./router/route");
app.use("/api/v1", routes);

// app listen
app.listen(port, ()=>{
    console.log(`App is running at ${port}`);
})










