var cedict = require('cedict-lookup');
var dict = cedict.loadTraditional('javascript/cedict_ts.u8');
// var dict = cedict.loadSimplified('path/to/your/cedict_ts.u8');

console.log(
    dict.getMatch('你好')
);



//test data sentence
var sentenceOrig = "Bob 想要 吃 漢堡包";


var sentence=sentenceOrig.split(" ");

var searchToken = "";
var pinyinSentence=[];

for (i=0; i<sentence.length; i++){

    searchToken=sentence[i];
    //look up each word in the sentence
    console.log("Searching for " +searchToken);


    console.log(dict.getMatch(searchToken));

            //add a space and the next Pinyin word
        // partToAdd=" "+pinyin;
        // console.log("Add this: "+partToAdd);
        //     //append it to the sentence
        // pinyinSentence.push(partToAdd);
    }
//   }
//   let finalPinyin=pinyinSentence.join(" ");
//   console.log(finalPinyin);

