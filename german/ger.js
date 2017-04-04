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
    wclassArr.sort();

    var dupArr = {
        "article": [],
        "word": [],
        "wclass": []
    };
    var pictureArr = data.picture;
    for (var i = 0; i < articleArr.length - 1; ++i) {
        for (var j = i; j < articleArr.length - 1; ++j) {
            if (articleArr[i] == articleArr[j + 1] && wordArr[i] == wordArr[j + 1] && wclassArr[i] == wclassArr[j + 1]) {
                dupArr.article.push(articleArr[i]);
                dupArr.word.push(wordArr[i]);
                dupArr.wclass.push(wclassArr[i]);
            }
        }

    }

    const jsonString = JSON.stringify(dupArr);

    fs.writeFile('./german/testinfo.json', jsonString, 'utf-8', function(err) {
        if (!err)
            ;
        else
            console.log("Error!");
    });
    var articleNumber = 0;
    var artNumber = 0;

    var picturenumber = 0;
//-----------------------------------
    for (var i = 0; i < articleArr.length; ++i) {

        if (articleArr[i] == "") {

            articleNumber++;

        } else {
            artNumber++;
        }
        if (pictureArr[i] == "") {

            picturenumber++;

        }
    }
    var wclassNumbers = 0;
    wclassNames = [];

    for (var i = 0; i < wclassArr.length; ++i) {
        if (wclassArr[i] != wclassArr[i + 1]) {

            wclassNumbers++;
            wclassNames[i]= wclassArr[i]

        }
    }

    wclassNames.sort();
    var testt=0;
    for (var i = 0; i < wclassNames.length; ++i)
    {

        for (var j = 0; j < wclassArr.length; ++j)
        {
           if(wclassNames[i]==wclassArr[j])
           {
               testt++
           }
        }

    }


    console.log("unenq" + " " + artNumber + " " + "kexc arjeq");
    console.log("irakan arjeqneri qanakn e" + " " + articleNumber);
    console.log("nkar chunen" + " " + picturenumber);




    console.log("tarber wclass nerov ka " + " " + wclassNumbers + " " + "bar");
    console.log( wclassNames)

    // console.log("baren " + " en" +" " + wclassNames);
    //
    // console.log("amen  bari " + " qanak" +" " + testt);
    //
    //






    var nounNumber=0;
    var noNumber=0;
    var ollNumber=0;
    var percent=0;


   // percent=ollNumber*noNumber/100;


    for (var i = 0; i < wclassArr.length; ++i)
    {
        if(pictureArr[i]=="no"&& wclassArr[i]=="noun")
        {
            nounNumber++
        }
        else if(pictureArr[i]!="no"&& wclassArr[i]=="noun")

        {
            noNumber++
        }


    }
    ollNumber=nounNumber+noNumber;
    percent=nounNumber/ollNumber*100
    console.log( "picture no a"+nounNumber);
    console.log("picture chi"+noNumber);
    console.log("picture tvyalneri gumar"+ollNumber);
    console.log("wclass == noun -i mot picture==no tokos"+percent);
