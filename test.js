const http = require('http')
// const fs = require('fs')   library to do operation on file
const routes = require('./routes') //importing routes file

const server = http.createServer(routes)
// console.log(req.url, req.method, req.headers)





server.listen(3000)