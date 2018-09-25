const {
  isSemiNewLine,
  isNewLine,
  isSpace
} = require('./is.js')

const str = 'Some text; another more text;\nanotherText; endofline;'

 for (var i = 0; i < str.length; i++) {
   console.log(str[i], isSemiNewLine(str[i]),
   isNewLine(str[i+1]), isSpace(str[i+1]))
 }

// console.log(str)
// console.log(isSemiNewLine(str))

// PENDING look for a lookahead algorithm
// if semicolon is followed by a newline
// or combine ?

// if each character than check for true in current and true in current + 1
