const fs = require('fs')

const rs = fs.createReadStream('../semi.js')

rs.pipe(process.stdout)
