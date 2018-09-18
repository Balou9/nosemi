var fs = require('fs');
var zlib = require('zlib');

var gzip = zlib.createGzip();
var rstream = fs.createReadStream('myfile.txt');
var wstream = fs.createWriteStream('myfile.txt.gz');

rstream 
  .pipe(gzip)
  .pipe(wstream)
  .on('finish', function () {
    console.log('done compressing');
  });
