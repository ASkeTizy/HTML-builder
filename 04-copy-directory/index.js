const fs = require('node:fs');
const copyFile = require('node:fs/promises');
const path = require('path');
const DIR = path.join( __dirname, 'files');
const COPY_DIR=path.join( __dirname, 'files-copy')

fs.access(COPY_DIR, (e) => {
    if (e) {
      fs.mkdir( COPY_DIR, (err) => {});      
      fs.readdir(DIR, (err, files) => {        
        files.forEach( file => {
        fs.copyFile(path.join(DIR, file),path.join(DIR_COPY, file),
          (err)=>{
            if (err) console.log(err);
          });
        })
      })
    } else{
        fs.readdir(COPY_DIR, (err, files) => {       
          files.forEach( file => {
            fs.unlink(path.join(COPY_DIR,file),(err) => { 
              if (err) console.log(err)
            })
          })
        })
        fs.readdir(DIR, (err, files) => {        
          files.forEach( file => {
            fs.copyFile(path.join(DIR, file), path.join(DIR_COPY, file),
              (err)=>{
                if (err) console.log(err);
              });
          })
        })
      }   
  })
