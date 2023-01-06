const mongoose=require("mongoose")

const connection=async ()=>{
    const url=`mongodb+srv://Hariomojha:Hariom2003@cluster0.88sab.mongodb.net/cloudWalker?retryWrites=true&w=majority`
    try{
     await mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true })
     

     console.log("Db is connected")
    }
    catch(err){
        console.log("error while conecting " ,err)
    }
}
module.exports={connection}