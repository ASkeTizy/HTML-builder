
const fsp = require('fs/promises')
const path = require('node:path')
const fs = require('fs')

const source =path.resolve(__dirname,'styles')
const file = path.resolve(__dirname,'project-dist','bundle.css')

const out = fs.createWriteStream(file)
fsp.readdir(source, {withFileTypes: true})
  .then(files => files.filter(file => file.isFile()))
  .then(files => files.map(({ name }) => name))
  .then(names => names.filter(name => path.extname(name) == '.css'))
  .then(names => names.map(name => path.resolve(source, name)))
  .then(paths => Promise.all(paths.map(path => fsp.readFile(path))))
  .then(contents => contents.forEach(content => out.write(content)))
