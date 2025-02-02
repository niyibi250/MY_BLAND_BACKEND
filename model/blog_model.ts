import mongoose from "mongoose";
import { type } from "os";

const Blog_schema= new mongoose.Schema({
    title:{type:String, required:[true, 'please title'], trim:true},
    categorly:{type:String},
    photo:{type:String},
    content:{type:String},
    time:{type:String}

})

const blog_model=mongoose.model('Blog',Blog_schema)

export default blog_model 