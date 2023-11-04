import mongoose from "mongoose";

const Schema = new mongoose.Schema ({
id: {
        type:Number
    },
    firstname: {
        type: String

    },
    lastname:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:Number
    },
    password:{
        type:String
    }
})

export default mongoose.model.Users || mongoose.model("User",Schema);