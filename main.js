const fs = require('fs');
const pdf = require('pdf-parse');

console.log(fs)

function onUpload() {
	var userFile = document.getElementById("file").files; // this is btn value not pdf value.
	//TODO: CHange to pdf value
	console.log(userFile)
	let dataBuffer = fs.readFileSync('testbank.pdf');
pdf(dataBuffer).then(function(data){
	console.log(data.numpages);
	console.log(data.info);
	console.log(data.text);

})
}




