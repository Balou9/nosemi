const { Transform } = require('stream')
const util = require('util')

function Nosemi(options) {
  if (!(this instanceof Nosemi)) {
    return new Nosemi(options)
  }
  Transform.call(this, options)
}

util.inherits(Nosemi, Transform)

Nosemi.prototype._transform = function (chunk, enc, cb) {
  this.push(chunk)
  cb()
}

module.exports = Nosemi
