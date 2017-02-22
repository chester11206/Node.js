var http = require("http");

function onRequest(req, res){
	console.log("Request received.");
	res.writeHead(200, {"Content-Type": "text/plain"});
	res.end("Hello World!");
}

http.createServer(onRequest).listen(1234);

console.log("Server has started to listen at port: 1234.");