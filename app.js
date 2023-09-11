// define some const :D 
const http = require("http");
const host = 'localhost';
const port = 8000;

// handle request 
const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("Welcome to my website :>");
};

// create server
const server = http.createServer(requestListener);
// server listen then return 
server.listen(port, host, () => {
    // print log when server running
    console.log(`Server is running on http://${host}:${port}`); 
});

// 22021200 Pham Duc Hoang