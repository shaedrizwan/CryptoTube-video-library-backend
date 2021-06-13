const express = require('express');
const app = express();
const cors = require('cors');
const port = 4000;
require('dotenv').config();

require('./database/db.connect')

app.use(express.json())
app.use(cors)

app.get('/',(req,res)=>{
  res.json("Welcome to the CryptoTube Video Library Server. This project is developed by Shahid Rizwan")
})




app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}!`)
});

// 404 route handler
app.use((req,res)=>{
  res.status(404).json({success:false,message:`Not found`})
})

// Error Handler
app.use((err,req,res,next)=>{
  res.json({success:false,error: err,message:err.message })
})