const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({

    username:{
        type:String,
        required:[true ,"is required"]
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:[true,'password is required']
    },
    blogs:[{
        type:mongoose.Types.ObjectId,
        ref:'Blog'
    }]

},{timestamp:true})

const userModel=mongoose.model('user',userSchema)
module.exports=userModel;