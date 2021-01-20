const express = require('express')
const app = express();
const path = require('path')


// app.use(express.static(path.join((__dirname,'public'))));


app.use(express.static('./public'))

app.listen(3000, ()=>{
  console.log('app is running on 3000');
})