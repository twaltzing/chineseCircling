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
function addQA(question, answer, shortAnswer){
    QA.push(question, answer, shortAnswer);
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



// SET THE STATEMENT:
statement=mSubAdj + sp + mSub + sp + mTime + sp + mDate +sp+ mPlace +sp+ mModal +sp+ mGen +sp+ mMainVerb +sp+ mAspect +sp+ mNum +sp+ mMeas +sp+ mObjAdj +sp+ mObj +sp+ mTimes;

    // Yes question with ma
question = statement + ma + "?";
answer= statement;
shortAnswer=mMainVerb + mAspect;
addQA(question, answer, shortAnswer);

    // Yes question with V不V
    if (mMainVerb==="有") {
        neg="沒";
    }
question =mSubAdj + sp + mSub + sp + mTime + sp + mDate +sp+ mPlace +sp+ mModal +sp+ mGen +sp+ mMainVerb +sp+ neg + sp + mMainVerb + sp +mAspect +sp+ mNum +sp+ mMeas +sp+ mObjAdj +sp+ mObj +sp+ mTimes;
answer=statement;
shortAnswer=mMainVerb + mAspect;
addQA(question, answer, shortAnswer);



    ///No question: subject
if (mSub.length>0){
        //don't do for subjectless S
question = mSubAdj + sp + randomShadow(sSub) + sp + mTime + sp + mDate +sp+ mPlace +sp+ mModal +sp+ mGen +sp+ mMainVerb +sp+ mAspect +sp+ mNum +sp+ mMeas +sp+ mObjAdj +sp+ mObj +sp+ mTimes + sp + ma+"?";
answer=statement;
shortAnswer=mMainVerb + mAspect;

addQA(question, answer, shortAnswer);
}


//// Who? subject question
question = "誰" + sp + mTime + sp + mDate +sp+ mPlace +sp+ mModal +sp+ mGen +sp+ mMainVerb +sp+ mAspect +sp+ mNum +sp+ mMeas +sp+ mObjAdj +sp+ mObj +sp+ mTimes +"?";
answer = statement;
shortAnswer=mSubAdj + sp + mSub;
addQA(question, answer, shortAnswer);


///subject OR question
question = mSubAdj + sp + randomShadow(sSub) + sp +or+mSub+sp + mTime + sp + mDate +sp+ mPlace +sp+ mModal +sp+ mGen +sp+ mMainVerb +sp+ mAspect +sp+ mNum +sp+ mMeas +sp+ mObjAdj +sp+ mObj +sp+ mTimes + sp + ma+"?";
answer=statement;
shortAnswer=mSub;

addQA(question, answer, shortAnswer);

////No object question
Shadow=randomShadow(sObj);
question =mSubAdj + sp + mSub + sp + mTime + sp + mDate +sp+ mPlace +sp+ mModal +sp+ mGen +sp+ mMainVerb +sp+ mAspect +sp+ mNum +sp+ mMeas +sp+ Shadow +sp+ mTimes+sp+ma +"?";
answer=statement;
// deny=mSubAdj + sp + mSub + sp + mTime + sp + mDate +sp+ mPlace +sp+ neg+sp+mModal +sp+ mGen +sp+ mMainVerb +sp+ mNum +sp+ mMeas +sp+ Shadow +sp+ mTimes;
shortAnswer=mNum +sp+ mMeas +sp+ mObjAdj +sp+ mObj;

addQA(question, answer, shortAnswer);

//// Object or question
Shadow=randomShadow(sObj);

if(randomOrder()===1){
    var adjs= mObjAdj + mObj + sp + or + mObjAdj + Shadow; // put main adj first
} else {
    var adjs= mObjAdj + mObj + sp + or + mObjAdj + Shadow;
}

question =mSubAdj + sp + mSub + sp + mTime + sp + mDate +sp+ mPlace +sp+ mModal +sp+ mGen +sp+ mMainVerb +sp+ mAspect +sp+ mNum +sp+ mMeas +sp+ Shadow +sp+ or+ mNum +sp +mMeas +sp+ +mObjAdj+sp+ mObj + sp+ mTimes+"?";
answer=statement;
shortAnswer=mNum +sp +mMeas +sp+ mObjAdj + sp + mObj;

addQA(question, answer, shortAnswer);


///// Object WH question
question =mSubAdj + sp + mSub + sp + mTime + sp + mDate +sp+ mPlace +sp+ mModal +sp+ mGen +sp+ mMainVerb +sp+ mAspect +sp+ mNum +sp+ mMeas +sp+ "什麼"+sp+ mTimes+"?";
answer=statement;
shortAnswer=mNum+sp+mMeas+sp+mObjAdj+sp+mObj;

addQA(question, answer, shortAnswer);

//// What is Sub doing?
    if (mModal=""){
question =mSubAdj + sp + mSub + sp + mTime + sp + mDate +sp+ mPlace +sp+ mModal +sp+ mGen +sp+ "做 什麼?";
answer=statement;
shortAnswer=mVerb;
    }

//// Verb or question
Shadow=randomShadow(sMainVerb);
    
if(randomOrder()===1){
    var verbs= mMainVerb + mAspect + sp + or + sp + Shadow; // put main verb first
} else {
    var verbs= Shadow + mAspect + sp + or + sp + mMainVerb + mAspect;
}

question =mSubAdj + sp + mSub + sp + mTime + sp + mDate +sp+ mPlace +sp+ mModal +sp+ mGen +sp+ verbs +sp+ mAspect +sp+ mNum +sp+ mMeas +sp+ mObjAdj +sp+ mObj +sp+ mTimes+"?";
answer=statement;
shortAnswer=mMainVerb+sp+mAspect;

addQA(question, answer, shortAnswer);

///Verb no question
Shadow=randomShadow(sMainVerb);

question =mSubAdj + sp + mSub + sp + mTime + sp + mDate +sp+ mPlace +sp+ mModal +sp+ mGen +sp+ Shadow +sp+ mAspect +sp+ mNum +sp+ mMeas +sp+ mObjAdj +sp+ mObj +sp+ mTimes+ma +"?";
answer=statement;
shortAnswer=mMainVerb +sp + mAspect;

addQA(question, answer, shortAnswer);

///Object adj NO question
Shadow=randomShadow(sObjAdj);

question =mSubAdj + sp + mSub + sp + mTime + sp + mDate +sp+ mPlace +sp+ mModal +sp+ mGen +sp+ mMainVerb +sp+ mAspect +sp+ mNum +sp+ mMeas +sp+ Shadow+ sp + mObj +sp+ mTimes+ma +"?";

answer=statement;
shortAnswer=mNum +sp+ mMeas +sp+ mObjAdj +sp+ mObj;

addQA(question, answer, shortAnswer);

///Object adj OR question
Shadow=randomShadow(sObjAdj);
if(randomOrder()===1){
    var adjs= mObjAdj + mObj + sp + or + Shadow + mObj; // put main adj first
} else {
    var adjs= Shadow + mObj + sp + or + mObjAdj + mObj;
}

question =mSubAdj + sp + mSub + sp + mTime + sp + mDate +sp+ mPlace +sp+ mModal +sp+ mGen +sp+ mMainVerb +sp+ mAspect +sp+ mNum +sp+ mMeas +sp+ adjs +sp+ mTimes+ma +"?";

answer=statement;
shortAnswer=mNum +sp+ mMeas +sp+ mObjAdj +sp+ mObj;

addQA(question, answer, shortAnswer);



///////
sentenceSet=makeSentenceSet(statement, QAarray);
addSentenceToStory(sentenceSet);
console.log(story);



function randomShadow(array){
    let i=[Math.floor(Math.random()*(array).split(";").length)];
let shadow=array.split(";")[i];
    return shadow;
    }

} 




