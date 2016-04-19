'use strict'

const http = require('http')
const port = process.env.PORT || 3000

http.createServer((req,res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' })

  res.end(JSON.stringify({
    ipaddress: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
    language: req.headers['accept-language'].split(',')[0],
    software: req.headers['user-agent'].match(/\((.+?)\)/)[1]
  }))
}).listen(port)
