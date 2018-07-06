/*var
http = require('http'),
path = require('path'),
fs = require('fs'),
 
//these are the only file types we will support for now
extensions = {
	".html" : "text/html",
	".css" : "text/css",
	".js" : "application/javascript",
	".png" : "image/png",
	".gif" : "image/gif",
	".jpg" : "image/jpeg"
};
 
//helper function handles file verification
function getFile(filePath,res,mimeType){
	//does the requested file exist?
	fs.exists(filePath,function(exists){
		//if it does...
		if(exists){
			//read the fiule, run the anonymous function
			fs.readFile(filePath,function(err,contents){
				if(!err){
					//if there was no error
					//send the contents with the default 200/ok header
					res.writeHead(200,{
						"Content-type" : mimeType,
						"Content-Length" : contents.length
					});
					res.end(contents);
				} else {
					//for our own troubleshooting
					console.dir(err);
				};
			});
		} ;
	});
};
 
//a helper function to handle HTTP requests
function requestHandler(req, res) {
	var
	fileName = path.basename(req.url) || 'index.html',
	ext = path.extname(fileName),
	localFolder = __dirname;
 
	//call our helper function
	//pass in the path to the file we want,
	//the response object, and the 404 page path
	//in case the requestd file is not found
	getFile((localFolder + fileName),res,extensions[ext]);
};
 
//step 2) create the server
http.createServer(requestHandler)
 
//step 3) listen for an HTTP request on port 3000
.listen(3000);*/

//******************************************************************

/*// Modules
const http = require('http');
const fs = require('fs');

// Server configuration
const hostname = '127.0.0.1';
const port = 3000;

// Render page
fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    const server = http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(port, hostname, () => {
    	// Console
	  	console.log(`Server running at http://${hostname}:${port}/`);
	});
});*/
//******************************************************************
var express = require('express');
var app = express();
var path = require('path');

const hostname = '127.0.0.1';
const port = 3000;


//transforme le répertoire racine (__dirname) est un repertoire de ressources 
// i-e les chemins vers les fichiers js et css y seront relatifs
app.use(express.static(__dirname));

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port);
console.log(`Server running at http://${hostname}:${port}/`);