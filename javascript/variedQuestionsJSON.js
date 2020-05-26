    var mSubAdj = "";
    var mSub = "";
    var mTime = "";
    var mDate = "";
    var mPlace = "";
    var Mmodal = "";
    var mGen = "";
    var mMainVerb= "";
    var mAspect = "";
    var mNum="";
    var mMeas="";
    var mObjAdj = "";
    var mObj="";
    var mTimes ="";
    
    var mSubAdj = [];
    var sSub = [];
    var sTime = [];
    var sDate = [];
    var sPlace = [];
    var sModal = [];
    var sGen = [];
    var sMainVerb= [];
    var sAspect = [];
    var sNum= [];
    var sMeas= [];
    var sObjAdj= [];
    var sObj= [];
    var sTimes = [];




function makeQuestions(){

    // Selecting the input element and get its value 
    mSubAdj = document.getElementById("mSubAdj").value;
    mSub = document.getElementById("mSub").value;
    mTime = document.getElementById("mTime").value;
    mDate = document.getElementById("mDate").value;
    mPlace = document.getElementById("mPlace").value;
    mModal = document.getElementById("mModal").value;
    mGen = document.getElementById("mGen").value;
    mMainVerb= document.getElementById("mMainVerb").value;
    mAspect = document.getElementById("mAspect").value;
    mNum=document.getElementById("mNum").value;
    mMeas=document.getElementById("mMeas").value;
    mObjAdj = document.getElementById("mObjAdj").value;
    mObj=document.getElementById("mObj").value;
    mTimes = document.getElementById("mTimes").value;

    sSubAdj = document.getElementsByClassName("sSubAdj").value;
    sSub = document.getElementById("sSub").value;
    sTime = document.getElementById("sTime").value;
    sDate = document.getElementById("sDate").value;
    sPlace = document.getElementById("sPlace").value;
    sModal = document.getElementById("sModal").value;
    sGen = document.getElementById("sGen").value;
    sMainVerb= document.getElementById("sMainVerb").value;
    sAspect = document.getElementById("sAspect").value;
    sNum=document.getElementById("sNum").value;
    sMeas=document.getElementById("sMeas").value;
    sObjAdj=document.getElementById("sObjAdj").value;
    sObj=document.getElementById("sObj").value;
    sTimes = document.getElementById("sTimes").value;

    let s=" ";
    let neg="不";
    let or="還是";
    
//test data to avoid input
// mSubAdj="";
// mSub="Bob";
// mTime="八點半";
// mDate="2007年";
// mPlace="在阿根廷";
// mModal="喜歡";
// mGen="跟阿諾";
// mMainVerb="吃"
// mAspect="了"
// mNum="三點八";
// mMeas="個";
// mObjAdj="別人的";
// mObj="披薩";
// mTimes="九次";

sSubAdj="";
sSub="Bobby;Cyndy;Marcia;Greg;Peter;Jan;Alice";
sTime="六點;星期二;唱完了歌以後";
sDate="星期三;昨天;前天晚上";
sPlace="在朋友的家;在超市;在廢水處理廠;在學校;在家";
sModal="會;能;喜歡;想要;將";
sGen="跟朋友;給爸爸;為了人民";
sMainVerb="買;送;破壞;踢";
// sNum="56;72.9;889;三分之一";
sObjAdj="大的;小的;貴的;便宜的";
sObj="漢堡包;籃球;垃圾車;一群馬;巴黎";
sTimes="35次;兩次;一次";

// word space character 
sp =" ";
neg = "不";
mei="沒";
or="還是";
ma="嗎";

type="";

////set up the data 
let story = [];
let sentence=[];
let questionList=[];
let QA=[];
let QAarray=[];
let question="";
let answer="";
let shortAnswer="";

//add questions to the question/answer list for this sentence
function addQA(qtype, question, answer, shortAnswer){
    QA.push(qtype, question, answer, shortAnswer);
    QAarray.push(QA);
    QA=[];
    return QAarray;
}


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

function randomOrder(){
    var orderNo=0;
    var firstVerb=Math.floor((Math.random() * 10) + 1);
    if (firstVerb % 2 !==0){
        orderNo=1;
    }
    console.log(orderNo);
    return orderNo;
}

function stripSpaces(string){
    string  = string.replace(/\s{2,}/g, ' ');
    string=string.trim();
    return string;
}

// SET THE STATEMENT:
statement=mSubAdj + sp + mSub + sp + mTime + sp + mDate +sp+ mPlace +sp+ mModal +sp+ mGen +sp+ mMainVerb +sp+ mAspect +sp+ mNum +sp+ mMeas +sp+ mObjAdj +sp+ mObj +sp+ mTimes;
statement=stripSpaces(statement);
statement=statement.trim();
statement=statement+"。";

    // Yes question with ma



qtype="Yes-ma";
question=statement.substring(0, statement.length - 1) + sp + ma + "？";

answer= statement;
if(mAspect.length>0){
    shortAnswer=mAspect;
}  else {
shortAnswer=mMainVerb;
}

question=stripSpaces(question);
answer=stripSpaces(answer);
shortAnswer=stripSpaces(shortAnswer);
addQA(qtype, question, answer, shortAnswer);

    // Yes question with V不V
qtype="YES-VbuV";

    if (mMainVerb==="有") {
        neg="沒";
    } 

    if (mPlace !=="") {
question = mSubAdj + sp + mSub + sp + mTime + sp + mDate +sp+ "在 不"+ mPlace +sp+ mModal +sp+ mGen +sp+ mMainVerb  + sp +mAspect +sp+ mNum +sp+ mMeas +sp+ mObjAdj +sp+ mObj +sp+ mTimes;
shortAnswer="在";
    } else {
question =mSubAdj + sp + mSub + sp + mTime + sp + mDate +sp+ mPlace +sp+ mModal +sp+ mGen +sp+ mMainVerb +sp+ neg + sp + mMainVerb + sp +mAspect +sp+ mNum +sp+ mMeas +sp+ mObjAdj +sp+ mObj +sp+ mTimes;

answer=statement;
shortAnswer=mMainVerb + mAspect;
    }
question=stripSpaces(question);
answer=stripSpaces(answer);
shortAnswer=stripSpaces(shortAnswer);
addQA(qtype, question, answer, shortAnswer);



    ///No question: subject
qtype="";
 
if (mSub.length>0){
    qtype="NO-subject";
        //don't do for subjectless S
question = mSubAdj + sp + randomShadow(sSub) + sp + mTime + sp + mDate +sp+ mPlace +sp+ mModal +sp+ mGen +sp+ mMainVerb +sp+ mAspect +sp+ mNum +sp+ mMeas +sp+ mObjAdj +sp+ mObj +sp+ mTimes + sp + ma+"?";
answer=statement;
shortAnswer=mMainVerb + mAspect;

question=stripSpaces(question);
answer=stripSpaces(answer);
shortAnswer=stripSpaces(shortAnswer);
addQA(qtype, question, answer, shortAnswer);
}


//// Who? subject question
qtype="";
 
if (mSub.length>0){
qtype="QW-subject";
question = "誰" + sp + mTime + sp + mDate +sp+ mPlace +sp+ mModal +sp+ mGen +sp+ mMainVerb +sp+ mAspect +sp+ mNum +sp+ mMeas +sp+ mObjAdj +sp+ mObj +sp+ mTimes +"?";
answer = statement;
shortAnswer=mSubAdj + sp + mSub;
question=stripSpaces(question);
answer=stripSpaces(answer);
shortAnswer=stripSpaces(shortAnswer);
addQA(qtype, question, answer, shortAnswer);
}

///subject OR question
qtype="";
 
if (mSub.length>0){

qtype="OR-subject";
question = mSubAdj + sp + randomShadow(sSub) + sp +or+mSub+sp + mTime + sp + mDate +sp+ mPlace +sp+ mModal +sp+ mGen +sp+ mMainVerb +sp+ mAspect +sp+ mNum +sp+ mMeas +sp+ mObjAdj +sp+ mObj +sp+ mTimes+"？";
answer=statement;
shortAnswer=mSub;

question=stripSpaces(question);
answer=stripSpaces(answer);
shortAnswer=stripSpaces(shortAnswer);
addQA(qtype, question, answer, shortAnswer);
}

////No object question
qtype="";
 
if (mObj.length>0){

qtype="NO-object";
Shadow=randomShadow(sObj);
question =mSubAdj + sp + mSub + sp + mTime + sp + mDate +sp+ mPlace +sp+ mModal +sp+ mGen +sp+ mMainVerb +sp+ mAspect +sp+ mNum +sp+ mMeas +sp+ Shadow +sp+ mTimes+sp+ma +"?";
answer=statement;
// deny=mSubAdj + sp + mSub + sp + mTime + sp + mDate +sp+ mPlace +sp+ neg+sp+mModal +sp+ mGen +sp+ mMainVerb +sp+ mNum +sp+ mMeas +sp+ Shadow +sp+ mTimes;
shortAnswer=mNum +sp+ mMeas +sp+ mObjAdj +sp+ mObj;

question=stripSpaces(question);
answer=stripSpaces(answer);
shortAnswer=stripSpaces(shortAnswer);
addQA(qtype, question, answer, shortAnswer);
}

//// Object or question
qtype="";
 
if (mObj.length>0){
qtype="OR-object";
Shadow=randomShadow(sObj);

if(randomOrder()===1){
    var adjs= mObjAdj + mObj + sp + or + mObjAdj + Shadow; // put main adj first
} else {
    var adjs= mObjAdj + mObj + sp + or + mObjAdj + Shadow;
}

question =mSubAdj + sp + mSub + sp + mTime + sp + mDate +sp+ mPlace +sp+ mModal +sp+ mGen +sp+ mMainVerb +sp+ mAspect +sp+ mNum +sp+ mMeas +sp+ Shadow +sp+ or+ mNum +sp +mMeas +sp+ +mObjAdj+sp+ mObj + sp+ mTimes+"？";
answer=statement;
shortAnswer=mNum +sp +mMeas +sp+ mObjAdj + sp + mObj;

question=stripSpaces(question);
answer=stripSpaces(answer);
shortAnswer=stripSpaces(shortAnswer);
addQA(qtype, question, answer, shortAnswer);
}

///// Object WH question
qtype="";
 
if (mObj.length>0){
qtype="WH-object";
question =mSubAdj + sp + mSub + sp + mTime + sp + mDate +sp+ mPlace +sp+ mModal +sp+ mGen +sp+ mMainVerb +sp+ mAspect +sp+ mNum +sp+ mMeas +sp+ "什麼"+sp+ mTimes+"?";
answer=statement;
shortAnswer=mNum+sp+mMeas+sp+mObjAdj+sp+mObj;

question=stripSpaces(question);
answer=stripSpaces(answer);
shortAnswer=stripSpaces(shortAnswer);
addQA(qtype, question, answer, shortAnswer);
}

//// What is Sub doing?
qtype="WH-Verb";

///may need a case for Zai sentences, no main verb at all, as distinct from sentences with main verb and location
    //if no modal and not a "you" sentence
    if (mModal=""&& mMainVerb !=="有"){
question =mSubAdj + sp + mSub + sp + mTime + sp + mDate +sp+ mPlace +sp+ mModal +sp+ mGen +sp+ "做 什麼?";
answer=statement;
shortAnswer=mVerb;
    }

    console.log(mMainVerb !=="有" ||( mPlace.length>0 && mMainVerb.length>0));
//// Verb or question
qtype="";
 
if (mMainVerb !=="有" && (mPlace.length>0 && mMainVerb.length>0)){
qtype="OR-verb";
Shadow=randomShadow(sMainVerb);
    
if(randomOrder()===1){
    var verbs= mMainVerb + mAspect + sp + or + sp + Shadow; // put main verb first
} else {
    var verbs= Shadow + mAspect + sp + or + sp + mMainVerb + mAspect;
}

question =mSubAdj + sp + mSub + sp + mTime + sp + mDate +sp+ mPlace +sp+ mModal +sp+ mGen +sp+ verbs +sp+ mAspect +sp+ mNum +sp+ mMeas +sp+ mObjAdj +sp+ mObj +sp+ mTimes+"？";
answer=statement;
shortAnswer=mMainVerb+sp+mAspect;

question=stripSpaces(question);
answer=stripSpaces(answer);
shortAnswer=stripSpaces(shortAnswer);
addQA(qtype, question, answer, shortAnswer);
}


///Verb no question
qtype="";
 
if (mMainVerb !=="有"){

qtype="NO-verb";
Shadow=randomShadow(sMainVerb);

question =mSubAdj + sp + mSub + sp + mTime + sp + mDate +sp+ mPlace +sp+ mModal +sp+ mGen +sp+ Shadow +sp+ mAspect +sp+ mNum +sp+ mMeas +sp+ mObjAdj +sp+ mObj +sp+ mTimes+ma +"?";
answer=statement;
shortAnswer=mMainVerb +sp + mAspect;

question=stripSpaces(question);
answer=stripSpaces(answer);
shortAnswer=stripSpaces(shortAnswer);
addQA(qtype, question, answer, shortAnswer);
}

///Object adj NO question
qtype="";
 
if (mObjAdj.length>0){
qtype="NO-object adj";
Shadow=randomShadow(sObjAdj);

question =mSubAdj + sp + mSub + sp + mTime + sp + mDate +sp+ mPlace +sp+ mModal +sp+ mGen +sp+ mMainVerb +sp+ mAspect +sp+ mNum +sp+ mMeas +sp+ Shadow+ sp + mObj +sp+ mTimes+ma +"?";

answer=statement;
shortAnswer=mNum +sp+ mMeas +sp+ mObjAdj +sp+ mObj;

question=stripSpaces(question);
answer=stripSpaces(answer);
shortAnswer=stripSpaces(shortAnswer);
addQA(qtype, question, answer, shortAnswer);
}

///Object adj OR question
qtype="";
 
if (mObjAdj.length>0){
qtype="OR-object adj";
Shadow=randomShadow(sObjAdj);
if(randomOrder()===1){
    var adjs= mObjAdj + mObj + sp + or + Shadow + mObj; // put main adj first
} else {
    var adjs= Shadow + mObj + sp + or + mObjAdj + mObj;
}

question =mSubAdj + sp + mSub + sp + mTime + sp + mDate +sp+ mPlace +sp+ mModal +sp+ mGen +sp+ mMainVerb +sp+ mAspect +sp+ mNum +sp+ mMeas +sp+ adjs +sp+ mTimes+"？";

answer=statement;
shortAnswer=mNum +sp+ mMeas +sp+ mObjAdj +sp+ mObj;

question=stripSpaces(question);
answer=stripSpaces(answer);
shortAnswer=stripSpaces(shortAnswer);
addQA(qtype, question, answer, shortAnswer);
}

/////// Zai location question
qtype="WH-where";
if(mPlace !==""){
question = mSubAdj + sp + mSub + sp + mTime + sp + mDate +sp+ "在 哪兒" +sp+ mModal +sp+ mGen +sp+ mMainVerb +sp+ mAspect +sp+ mNum +sp+ mMeas +sp+ mObjAdj +sp+ mObj +sp+ mTimes + "？";

answer = statement;
shortAnswer = mPlace;

question=stripSpaces(question);
answer=stripSpaces(answer);
shortAnswer=stripSpaces(shortAnswer);
addQA(qtype, question, answer, shortAnswer);
}






// console.log(mGen[0]);
// genStarter=(mGen[0]);


///// With whom question

qtype="";
 
if (mGen.length>0){

switch (mGen[0]){
    case "跟":
        insert="跟 誰";
        break;
    case "給":
        insert="給 誰";
        break;
     case "為":
         insert="為 誰";
         break;
}

    qtype="WH-with whom";
question = mSubAdj + sp + mSub + sp + mTime + sp + mDate +sp+ mPlace +sp+ mModal +sp+ insert +sp+ mMainVerb +sp+ mAspect +sp+ mNum +sp+ mMeas +sp+ mObjAdj +sp+ mObj +sp+ mTimes;
// console.log("This is a 跟 sentence!");

answer= statement;
shortAnswer = mGen;

question=stripSpaces(question);
answer=stripSpaces(answer);
shortAnswer=stripSpaces(shortAnswer);
addQA(qtype, question, answer, shortAnswer);
}
//////// How-many objects?

if (mNum !=="" && mMeas !==""){

question =mSubAdj + sp + mSub + sp + mTime + sp + mDate +sp+ mPlace +sp+ mModal +sp+ mGen +sp+ mMainVerb +sp+ mAspect +sp+ "幾" +sp+ mMeas +sp+ mObjAdj +sp+ mObj +sp+ mTimes;
answer=statement;
shortAnswer=mNum + sp + mMeas;

question=stripSpaces(question);
answer=stripSpaces(answer);
shortAnswer=stripSpaces(shortAnswer);
addQA(qtype, question, answer, shortAnswer);
}
///////////



/////// Make the story one sentence longer
sentenceSet=makeSentenceSet(statement, QAarray);
addSentenceToStory(sentenceSet);
console.log(story);

var JSONdata = JSON.stringify(story);
console.log(JSONdata);


function randomShadow(array){
    let i=[Math.floor(Math.random()*(array).split(";").length)];
let shadow=array.split(";")[i];
    return shadow;
    }

} 




