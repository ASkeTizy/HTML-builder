const path = require('node:path');
const fs = require('fs')
const s = path.posix.basename('/test/test.txt');
const stream = new fs.ReadStream(s);
stream.on('readable',function(){
  let data = stream.read()
  if (data != null) console.log(data.toString())
}) 
