//define ur local schema 

import mongoose from "mongoose";        

//todo document structure
const todoSchema =mongoose.Schema({
    todo : {type: String, require: true, unique: true}
})
//creating collections with name called todos with todoSchema 
const todoCollection = mongoose.model("todo", todoSchema)

export default todoCollection;