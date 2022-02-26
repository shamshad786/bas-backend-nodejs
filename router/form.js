const express = require("express")
const formController = require("../controller/formController")
const formRouter = express.Router()

formRouter.post("/formdata",formController.postFormData)
formRouter.get("/formdata",formController.getAllFormData)

module.exports = formRouter