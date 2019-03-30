const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('testbank.pdf');

pdf(dataBuffer).then(function(data){
	console.log(data.numpages);
	console.log(data.info);
	console.log(data.text);

})