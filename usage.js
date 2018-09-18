const Nosemi = require('./index.js')
const fs = require('fs')

const nosemi = new Nosemi()
const rs = fs.createReadStream('./semi.js')

rs.pipe(nosemi).pipe(process.stdout)
