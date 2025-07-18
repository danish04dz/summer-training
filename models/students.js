const mongoose= require('mongoose');
const studentSchema= new mongoose.Schema({
    rollNo :{
        type:String,
        required:true

    },

    name: {
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    }




})

module.exports= mongoose.model("Student",studentSchema);