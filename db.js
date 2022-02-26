const mongoose = require("mongoose")

const dbConnection = ()=>{mongoose.connect("mongodb+srv://shamshad-hussain:Mubarak98@cluster0.x09j1.mongodb.net/bhartiyaaviation?retryWrites=true&w=majority").then(result=>{
    console.log("Database connection passed");
}).catch(err=>{
    console.log("Error in connection db", err);
})
}

module.exports = dbConnection