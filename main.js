const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('testbank.pdf');

var userFile = document.getElementById("upload").value; // this is btn value not pdf value.
//TODO: CHange to pdf value
console.log(userFile)

pdf(dataBuffer).then(function(data){
	console.log(data.numpages);
	console.log(data.info);
	console.log(data.text);

})