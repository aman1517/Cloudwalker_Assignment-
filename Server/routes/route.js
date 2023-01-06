
const express =require('express')

const {AddUser,getusers}=require("../controller/user_controller.js")

const router=express.Router()


router.post(`/add`,AddUser)
router.get("/all",getusers)
module.exports={router}
