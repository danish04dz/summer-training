const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// import model

const Student = require('./models/students');
const students = require('./models/students');


const app = express();
app.use(cors());
app.use(express.json());

const PORT=4500;


// connect mongo DB
const connectDB= mongoose.connect("mongodb+srv://mddanish04dz:Z34hK0EY7CgLgZsV@cluster0.fb3xxkd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0") 

connectDB.then(()=>{
   console.log("DB Connected Succesfully");
})

connectDB.catch(()=>{
   console.log("error while connecting Database");
})


// Main route 
app.get('/',(req,res)=>{
   res.send('server is running')
})

// student post api

app.post("/student",async (req,res)=>{

  const {rollNo,name,mobile}=req.body;

  // create new student data
  const newStudent = new Student({
   rollNo,
   name,
   mobile
  });

  // save to database 
  try {
   await newStudent.save();
   res.status(201).json({message:"student created succesfully",
      Student :{
      rollNo:newStudent.rollNo,
      name:newStudent.name,
      mobile:newStudent.mobile
   }
   })
   
  } catch (error) {
   console.log(error);
   res.status(500).send("Error saving data");  
  } 
})

// get data

app.get("/student", async(req,res)=>{

   // get all student data

   const allStudent= await Student.find();

   res.status(200).json(allStudent);
   
   
})



//create server Listening
app.listen(PORT,()=>{
   console.log('server is running on http://localhost:4500');
})

