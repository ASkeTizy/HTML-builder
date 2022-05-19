const path = require('node:path');
const fs = require('fs');
const stream = new fs.ReadStream('./01-read-file/text.txt');
stream.on('readable',function(){
  let data = stream.read()
  if (data != null) console.log(data.toString())
}) 
