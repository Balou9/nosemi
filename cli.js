const Nosemi = require('./index.js')
const program = require('commander')
const args = require('minimist')(process.argv.slice(3))


program
  .version('0.0.0')
  .description('Nosemi')

program
  .command('nosemi <file>')
  .description('Write file to directory')
  .action( () => {
//    const ws = fs.writeReadStream(args)
//    const rs = fs.writeReadStream(args)
//    rs.pipe(nosemi).pipe(ws)
//    console.log('nosemi')
  })
