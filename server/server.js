//Server
//01/10/2020

const express = require('express')
const app = express()
//I am using port 5000 on my local host:
const port = 5000
var i = 0;

app.get('/', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.send('Hello World!' + "\nTimes submitted " + i++)
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})