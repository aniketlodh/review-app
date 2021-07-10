let mongoose=require("mongoose");
const reviewSchema= mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    details:{
        type:String,
        required:true
    },
    rating:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model("review",reviewSchema);