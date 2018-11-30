const { Transform } = require('stream')
const util = require('util')

function Nosemi(options) {
  if (!(this instanceof Nosemi)) {
    return new Nosemi(options)
  }
  Transform.call(this, options)
}

util.inherits(Nosemi, Transform)

Nosemi.prototype._transform = function (chunk, _, next) {
  if (/;/.test(chunk)) {
    for (var i = 0; i < chunk.length; i++)
    if (String.fromCharCode(chunk[i]) === '\r' &
        String.fromCharCode(chunk[i-1]) === ';')
      chunk[i-1] = Buffer.from('')
  }
  this.push(chunk)
  next()
}

module.exports = Nosemi
