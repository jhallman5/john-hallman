const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const path = require('path')
const {router} = require('./controllers/routes/routes')
const server = express()
const port = process.env.PORT || 3000
const currentEnv = process.env.NODE_ENV || 'development'

server.set('view engine', 'ejs')
server.set('views', path.join(__dirname,'views'))

server.use(bodyParser.urlencoded({ extended: false }))
server.use(cookieParser())

server.use(express.static(path.join(__dirname + 'public')))

server.use(router)

server.listen(port, () => {
  console.log('The server is listening on port: ' + port )
  console.log('in a ' + currentEnv + ' environment')
})
