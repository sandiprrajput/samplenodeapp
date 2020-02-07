var os = require('os')
var http = require('http')

function handleRequest(req, res) {
  res.write('Hi there! I\'m being served from: ' + os.hostname())
  res.write(' Running this application on port: 3000')
   res.write('This is demo testing....')
  res.end()
}

http.createServer(handleRequest).listen(3000)
