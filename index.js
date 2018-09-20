const { Transform } = require('stream')
const util = require('util')

function Nosemi(options) {
  if (!(this instanceof Nosemi)) {
    return new Nosemi(options)
  }
  Transform.call(this, options)
}

util.inherits(Nosemi, Transform)

Nosemi.prototype._semiout = function semiout (n, chunk) {
  var buf = Buffer.alloc(n)
  for (var i = 0; i < n; i++) {
    var str = chunk[i]
    buf[i] = (str.charCodeAt(0) === 59) ? undefined : chunk
  }
  return buf
}

Nosemi.prototype._transform = function (chunk, _, next) {
  this.push(this._semiout(chunk.length, chunk))
  next()
}

module.exports = Nosemi

// one chunk at a time
