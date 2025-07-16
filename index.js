const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT=4500;

// Main route 
app.get('/',(req,res)=>{
   res.send('server is running')
})

// student post api

app.post("/student",(req,res)=>{

   res.json({
      'msg':'record saved !'
   })

})



//create server Listening
app.listen(PORT,()=>{
   console.log('server is running on http://localhost:4500');
})

