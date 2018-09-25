function isSemiNewLine (str) {
  return /[;(?=\n)]/g.test(str)
}

function isNewLine (str) {
  return /[\n\r]/g.test(str)
}

function isSpace (str) {
  return /[\s]/.test(str)
}

module.exports = {
  isSemiNewLine,
  isNewLine,
  isSpace
}
