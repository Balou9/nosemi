function isSemiNewLine (str) {
  return /[;]/g.test(str)
}

module.exports = isSemiNewLine
