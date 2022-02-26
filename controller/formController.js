const express = require("express")
const FormData = require("../models/formData")
const JobPost = require("../models/post")


exports.postFormData = async (req,res)=>{
    var formParams = req.body
    var postId = req.body.postId
    console.log(postId);
    try{
    if(postId){
        JobPost.findById(postId).then(async(result)=>{
            var postName = result.name
            var price = result.price
           
            console.log("POST DATA",postName,price);
            formParams["price"]=price
            formParams["postapply"]=postName
            const formData = new FormData(formParams)
            var response = await formData.save()
            res.json({ 
                status : 200,
                message : "Form Submitted Successfully",
                body : response
            })
        })
        }
    }catch(err){
        res.json({ 
            status : 500,
            message : "Error in form Submission",
        })
    }
    
}
exports.getAllFormData = async (req,res)=>{

    try{
    var response = await FormData.find().lean()
    console.log("All records fetched");
    res.json({
        status: 200,
        message:"all records fetched",
        body:response
    })
    }
    catch(err){
        console.log("Error in getting all form records");
        res.json({
            status:500,
            message:"error in getting all records"
        })
    }

   

}