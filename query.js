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
        boolQuery.minimum_should_match = Math.ceil(words * minimumShouldPercent / 100);
    }

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
    
    // const result = yield elasticsearch.search({
    //     index: "indexname",
    //     type: "paragraphs",
    //     from: 0,
    //     size: 20,
    //     body: {
    //         query: {
    //             bool: boolQuery,
    //         },
    //         sort: [
    //             {_score: "desc"},
    //             {coverage: "desc"},
    //             {maxMatchSectionRate: "desc"},
    //         ],
    //     },
    // });

}
doRequest("english", "A1.1-1", 80, ["hello"], 10);
