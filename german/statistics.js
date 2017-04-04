var data = require("./convertcsv.json")

console.log("--------------Task 1------------")
var article = data.article;
var haveArticle = 0;
var noArticle = 0;
for(var i=0; i<article.length; ++i)
{
    if(article[i] == "")
        ++noArticle
    else
        ++haveArticle;
}

console.log("The amount of the words that have article is " + haveArticle);
console.log("The amount of the words that have not article is " + noArticle);


console.log("---------------Task 2------------")
wclass = data.wclass;
wclassStr = [];
wclass.sort();


var countOfWclass = 0;
for(var i=0; i<wclass.length; ++i)
{
    if (wclass[i] != wclass[i + 1])
    {
        ++countOfWclass;
        wclassStr.push(wclass[i]);

    }
}


console.log("There are " + countOfWclass + " different wcalsses and they are`");

for(var i=0; i<wclassStr.length; ++i)
{
    console.log(wclassStr[i]);
}

var Amount = [];
for(var i=0; i<wclassStr.length; ++i)
{
    Amount[i] = 0;
}
for(var i=0; i<wclass.length; ++i)
    for(var j=0; j<wclassStr.length; ++j)
    {
        if (wclass[i] == wclassStr[j])
        {
            ++Amount[j];
        }
    }

for(var i=0; i<Amount.length; ++i)
{
    console.log("The amount of the words with " + wclassStr[i] + " wclass is " + Amount[i] );
}

console.log("--------Task 3---------");
var noPicture = 0;
var picture = data.picture;
for(var i=0; i<picture.length; ++i)
{
    if(picture[i] == "no")
        ++noPicture;
}

console.log("The amount of words that have no picture is " + noPicture);

var AmountPerWclass =[]
for(var i=0; i<wclassStr.length; ++i)
{
    AmountPerWclass[i] = 0;
}

for(var i=0; i<wclass.length; ++i)
    if(picture[i] == "no")
    {
        for(var j=0; j<wclassStr.length; ++j)
         {
            if(wclass [i] == wclassStr[j])
            {
                ++AmountPerWclass[j];
            }

         }
    }

    // console.log(AmountPerWclass);

var percent = [];

for(var i=0; i<Amount.length; ++i)
{
    percent[i] = AmountPerWclass[i]/Amount[i]*100;
}

for(var i=0; i<percent.length; ++i)
{
    percent[i] = Math.floor(percent[i]);
    console.log("The " + percent[i] + " % of the words with " + wclassStr[i] + " wclass have no picture.")
}