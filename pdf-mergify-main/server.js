//server in express?

const express = require('express')
//line 1: this module is for sendfile functionality.
const path = require('path')

const app = express()
//multer module
const multer = require('multer')
//import mergepdfs async function in server.js
const {mergerpdfs} = require('./merge')

const upload = multer({ dest: 'uploads/'})
app.use('/static', express.static('public'))

const port = 3000

app.get('/', (req, res) => {
  //line2: reference for line 1.
  res.sendFile(path.join(__dirname, "template/index.html"))
})

//writing post method in node js to responce back
app.post('/merge', upload.array('pdfs', 2), /*function*/ async (req, res,next) => {

  console.log(req.files)
  //fuction call : mergerpdfs which we import from testpdfs.js
  let d = await mergerpdfs(path.join(__dirname, req.files[0].path) , path.join(__dirname, req.files[1].path))

  // now we are not sending res.send intead we do redirect
  //res.send({data: req.files})
  res.redirect(`http://localhost:3000/static/${d}.pdf`)

  //req.files is array of `photos` files
  //req.body will contain the text fields, if there were any
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

// how to add (192.168.1.4:3000) in port in expree?