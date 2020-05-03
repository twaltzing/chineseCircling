
var dict = new Object();
dict["喜歡"]=["xǐHUĀN","likes"];
dict["吃"]=["CHĪ", "eats"];
dict["漢堡包"]=["HànbǎoBĀO", "hamburger"];
dict["披薩"]=["PĪSà", "pizza"];
dict["Bob"]=["Bob", "Bob"];
dict["想要"]=["xiǎngYào", "feels like"];


// console.log(dict);

//test data sentence
var sentenceOrig = "Bob 想要 吃 漢堡包";


var sentence=sentenceOrig.split(" ");

var searchToken = "";
var pinyinSentence=[];
var englishSentence=[];

for (i=0; i<sentence.length; i++){

    searchToken=sentence[i];
    //look up each word in the sentence
    console.log("Searching for " +searchToken);

 for(var key in dict) {
     var pinyin = dict[key][0];
     var english = dict[key][1];
     if (key===sentence[i]){
            //add a space and the next Pinyin word
        partToAdd=" "+pinyin;
        engToAdd=" "+english;

            //append it to the sentence
        pinyinSentence.push(partToAdd);
        englishSentence.push(engToAdd);
    }
  }
  let finalPinyin=pinyinSentence.join(" ");
  console.log(finalPinyin);
  let finalGloss=englishSentence.join(" ");
  console.log(finalGloss);
 }
