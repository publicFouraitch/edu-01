
var test = require("./german.csv");

var fs = require("fs");
var parse = require('csv-parse');



var File="german.csv";
File = File.replace( /,/g, "" );

var parser = parse({delimiter: ','}, function (err, data) {
    async.eachSeries(data, function (line, callback) {

        doSomething(line).then(function() {

            callback();
        });
    });
});
fs.createReadStream(File).pipe(parser);

// var str = "a,d,k";
// str = str.replace( /,/g, "" );
// console.log(str)