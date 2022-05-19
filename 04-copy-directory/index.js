const fs = require('node:fs');
const copyFile = require('node:fs/promises');
const path = require('path');
const DIR = './files';

if (!fs.exists(__dirname, (e)=>{}) ){
	fs.mkdir( path.join( __dirname, 'files-copy'), (err) => {});

}
	fs.readdir(__dirname + '/files', (err, files) => {				
		files.forEach( file => {
			fs.copyFile(__dirname + '/files/'+file, __dirname+'/files-copy/'+file, fs.constants.COPYFILE_FICLONE, 
				(err)=>{
					if (err) throw err;
					console.log(file+' '+__dirname+'/files-copy/'+file+' '+fs.constants.COPYFILE_FICLONE)});
		})
	})

