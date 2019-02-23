var program = require('commander')
var fs = require('fs')
var args = require('minimist')(process.argv.slice(3))
var Nosemi = require('./index.js')

program
  .version('0.0.0')
  .description('Nosemi')

program
  .command('nosemi <file> [file2w]')
  .description('Write file with no semis at the end of the line')
  .action(function (file, file2w) {

  if (!file2w) file2w = 'nosemi_' + args._[0]
  var rs = fs.createReadStream(file)
  var ws = fs.createWriteStream(file2w)
  var nosemi = new Nosemi()

  ws.on('error', function (err) {
    console.error(err)
  })

  ws.on('finish', function () {
    console.log('No semi is true')
  })

  rs.pipe(nosemi).pipe(ws)

  })

program.parse(process.argv)
