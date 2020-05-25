
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
    var sub = document.getElementById("mSub").value;
    var time = document.getElementById("mTime").value;
    var date = document.getElementById("mDate").value;
    var place = document.getElementById("mPlace").value;
    var modal = document.getElementById("mModal").value;
    var gen = document.getElementById("mGen").value;
    var mainVerb= document.getElementById("mMainVerb").value;
    var num=document.getElementById("mNum").value;
    var meas=document.getElementById("mMeas").value;
    var obj=document.getElementById("mObj").value;
    var times = document.getElementById("mTimes").value;

    var sSub = document.getElementById("sSub").value;
    var sTime = document.getElementById("sTime").value;
    var sDate = document.getElementById("sDate").value;
    var sPlace = document.getElementById("sPlace").value;
    var sModal = document.getElementById("sModal").value;
    var sGen = document.getElementById("sGen").value;
    var sMainVerb= document.getElementById("sMainVerb").value;
    var sNum=document.getElementById("sNum").value;
    var sMeas=document.getElementById("sMeas").value;
    var sObj=document.getElementById("sObj").value;
    var sTimes = document.getElementById("sTimes").value;

    let s=" ";
    let neg="不";
    let or="還是";
    
//test data to avoid input
mSub="Bob";
mTime="八點半";
mDate="2007年";
mPlace="在阿根廷";
mModal="喜歡";
mGen="跟阿諾";
mMainVerb="吃"
// add le/guo
mNum="三點八";
mMeas="個";
mObj="披薩";
mTimes="九次";

sSub="Bobby;Cyndy;Marcia;Greg;Peter;Jan;Alice";
sTime="六點;星期二;唱完了歌以後";
sDate="星期三;昨天;前天晚上";
sPlace="在朋友的家;在超市;在廢水處理廠;在學校;在家";
sModal="會;能;喜歡;想要;將";
sGen="跟朋友;給爸爸;為了人民";
sMainVerb="買;送;破壞;踢";
// sNum="56;72.9;889;三分之一";
sObj="漢堡包;籃球;垃圾車;一群馬;巴黎";
sTimes="35次;兩次;一次";

    console.log("Random subject is: "+randomShadow(sSub));
    console.log("Random verb is: "+randomShadow(sMainVerb));
    console.log("Random object is: "+randomShadow(sObj));
    console.log("Random place is: "+randomShadow(sPlace));

// var sentenceQAs={"sentence",{"question",
//         {"answer","shortAnswer","threefer","type"}
//                 }
//             };


/// YES questions





}