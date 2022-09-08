
const express = require('express')
const crypto = require('crypto')
const fs = require('fs');
const file  = require('./myFile.json')
const app = express()
const port = 3000


const middleware =(req, res, next) =>{

    let body =req.body; 
    
    const hash = crypto.createHash('sha256').update(body).digest('base64');

 const result = JSON.stringify(hash);
  res.send(result)
  next()
}
app.use(middleware)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})