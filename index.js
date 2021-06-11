const express = require('express')
const app = express();
const port = 8000;
require('dotenv').config();



app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/test',(req,res)=>{
  res.json({success:true,message:"This is a test route"})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});