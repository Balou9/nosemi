const Nosemi = require('./index.js')
const fs = require('fs')
const rs = fs.createReadStream('./semi.js')
const nosemi = new Nosemi()

rs.pipe(nosemi).pipe(process.stdout)
