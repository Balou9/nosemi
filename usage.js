const Nosemi = require('./index.js')
const fs = require('fs')
const rs = fs.createReadStream('./semi.js')
const nosemi = new Nosemi()
const wstream = fs.createWriteStream('./nosemi.js')

wstream.on('error', function (err) {
  console.error(err)
})

wstream.on('finish', function () {
  console.log('No semi is true')
})

rs.pipe(nosemi).pipe(wstream)
