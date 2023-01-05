
const express =require('express')

const AddUser=require("../controller/user_controller.js")
const router=express.Router()


router.post(`/add`,AddUser)
module.exports={router}
