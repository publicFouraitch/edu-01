
var data = require("./convertcsv.json");
var fs = require('fs')


var articleArr = data.article;
var wordArr = data.word;
var wclassArr = data.wclass;
 //console.log(articleArr);
for (var i = 0; i+1<articleArr.length; ++i) {
    for (var j = i; j + 1 < articleArr.length; ++j)
        if (articleArr[i] == articleArr[j+1] && wordArr[i] == wordArr[j + 1] && wclassArr[i] == wclassArr[j + 1])
        {
            fs.appendFile('./german/export.json', wordArr[i], 'utf8', function(err)
            {
                if(!err)
                    ;
                else
                    console.log("Error!");
            });

            fs.appendFile('./german/export.json', ',', 'utf8', function(err)
            {
                if(!err)
                    ;
                else
                    console.log("Error!");
            });

            fs.appendFile('./german/export.json', '\n', 'utf8', function(err)
            {
                if(!err)
                    ;
                else
                    console.log("Error!");
            });



            // console.log(articleArr[j+1]);
            // console.log(wordArr[j+1]);
            // console.log(wclassArr[j+1]);
            // console.log("---------------");
        }

}
