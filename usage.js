var Nosemi = require('./index.js')
var fs = require('fs')
var rs = fs.createReadStream('./semi.js')
var nosemi = new Nosemi()
var wstream = fs.createWriteStream('./nosemi.js')

wstream.on('error', function (err) {
  console.error(err)
})

wstream.on('finish', function () {
  console.log('No semi is true')
})

rs.pipe(nosemi).pipe(wstream)
