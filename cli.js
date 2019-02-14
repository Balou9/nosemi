const program = require('commander')
const fs = require('fs')
const args = require('minimist')(process.argv.slice(3))
const Nosemi = require('./index.js')
const nosemi = new Nosemi()
const rs = fs.createReadStream('./' + args._[0])
const ws = fs.createWriteStream('./' + args._[1])

program
  .version('0.0.0')
  .description('Nosemi')

program
  .command('nosemi <file> <file2w>')
  .description('Write file with no semis at the end of the line')
  .action(function () {

  ws.on('error', function (err) {
    console.error(err)
  })

  ws.on('finish', function () {
    console.log('No semi is true')
  })

  rs.pipe(nosemi).pipe(ws)
  console.log(args)

  })
