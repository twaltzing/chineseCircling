
var dict = new Object();
dict["喜歡"]="xǐHUĀN";
dict["吃"]="CHĪ";
dict["漢堡包"]="HànbǎoBĀO";
dict["披薩"]="PĪSà";
dict["Bob"]="Bob";
dict["想要"]="xiǎngYào";


// console.log(dict);

//test data sentence
var sentenceOrig = "Bob 想要 吃 漢堡包";


var sentence=sentenceOrig.split(" ");

var searchToken = "";
var pinyinSentence=[];

for (i=0; i<sentence.length; i++){

    searchToken=sentence[i];
    //look up each word in the sentence
    console.log("Searching for " +searchToken);

 for(var key in dict) {
     var pinyin = dict[key];
     if (key===sentence[i]){
            //add a space and the next Pinyin word
        partToAdd=" "+pinyin;
        console.log("Add this: "+partToAdd);
            //append it to the sentence
        pinyinSentence.push(partToAdd);
    }
  }
  let finalPinyin=pinyinSentence.join(" ");
  console.log(finalPinyin);
 }
