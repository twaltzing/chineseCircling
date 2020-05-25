
   // if main verb is 有 change negation to 沒
function  makeNegMei() {
    if (mainVerb="有") {
        neg="沒";
        return neg;
        }
    }





function randomShadow(list){
    splitList=list.toString().split(";");
    console.log("splitList is "+splitList);
    var randomShadow = splitList[Math.floor(Math.random()*splitList.length)];


    return randomShadow;
}
   

function makeQuestions(){

    // Selecting the input element and get its value 
    var subAdj = document.getElementById("mSubAdj").value;
    var sub = document.getElementById("mSub").value;
    var time = document.getElementById("mTime").value;
    var date = document.getElementById("mDate").value;
    var place = document.getElementById("mPlace").value;
    var modal = document.getElementById("mModal").value;
    var gen = document.getElementById("mGen").value;
    var mainVerb= document.getElementById("mMainVerb").value;
    var mAspect = document.getElementById("mAspect").value;
    var num=document.getElementById("mNum").value;
    var meas=document.getElementById("mMeas").value;
    var objAdj = document.getElementById("mObjAdj").value;
    var obj=document.getElementById("mObj").value;
    var times = document.getElementById("mTimes").value;

    var mSubAdj = document.getElementsByClassName("sSubAdj").value;
    var sSub = document.getElementById("sSub").value;
    var sTime = document.getElementById("sTime").value;
    var sDate = document.getElementById("sDate").value;
    var sPlace = document.getElementById("sPlace").value;
    var sModal = document.getElementById("sModal").value;
    var sGen = document.getElementById("sGen").value;
    var sMainVerb= document.getElementById("sMainVerb").value;
    var sAspect = document.getElementById("sAspect").value;
    var sNum=document.getElementById("sNum").value;
    var sMeas=document.getElementById("sMeas").value;
    var sObjAdj=document.getElementById("sObjAdj").value;
    var sObj=document.getElementById("sObj").value;
    var sTimes = document.getElementById("sTimes").value;

    let s=" ";
    let neg="不";
    let or="還是";
    
//test data to avoid input
mSubAdj="";
mSub="Bob";
mTime="八點半";
mDate="2007年";
mPlace="在阿根廷";
mModal="喜歡";
mGen="跟阿諾";
mMainVerb="吃"
mAspect="了"
mNum="三點八";
mMeas="個";
mObjAdj="";
mObj="披薩";
mTimes="九次";

sSubAdj="";
sSub="Bobby;Cyndy;Marcia;Greg;Peter;Jan;Alice";
sTime="六點;星期二;唱完了歌以後";
sDate="星期三;昨天;前天晚上";
sPlace="在朋友的家;在超市;在廢水處理廠;在學校;在家";
sModal="會;能;喜歡;想要;將";
sGen="跟朋友;給爸爸;為了人民";
sMainVerb="買;送;破壞;踢";
// sNum="56;72.9;889;三分之一";
sObjAdj="";
sObj="漢堡包;籃球;垃圾車;一群馬;巴黎";
sTimes="35次;兩次;一次";

// word space character 
sp =" ";
neg = "不";
mei="沒";
or="還是";
ma="嗎";

    // console.log("Random subject is: "+randomShadow(sSub));
    // console.log("Random verb is: "+randomShadow(sMainVerb));
    // console.log("Random object is: "+randomShadow(sObj));
    // console.log("Random place is: "+randomShadow(sPlace));









////set up the data 
let story = [];
let sentence=[];
let questionList=[];
let QA=[];
let QAarray=[];

//add questions to the question/answer list for this sentence
function addQA(question, answer, shortAnswer){
    QA.push(question, answer, shortAnswer);
    QAarray.push(QA);
    QA=[];
    return QAarray;
}

statement="This sucks.";
Question="Is it?";
Answer="No way!";
ShortAnswer="Nope!";
addQA(Question,Answer,ShortAnswer);


Question="Will she?";
Answer="For sure!";
ShortAnswer="Yep";
addQA(Question,Answer,ShortAnswer);


sentenceSet=makeSentenceSet(statement, QAarray);
addSentenceToStory(sentenceSet);


function makeSentenceSet(statement, QA){
    sentenceSet=[]
sentenceSet.push(statement, QA);
    QA=[];
    QAarray=[];
return sentenceSet;
}

function addSentenceToStory(sentenceSet){
    story.push(sentenceSet);
    return story;
}

statement="Bob thinks so too.";
addQA("q1","a1","a1a");
addQA("q2", "a2", "a2a");
sentenceSet=makeSentenceSet(statement, QAarray);
addSentenceToStory(sentenceSet);




statement=mSub + sp + mMainVerb + sp + mObj;
Question=mSub + sp + mMainVerb+ sp + mObj + ma;
Answer=mSub + sp + mMainVerb + sp + mObj;
ShortAnswer=mMainVerb;

addQA(Question,Answer,ShortAnswer);

sentenceSet=makeSentenceSet(statement, QAarray);
addSentenceToStory(sentenceSet);

console.log("This is the whole story: "+story);


// story.push(makeSentence("y",[[9,8,7],[3,2,1]]));

console.log(story);







// ///adding a sentence
// var x=addSentence("Bob is a doofus.", ["Is he?", "What is he?", "Who's a doofus?"], 
//     [ ["Yes", "Yes, he is"],
//         ["A doofus.", "Bob's a doofus."],
//         ["Bob.", "Bob's a doofus."]
//     ]
//     );

//     var y=addSentence("Jayne is an idiot.", ["Is she?", "What is she?", "Who's an idiot?"], 
//     [ ["Yes", "Yes, she is"],
//         ["An idiot.", "Jane's an idiot."],
//         ["Jane.", "Jane's an idiot."]
//     ]
//     );    



} 




