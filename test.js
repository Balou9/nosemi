const tape = require('tape')
const Nosemi = require('./index.js')
const fs = require('fs')
const rs = fs.createReadStream('./semi.js')

tape('nosemi - pass', function (t) {
  const nosemi = new Nosemi()
  t.true(rs.pipe(nosemi).pipe(process.stdout))
  t.end()
})
