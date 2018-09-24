const tape = require('tape')
const Nosemi = require('./index.js')
const isSemiNewLine = require('./lib/is.js')
const fs = require('fs')
const rs = fs.createReadStream('./semi.js')

tape('nosemi - pass', function (t) {
  const nosemi = new Nosemi()
  t.true(rs.pipe(nosemi).pipe(process.stdout))
  t.end()
})

tape('isSemiNewLine - pass', function (t) {
  const str = ';;;;wyha419hy;'
  t.true(isSemiNewLine.bind(null, str))
  t.end()
})
