const mongoose =require("mongoose")
const userschema = mongoose.Schema(
    {
        username: {
        type: String,
        required: true,
      },
       name: {
        type: String,
        required: true,
      },
      father_name: {
        type: String,
        required: true,
      },
      mother_name: {
        type: String,
        required: true,
      },
    //   DOB: {
    //     type: String,
    //     required: true,
    //   },
      products: [{ type: String, required: true }],
       hobbies: [{ type: String }],
      city:{ type: String,
        required: true,},
      state: { type: String,
        required: true},
      postal_code:{ type: String,
        required: true,},
    },
    {
      timestamps: true,
    }
  );
  const UserData = mongoose.model("user", userschema);
  module.exports= UserData;