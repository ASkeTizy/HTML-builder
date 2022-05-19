const fs = require('fs')
const path = require('path');

const options = {
	encoding : 'utf-8',
	withFileTypes:true
}
const options2 = { bigint: false }

fs.readdir(__dirname+'/secret-folder',options,(err, files) => {
    console.log("\nCurrent directory filenames:");
    files.forEach(file => {
    	if ( file.isFile()){
    		fs.stat (__dirname + '/secret-folder/' + file.name, (err, stats) => {
    		 console.log(path.parse(file.name).name + ' - ' + path.extname(file.name).substring(1)
          + ' - ' + stats.size+'kb');
    		})
    	}
    })  
})