const button = document.getElementById('make');
button.addEventListener('click', makeQuestions);


function makeQuestions() {

    const sentence=document.getElementById('sentence').value;

    const shadow=document.getElementById('shadow').value;
    
    
    //find out what elements are in the sentence
    
    var hasModal = document.getElementById("mod").checked;
    var hasTime = document.getElementById("time").checked;
    var hasLoc = document.getElementById("loc").checked;
    var hasGenGei = document.getElementById("geigen").checked;
    var hasObj = document.getElementById("obj").checked;
    
    // read user's desired options
    var wantsThreefer = document.getElementById("wantsThreefer").checked;
    var displayAnswers = document.getElementById("displayAnswers").checked;
    
    
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
    // set shadow subject = to random shadow subject
    subS=arrShSub[randomnumberShSub];
    
      var ind=1;  
         if (hasModal === true){
            mod=oSentArr[1];
            modS=shSentArr[1];
            ind++; //go to next element in array
            }
        
    // else if there's no modal, ind doesn't increment and the element is placed into the next variable instead
            
        
    if (hasLoc===true){
        loc=oSentArr[ind];
        locS=shSentArr[ind];
        ind++;
        }    

    
    if (hasTime===true){
            time=oSentArr[ind];
            timeS=shSentArr[ind];
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
    console.log("Modal[1] is:" + mod);
    console.log("Time[2] is:" + time);
    console.log("Loc[3] is: "+ loc);
    console.log("GenGei[4] is: "+ gengei);
    console.log("MainVerb[5] is: "+mainVerb);
    console.log("Object[6] is:" + obj);
    


//set grammar constants
const ma="吗？";
const bu=" 不";
const le="了 ";
const meiyou="没有 ";
const mei="没";
const sp=" ";
const haishi="还是 ";



////////////////////////
/// Yes -ma question ///
////////////////////////

question = sub+sp+mod+sp+time+sp+loc+sp+gengei+sp+mainVerb+sp+obj+ma;
shortAnswer=mod;
longAnswer=sentence;

    let questionDiv = document.createElement('div');
    questionDiv.classList.add('questionOutput');
    questionDiv.class = 'questionOutput';
    questionDiv.innerHTML = question;
    document.body.appendChild(questionDiv);

        if (displayAnswers===true){
    let shortAnsDiv = document.createElement('div');
    shortAnsDiv.classList.add('shortAnsOutput');
    shortAnsDiv.class = 'shortAnsOutput';
    shortAnsDiv.innerHTML = shortAnswer;
    document.body.appendChild(shortAnsDiv);

    let longAnsDiv = document.createElement('div');
    longAnsDiv.classList.add('longAnsOutput');
    longAnsDiv.class = 'longAnsOutput';
    longAnsDiv.innerHTML = longAnswer;
    document.body.appendChild(longAnsDiv);
        }
            
        

////////////////////////
// Sub - NO - shadow ///
////////////////////////

question = subS+sp+mod+sp+time+sp+loc+sp+mainVerb+sp+obj+ma;
shortAnswer = bu+sp+mod;
longAnswer = subS+bu+mod+sp+mainVerb+sp+obj;
threefer = subS+bu+mod+sp+mainVerb+sp+obj+", "+sub+sp+mod+sp+mainVerb+sp+obj+"。"

// Output the question set

        questionDiv = document.createElement('div');
        questionDiv.classList.add('questionOutput');
        questionDiv.class = 'questionOutput';
        questionDiv.innerHTML = question;
        document.body.appendChild(questionDiv);

            if (displayAnswers===true){
        shortAnsDiv = document.createElement('div');
        shortAnsDiv.classList.add('shortAnsOutput');
        shortAnsDiv.class = 'shortAnsOutput';
        shortAnsDiv.innerHTML = shortAnswer;
        document.body.appendChild(shortAnsDiv);

        longAnsDiv = document.createElement('div');
        longAnsDiv.classList.add('longAnsOutput');
        longAnsDiv.class = 'longAnsOutput';
        longAnsDiv.innerHTML = longAnswer;
        document.body.appendChild(longAnsDiv);
            }
        if (wantsThreefer===true){
            let threeferDiv = document.createElement('div');
            threeferDiv.classList.add('threeferOutput');
            threeferDiv.class = 'threeferOutput';
            threeferDiv.innerHTML = threefer;
            document.body.appendChild(threeferDiv);
                    }
    



//////////////////////
// Obj- NO  shadow ///
//////////////////////

if (hasObj===true){

question = sub+sp+time+sp+loc+sp+mod+sp+mainVerb+sp+objS+ma;
shortAnswer=bu + sp + mainVerb;
longAnswer=sub+sp+bu+sp+mod + mainVerb+sp+objS;
threefer=longAnswer + ", "+sub +sp+mainVerb+ sp + obj+", "+longAnswer;
    console.log(threefer);
}
if (hasModal===true){
shortAnswer=bu + sp +mod;
longAnswer = sub+sp+bu+mod+sp+mainVerb+sp+objS;
    } 


// Output the question set

        questionDiv = document.createElement('div');
        questionDiv.classList.add('questionOutput');
        questionDiv.class = 'questionOutput';
        questionDiv.innerHTML = question;
        document.body.appendChild(questionDiv);

            if (displayAnswers===true){
        shortAnsDiv = document.createElement('div');
        shortAnsDiv.classList.add('shortAnsOutput');
        shortAnsDiv.class = 'shortAnsOutput';
        shortAnsDiv.innerHTML = shortAnswer;
        document.body.appendChild(shortAnsDiv);

        longAnsDiv = document.createElement('div');
        longAnsDiv.classList.add('longAnsOutput');
        longAnsDiv.class = 'longAnsOutput';
        longAnsDiv.innerHTML = longAnswer;
        document.body.appendChild(longAnsDiv);
            }
        if (wantsThreefer===true){
            let threeferDiv = document.createElement('div');
            threeferDiv.classList.add('threeferOutput');
            threeferDiv.class = 'threeferOutput';
            threeferDiv.innerHTML = threefer;
            document.body.appendChild(threeferDiv);
                    }
    

///////////////////////
// Sub or question ////
///////////////////////
question = sub +sp +haishi +subS + mod + sp + time+sp+loc+sp+mainVerb+sp+obj+"?";
shortAnswer = sub;
longAnswer = sub +sp + mod + sp +time+sp+loc+sp+mainVerb+sp+obj+"。";
threefer = subS + sp + bu + mod + sp+time+sp+loc+sp+mainVerb+sp+obj+", "+longAnswer

if (hasModal===false){
    longAnswer = sub +sp +time+sp+loc+sp+mainVerb+sp+obj+"。";
threefer = subS + bu+mainVerb+sp+obj+", "+longAnswer
}

/// Output the question set

        questionDiv = document.createElement('div');
        questionDiv.classList.add('questionOutput');
        questionDiv.class = 'questionOutput';
        questionDiv.innerHTML = question;
        document.body.appendChild(questionDiv);

            if (displayAnswers===true){
        shortAnsDiv = document.createElement('div');
        shortAnsDiv.classList.add('shortAnsOutput');
        shortAnsDiv.class = 'shortAnsOutput';
        shortAnsDiv.innerHTML = shortAnswer;
        document.body.appendChild(shortAnsDiv);

        longAnsDiv = document.createElement('div');
        longAnsDiv.classList.add('longAnsOutput');
        longAnsDiv.class = 'longAnsOutput';
        longAnsDiv.innerHTML = longAnswer;
        document.body.appendChild(longAnsDiv);
            }
        if (wantsThreefer===true){
            let threeferDiv = document.createElement('div');
            threeferDiv.classList.add('threeferOutput');
            threeferDiv.class = 'threeferOutput';
            threeferDiv.innerHTML = threefer;
            document.body.appendChild(threeferDiv);
                    }

////////////////////////
// Sub QW QUESTION   ///
////////////////////////

question = "誰"+sp +mod +sp + time+sp+loc+sp+mainVerb+sp+obj+"?"
shortAnswer = sub;
longAnswer = sub +sp +mod + sp+ time+sp+loc+sp+mainVerb+sp+obj;

// Output the question set

questionDiv = document.createElement('div');
questionDiv.classList.add('questionOutput');
questionDiv.class = 'questionOutput';
questionDiv.innerHTML = question;
document.body.appendChild(questionDiv);

    if (displayAnswers===true){
shortAnsDiv = document.createElement('div');
shortAnsDiv.classList.add('shortAnsOutput');
shortAnsDiv.class = 'shortAnsOutput';
shortAnsDiv.innerHTML = shortAnswer;
document.body.appendChild(shortAnsDiv);

longAnsDiv = document.createElement('div');
longAnsDiv.classList.add('longAnsOutput');
longAnsDiv.class = 'longAnsOutput';
longAnsDiv.innerHTML = longAnswer;
document.body.appendChild(longAnsDiv);
    }




///////////////////////
/// OBJ QW Question ///
///////////////////////
if (hasObj===true){

question = sub +sp +mod +sp+ time+sp+loc+sp+mainVerb+sp+"什麼？";
shortAnswer = obj;
longAnswer = sub +sp + time+sp+loc+sp+mod+sp+mainVerb+sp+ obj;

// Output the question set

questionDiv = document.createElement('div');
questionDiv.classList.add('questionOutput');
questionDiv.class = 'questionOutput';
questionDiv.innerHTML = question;
document.body.appendChild(questionDiv);

    if (displayAnswers===true){
shortAnsDiv = document.createElement('div');
shortAnsDiv.classList.add('shortAnsOutput');
shortAnsDiv.class = 'shortAnsOutput';
shortAnsDiv.innerHTML = shortAnswer;
document.body.appendChild(shortAnsDiv);

longAnsDiv = document.createElement('div');
longAnsDiv.classList.add('longAnsOutput');
longAnsDiv.class = 'longAnsOutput';
longAnsDiv.innerHTML = longAnswer;
document.body.appendChild(longAnsDiv);
    }
}


////////////////////////
// Mainverb QW dodge ///
////////////////////////

    if (hasModal===false){
question = sub + "做 什麼？";
shortAnswer = mainVerb;
longAnswer = sub +sp + time+sp+loc+sp+mod+sp+mainVerb+sp+obj;

// Output the question set

questionDiv = document.createElement('div');
questionDiv.classList.add('questionOutput');
questionDiv.class = 'questionOutput';
questionDiv.innerHTML = question;
document.body.appendChild(questionDiv);

    if (displayAnswers===true){
shortAnsDiv = document.createElement('div');
shortAnsDiv.classList.add('shortAnsOutput');
shortAnsDiv.class = 'shortAnsOutput';
shortAnsDiv.innerHTML = shortAnswer;
document.body.appendChild(shortAnsDiv);

longAnsDiv = document.createElement('div');
longAnsDiv.classList.add('longAnsOutput');
longAnsDiv.class = 'longAnsOutput';
longAnsDiv.innerHTML = longAnswer;
document.body.appendChild(longAnsDiv);
    }
    }

    //////////////////////////
    // Modal OR         //////
    //////////////////////////
// if (hasModal===true){

// question = sub +sp +mod+haishi+modS +sp + time+sp+loc+ sp+mainVerb+sp+obj;

// shortAnswer = mod;
// longAnswer=sub +sp + time+sp+loc+sp+mod+sp+mainVerb+sp+obj;

// // Output the question set

// questionDiv = document.createElement('div');
// questionDiv.classList.add('questionOutput');
// questionDiv.class = 'questionOutput';
// questionDiv.innerHTML = question;
// document.body.appendChild(questionDiv);

//     if (displayAnswers===true){
// shortAnsDiv = document.createElement('div');
// shortAnsDiv.classList.add('shortAnsOutput');
// shortAnsDiv.class = 'shortAnsOutput';
// shortAnsDiv.innerHTML = shortAnswer;
// document.body.appendChild(shortAnsDiv);

// longAnsDiv = document.createElement('div');
// longAnsDiv.classList.add('longAnsOutput');
// longAnsDiv.class = 'longAnsOutput';
// longAnsDiv.innerHTML = longAnswer;
// document.body.appendChild(longAnsDiv);
//     }
// if (wantsThreefer===true){
//     let threeferDiv = document.createElement('div');
//     threeferDiv.classList.add('threeferOutput');
//     threeferDiv.class = 'threeferOutput';
//     threeferDiv.innerHTML = threefer;
//     document.body.appendChild(threeferDiv);
//             }

///////////////////////////////
// MainVerb No w Shadow, ma //
//////////////////////////////

question = sub +sp +mod + sp + time+sp+loc+sp+mainVerbS+sp+obj + ma;
if (hasModal===true){
    shortAnswer=bu + mod;
    longAnswer = sub +sp +bu +mod + sp+ time+sp+loc+sp+mainVerbS+sp+obj +", " + sub+ sp+mod+sp + time+sp+loc+sp+mainVerb+sp+obj;
}
    else {shortAnswer = bu + mainVerbS;
    longAnswer = sub +sp + time+sp+loc+sp+ bu+mainVerbS+sp+objS +", " + sub +sp + time+sp+loc+sp+mainVerb+sp+obj;
    }



// Output the question set

questionDiv = document.createElement('div');
questionDiv.classList.add('questionOutput');
questionDiv.class = 'questionOutput';
questionDiv.innerHTML = question;
document.body.appendChild(questionDiv);

    if (displayAnswers===true){
shortAnsDiv = document.createElement('div');
shortAnsDiv.classList.add('shortAnsOutput');
shortAnsDiv.class = 'shortAnsOutput';
shortAnsDiv.innerHTML = shortAnswer;
document.body.appendChild(shortAnsDiv);

longAnsDiv = document.createElement('div');
longAnsDiv.classList.add('longAnsOutput');
longAnsDiv.class = 'longAnsOutput';
longAnsDiv.innerHTML = longAnswer;
document.body.appendChild(longAnsDiv);
    }
if (wantsThreefer===true){
    let threeferDiv = document.createElement('div');
    threeferDiv.classList.add('threeferOutput');
    threeferDiv.class = 'threeferOutput';
    threeferDiv.innerHTML = threefer;
    document.body.appendChild(threeferDiv);
            }

///////////////////////////////
// Yes: V bu V              ///
///////////////////////////////

if (hasModal===false){

question = sub +sp + time+sp+loc+sp+mod+sp+mainVerb+bu+mainVerb +sp+obj;
shortAnswer = mainVerb;
longAnswer = sub +sp + time+sp+loc+sp+mod+sp+mainVerb+sp+obj;

// Output the question set

questionDiv = document.createElement('div');
questionDiv.classList.add('questionOutput');
questionDiv.class = 'questionOutput';
questionDiv.innerHTML = question;
document.body.appendChild(questionDiv);

    if (displayAnswers===true){
shortAnsDiv = document.createElement('div');
shortAnsDiv.classList.add('shortAnsOutput');
shortAnsDiv.class = 'shortAnsOutput';
shortAnsDiv.innerHTML = shortAnswer;
document.body.appendChild(shortAnsDiv);

longAnsDiv = document.createElement('div');
longAnsDiv.classList.add('longAnsOutput');
longAnsDiv.class = 'longAnsOutput';
longAnsDiv.innerHTML = longAnswer;
document.body.appendChild(longAnsDiv);
    }
}

//////////////////////
/// MainVerb OR    ///
//////////////////////

question = sub +sp +mod + time+sp+loc+sp+mainVerb + haishi + mainVerbS +sp+obj;
shortAnswer = mainVerb;
longAnswer = sub +sp + time+sp+loc+sp+mod+sp+mainVerb+sp+obj;

/// Output the question set

        questionDiv = document.createElement('div');
        questionDiv.classList.add('questionOutput');
        questionDiv.class = 'questionOutput';
        questionDiv.innerHTML = question;
        document.body.appendChild(questionDiv);

            if (displayAnswers===true){
        shortAnsDiv = document.createElement('div');
        shortAnsDiv.classList.add('shortAnsOutput');
        shortAnsDiv.class = 'shortAnsOutput';
        shortAnsDiv.innerHTML = shortAnswer;
        document.body.appendChild(shortAnsDiv);

        longAnsDiv = document.createElement('div');
        longAnsDiv.classList.add('longAnsOutput');
        longAnsDiv.class = 'longAnsOutput';
        longAnsDiv.innerHTML = longAnswer;
        document.body.appendChild(longAnsDiv);
            }
        if (wantsThreefer===true){
            let threeferDiv = document.createElement('div');
            threeferDiv.classList.add('threeferOutput');
            threeferDiv.class = 'threeferOutput';
            threeferDiv.innerHTML = threefer;
            document.body.appendChild(threeferDiv);
                    }

///////////////////////////
/// Subject OR          ///
///////////////////////////
question = sub +sp +haishi + subS + sp+time+sp+loc+sp+mod+sp+mainVerb +sp+obj;
shortAnswer = sub;
longAnswer = sub +sp + time+sp+loc+sp+mod+sp+mainVerb +sp+obj;


// Output the question set

questionDiv = document.createElement('div');
questionDiv.classList.add('questionOutput');
questionDiv.class = 'questionOutput';
questionDiv.innerHTML = question;
document.body.appendChild(questionDiv);

    if (displayAnswers===true){
shortAnsDiv = document.createElement('div');
shortAnsDiv.classList.add('shortAnsOutput');
shortAnsDiv.class = 'shortAnsOutput';
shortAnsDiv.innerHTML = shortAnswer;
document.body.appendChild(shortAnsDiv);

longAnsDiv = document.createElement('div');
longAnsDiv.classList.add('longAnsOutput');
longAnsDiv.class = 'longAnsOutput';
longAnsDiv.innerHTML = longAnswer;
document.body.appendChild(longAnsDiv);
    }
if (wantsThreefer===true){
    let threeferDiv = document.createElement('div');
    threeferDiv.classList.add('threeferOutput');
    threeferDiv.class = 'threeferOutput';
    threeferDiv.innerHTML = threefer;
    document.body.appendChild(threeferDiv);
            }

//////////////////////////
// Obj OR              ///
//////////////////////////
if (hasObj===true){

question = sub +sp + time+sp+loc+sp+mod+sp+mainVerb  +sp+objS +sp + haishi + obj;
shortAnswer = obj;
longAnswer = sub +sp + time+sp+loc+sp+mod+sp+mainVerb +sp+obj;

// Output the question set

questionDiv = document.createElement('div');
questionDiv.classList.add('questionOutput');
questionDiv.class = 'questionOutput';
questionDiv.innerHTML = question;
document.body.appendChild(questionDiv);

    if (displayAnswers===true){
shortAnsDiv = document.createElement('div');
shortAnsDiv.classList.add('shortAnsOutput');
shortAnsDiv.class = 'shortAnsOutput';
shortAnsDiv.innerHTML = shortAnswer;
document.body.appendChild(shortAnsDiv);

longAnsDiv = document.createElement('div');
longAnsDiv.classList.add('longAnsOutput');
longAnsDiv.class = 'longAnsOutput';
longAnsDiv.innerHTML = longAnswer;
document.body.appendChild(longAnsDiv);
    }
if (wantsThreefer===true){
    let threeferDiv = document.createElement('div');
    threeferDiv.classList.add('threeferOutput');
    threeferDiv.class = 'threeferOutput';
    threeferDiv.innerHTML = threefer;
    document.body.appendChild(threeferDiv);
            }
        }
/////////////////////
// When question  ///
/////////////////////

    if (hasTime===true){
question = sub + sp + mod + sp + "什麼時候"+ sp + loc + sp + mainVerb + sp + obj;
shortAnswer = time;
longAnswer= sub + sp + mod + sp + time + sp + loc + sp + mainVerb + sp + obj;

// Output the question set

        questionDiv = document.createElement('div');
        questionDiv.classList.add('questionOutput');
        questionDiv.class = 'questionOutput';
        questionDiv.innerHTML = question;
        document.body.appendChild(questionDiv);

            if (displayAnswers===true){
        shortAnsDiv = document.createElement('div');
        shortAnsDiv.classList.add('shortAnsOutput');
        shortAnsDiv.class = 'shortAnsOutput';
        shortAnsDiv.innerHTML = shortAnswer;
        document.body.appendChild(shortAnsDiv);

        longAnsDiv = document.createElement('div');
        longAnsDiv.classList.add('longAnsOutput');
        longAnsDiv.class = 'longAnsOutput';
        longAnsDiv.innerHTML = longAnswer;
        document.body.appendChild(longAnsDiv);
            }

        }
}