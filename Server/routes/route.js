
const express =require('express')

const {AddUser,getusers,getuserr,deleteUser}=require("../controller/user_controller.js")

const router=express.Router()


router.post(`/add`,AddUser)
router.get("/all",getusers)
router.get("/:id",getuserr)
router.delete(":id",deleteUser)
module.exports={router}
