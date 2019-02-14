const tape = require('tape')
const fs = require('fs')

tape('nosemi - pass', function (t) {
  const Nosemi = require('./index.js')
  const nosemi = new Nosemi()
  const rs = fs.createReadStream('./semi.js')
  const ws = fs.createWriteStream('./nosemi.js')

  function isTrue (arr) {
    return arr.every(function (cur) {
      return cur == true
    })
  }

  function isSemiIn (buf, cb) {
    var result = []
    for (var i = 0; i < buf.length; i++) {
      if (buf[i] == 59 & buf[i+1] == 13) result.push(false)
      else result.push(true)
    }
    cb(null, isTrue(result))
  }

  ws.on('error', function (err) {
    t.end(err)
  })

  ws.on('finish', function () {
    fs.exists('./nosemi.js', function (exists) {
      t.true(exists, 'nosemi file exists')

      fs.readFile('./nosemi.js', function (err, data) {
        isSemiIn(data, function (err, nosemi) {
          if (err) t.end(err)
          t.true(nosemi, 'nosemi true')
        })

        fs.unlink('./nosemi.js', function (err) {
          if (err) t.end(err)
          fs.exists('./nosemi.js', function (exists) {
            if (exists) t.end(new Error('File still exists...'))
            t.false(exists, 'file has been removed')
          })
        })
      })
    })
  })

  rs.pipe(nosemi).pipe(ws)

  t.end()
})
