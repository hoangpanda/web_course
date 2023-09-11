# define some const :D 
const http = require("http");
const host = 'localhost';
const port = 8000;

# handle request 
const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("Welcome to my website :DDDD);
};

# create server
const server = http.createServer(requestListener); 
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`); # console log in terminal when run file
});

# 22021200 Pham Duc Hoang
