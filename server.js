const express = require('express')
const app = express()
 
app.get('/',  (req, res) => {
  console.log(req.method)
  console.log(req.query.query1)
  console.log(req.headers)
  console.log(req.headers.accept)
  console.log(req.headers['cache-control'])
  console.log(req.url)
  res.send('Hello World')
})  
 
app.listen(3001,() =>{console.log(`server is running at port 3001`)} )  