const fs = require('fs')
const path = require('node:path')


const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const r = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

 r.question("Enter your text here", function(answer) {

		
	r.on('line',(input) =>{
		answer += '\n'+ input;
		r.resume();

 		 r.on('SIGINT',function(){
				let writeStream = fs.createWriteStream('secret.txt');
  			writeStream.write(answer);
 				r.close();
  			console.log("End of file");
 			})
		if (answer.includes('exit')){
			let writeStream = fs.createWriteStream('secret.txt');
			let ans = answer.replace('exit','');
  		writeStream.write(ans);
  		console.log("End of file");
   		r.close();
			
		}
 	})


});
