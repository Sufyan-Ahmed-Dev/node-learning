// install express 
// copy boilerplate from npm website 

// ejs setup 
// create folder : veiws and inside veiws create ejs file 
// install ejs
// setup engine :  app.set("view enigne" ,"ejs")
//  render ejs inside routes

// static setup 
// create Public folder inside public  create statics files and folder


const express = require('express')
const app = express()
 
app.set("view engine" ,"ejs")
app.use(express.static("public"))
app.get('/', function (req, res) {
  res.render('index')
})

app.listen(3000)
console.log(`http://localhost:3000/`)