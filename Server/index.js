const express=require("express")
const bodyparse=require("body-parser")
const {connection}=require("./database/db.js")
const {router} = require("./routes/route.js")
const cors=require('cors')
const app=express()
app.use(bodyparse.json({extended:true}))
app.use(cors())
const port=4500
app.use("/",router)
connection()
app.get("/",(req,res)=>{
    res.send("hello")
})


app.listen(port,()=>{
    console.log(`server is listing on port ${port}`)
})