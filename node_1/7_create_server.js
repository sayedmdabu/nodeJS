// Create Server 

/*
Make Basic Server Output on Browser
- Make Basic Server
- Function as parameter in node
- Arrow 
- Get output on Browser
*/


const http = require('http');

http.createServer((req, resp)=>{
    resp.write("Hello SayeD");
    resp.end();
}).listen(4500);