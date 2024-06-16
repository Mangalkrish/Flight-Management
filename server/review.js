const mongoose=require('mongoose');
const Review=require("./review.js");
const User=require("./UserSchema.js")
const schema= mongoose.Schema;

const reviewSchema= new schema({
    comment : String,
    rating :{
        type: Number,
        min:1,
        max: 5,
    },
    createdAt:{
        type: Date,
        default: Date.now(),
    },
    author:{
        type:schema.Types.ObjectId,
        ref:"User"
    }
});
module.exports=mongoose.model("reviews",reviewSchema);