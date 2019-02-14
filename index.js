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
    var str = JSON.stringify(chunk).replace(/59,13/g, '13')
    chunk = Buffer.from(JSON.parse(str))
  }
  this.push(chunk)
  next()
}

module.exports = Nosemi
