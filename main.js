const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('testbank.pdf');

var userFile = document.getElementById("upload").value;

pdf(dataBuffer).then(function(data){
	console.log(data.numpages);
	console.log(data.info);
	console.log(data.text);

})