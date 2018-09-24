const { Transform } = require('stream')
const util = require('util')

const isSemiNewLine = require('./lib/is.js')

function Nosemi(options) {
  if (!(this instanceof Nosemi)) {
    return new Nosemi(options)
  }
  Transform.call(this, options)
}

util.inherits(Nosemi, Transform)

Nosemi.prototype._semiout = function semiout (n, chunk) {
  var buf = Buffer.alloc(n)
  for (var i = 0; i < n; i++)
    buf[i] = (String.fromCharCode(chunk[i]) === ';') ? null : chunk[i]
  return buf
}

Nosemi.prototype._semiout2 = function _semiout2 (n, chunk) {
  var buf = Buffer.alloc(n)
  for (var i = 0; i < n; i++)
    buf[i] = (isSemiNewLine(chunk[i]) === true) ? null : chunk[i]
  return buf
}

Nosemi.prototype._transform = function (chunk, _, next) {
  this.push(this._semiout2(chunk.length, chunk))
  next()
}

module.exports = Nosemi
