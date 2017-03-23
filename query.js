 var data = require('./data.js');

const co = require("co");

function  doRequest(lang, section, coveragePercent, words, minimumShouldPercent) {
    
    const filter = [
        {term: {lang: lang}},
        {term: {sectionPercent90: section}},
        {range: {coverage: {gte: coveragePercent}}}
    ];

    const boolQuery =  {
        filter: filter,
    };


    if (words.length) {
        boolQuery.should = [];
        words.forEach(word => {
            boolQuery.should.push({
                term: {words: word}
            });
        });
        //boolQuery.minimum_should_match = Math.ceil(words.length / 2);
        if (minimumShouldPercent!=0)
        {
            boolQuery.minimum_should_match = Math.ceil(words.length * minimumShouldPercent / 100);
            console.log(boolQuery.minimum_should_match);
        }


    }
    // if (boolQuery.minimum_should_match==0)
    // {
    //     delete boolQuery.minimum_should_match;
    // }

/*
    console.log(JSON.stringify({
        index: "indexname",
        type: "paragraphs",
        from: 0,
        size: 20,
        body: {
            query: {
                bool: boolQuery,
            }
        },
    }, null, 2));
*/
    // const result = yield elasticsearch.count({
    //     index: "indexname",
    //     type: "paragraphs",
    //     body: {
    //         query: {
    //             bool: boolQuery,
    //         },
    //     },
    // });
    //
    //
    // return result.count;
    // return result.count;
}




//return Math.floor(Math.random() * 100);

doRequest("german", "B1.1-1", 45, ["hello", "world"],10);








