require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login',(req, res)=>{
  res.send('please login sir')
})

app.get('/signup',(req, res)=>{
  res.send('please sign up')
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})