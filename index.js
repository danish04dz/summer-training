const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());



// Main route 
app.get('/',(req,res)=>{
   res.send('serrver is runing')
})



//create server Listining
app.listen(4500,()=>{
   console.log('server is running on http://localhost:4500');
})

