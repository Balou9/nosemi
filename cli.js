const Nosemi = require('./index.js')
const program = require('commander')
const args = require('minimist')(process.argv.slice(3))


program
  .version('0.0.0')
  .description('Nosemi')

program
  .command('nosemi <file> <file2write>')
  .description('Write file with no semis at the end of the line')
  .action(function (file, file2write) {
  const nosemi = new Nosemi
  const rs = fs.createReadStream(file)
  const ws = fs.createWriteStream(file2write)


  ws.on('error', function (err) {
    console.error(err)
  })

  ws.on('finish', function () {
    console.log('No semi is true')
  })

  rs.pipe(nosemi).pipe(ws)
  console.log(args)

  })
