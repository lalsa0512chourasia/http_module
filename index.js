const http = require("http");  //es5

//creating server
http.createServer(function (request, response) {
    // response.write("Hello World");
    //  response.write("<h1>Hello</h1>");
    let user = { name: "Ram", age: 17 }
    response.write(JSON.stringify(user))
    //closing the server is necessary
    response.end();
}).listen(4000)


// express is a framework


// https://github.com/sharma-harshita/node-http-module/blob/master/index.js
