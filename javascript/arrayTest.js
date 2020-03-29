const button = document.getElementById('make');
button.addEventListener('click', testArrayInput);



function testArrayInput (){


const sentence=document.getElementById('sentence').value;

const shadow=document.getElementById('shadow').value;


//find out what elements are in the sentence
// var hasSub = document.getElementById("sub").checked;
// console.log(hasSub); subject is required
var hasModal = document.getElementById("mod").checked;
var hasTime = document.getElementById("time").checked;
var hasLoc = document.getElementById("loc").checked;
var hasGenGei = document.getElementById("geigen").checked;
// var hasMainVerb = document.getElementById("mainVerb").checked; mainverb is required
var hasObj = document.getElementById("obj").checked;

var wantsThree = document.getElementById("threefer").checked;

//remove trailing punctuation from sentences
     var sentenceBare=sentence.slice(0,sentence.length-1);
     var shadowBare=shadow.slice(0,shadow.length-1);

     //////
     ///FOR TESTING ONLY
     //////
     
     shadowBare="SubS,,TimeS,LocS,GenGeiS,MainVerbS,ObjS"

//store chunks in an array
oSentArr=sentence.trim().split(" ");
shSentArr=shadow.trim().split(" ");

//make variables for different chunks
var sub="";
var mod="";
var time="";
var loc="";
var gengei="";
var mainVerb="";
var obj="";

var subS="";
var modS="";
var timeS="";
var locS="";
var gengeiS="";
var mainVerbS="";
var objS="";

// set variables equal to actual values in sentences
    sub=oSentArr[0]; // all sentences have a subject

//generate a random shadow subject
let arrShSub=['George','Obama','Abraham Lincoln','Karen','RinTinTin','Batman','蔣介石','Sponge Bob'];

minimum=0;
maximum=arrShSub.length-1;
var randomnumberShSub = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

    subS=arrShSub[randomnumberShSub];

  var ind=1;  
     if (hasModal === true){
        mod=oSentArr[1];
        modS=shSentArr[1];
        ind++; //go to next element in array
    
        }
    
// else if there's no modal, ind doesn't increment and the element is placed into the next variable instead
        
    
    if (hasTime===true){
        time=oSentArr[ind];
        timeS=shSentArr[ind];
        ind++;
        }
        

        if (hasLoc===true){
        loc=oSentArr[ind];
        locS=shSentArr[ind];
        ind++;
        }   

    if (hasGenGei===true){     
        gengei=oSentArr[ind];
        gengeiS=shSentArr[ind];
        ind++;
        }
    
        mainVerb=oSentArr[ind]; //all sentences have a main verb
        mainVerbS=shSentArr[ind];
        ind++;


//generate a random shadow object
        let arrShObj=['蘋果','自行車','漢堡包','沙拉','衣服','錢','披薩','土撥鼠','阿根廷'];
        
        minimum=0;
        maximum=arrShObj.length-1;
        var randomnumberShObj = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

    if (hasObj===true){
        obj=oSentArr[ind];
        objS=arrShObj[randomnumberShObj];
        }


console.log("Subject[0] is:" +sub);
console.log("Shadow subject is: "+subS)
console.log("Modal[1] is:" + mod);
console.log("Time[2] is:" + time);
console.log("Loc[3] is: "+ loc);
console.log("GenGei[4] is: "+ gengei);
console.log("MainVerb[5] is: "+mainVerb);
console.log("Object[6] is:" + obj);



console.log(subS + mod + mainVerb + objS+".");


}