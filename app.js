const express = require("express")
const dotenv = require('dotenv');
dotenv.config();
const app = express()
const path = require("path");
const morgan = require("morgan")
const mongooseConnect = require("./db")
const formRouter = require("./router/form")
const jobRouter = require("./router/jobpost")
const paymentRouter = require('./router/payment')
const cors = require('cors');
const port = process.env.PORT || 5001
app.use(cors());

app.set("view engine" , "ejs");
app.set("views",__dirname + "/public/" + "views");
app.use(express.static(path.join( __dirname, "public")));

app.use(express.json())
mongooseConnect()
app.use(morgan("tiny"))

app.use(formRouter)
app.use(jobRouter)
app.use(paymentRouter)



app.use("/",(req,res)=>{
    res.send('API Works')
})




app.listen(port,()=>{
    console.log("server is running", port);
})