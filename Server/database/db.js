const mongoose=require("mongoose")

const connection=async ()=>{
    const url=`mongodb+srv://user:Aman@123@cloudwalker.eeqr91b.mongodb.net/?cloudWalker=true&w=majority`
    try{
     await mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true })
     

     console.log("Db is connected")
    }
    catch(err){
        console.log("error while conecting " ,err)
    }
}
module.exports={connection}