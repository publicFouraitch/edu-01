
var data = require("./convertcsv.json");
var fs = require('fs');

// var csv = require('fast-csv');
//
// fs.createReadStream('german.csv')
//     .pipe(csv())
//     .on('data', function(data){
//         console.log(data);
//     })
//     .on('end', function(data){
//         console.log('Read finished');
//     });


var articleArr = data.article;
var wordArr = data.word;
var wclassArr = data.wclass;
var dupArr = {"article":[], "word":[], "wclass": []};
var pictureArr=data.picture;
for (var i = 0; i < articleArr.length - 1; ++i)
{
    for (var j = i; j  < articleArr.length - 1; ++j)
    {
        if (articleArr[i] == articleArr[j + 1] && wordArr[i] == wordArr[j + 1] && wclassArr[i] == wclassArr[j + 1]) {
            dupArr.article.push(articleArr[i]);
            dupArr.word.push(wordArr[i]);
            dupArr.wclass.push(wclassArr[i]);
        }
    }

}

const jsonString = JSON.stringify(dupArr);

fs.writeFile('./german/testinfo.json', jsonString, 'utf-8', function(err)
{
    if(!err)
        ;
    else
        console.log("Error!");
});
var articleNumber=0;
var artNumber=0;

var picturenumber=0;

for (var i = 0; i < articleArr.length; ++i)
{

    if(articleArr[i]=="")
    {

        articleNumber++;

    }
    else
    {
        artNumber++;
    }
    if(pictureArr[i]=="")
    {

        picturenumber++;

    }


}
console.log("unenq"+" " +artNumber +" "+"kexc arjeq");
console.log("irakan arjeqneri qanakn e"+" " +articleNumber );
console.log("nkar chunen"+" " +picturenumber);
