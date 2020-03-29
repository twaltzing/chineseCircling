const button = document.getElementById('make');

button.addEventListener('click', makeQuestions);

const space=" ";
const bu="不";

function makeQuestions() {
    const sentence=document.getElementById('sentence').value;
     const shadow=document.getElementById('shadow').value;

//remove trailing punctuation from sentences
     sentenceBare=sentence.slice(0,sentence.length-1);
     shadowBare=shadow.slice(0,shadow.length-1);

     //////
     ///TESTING ONLY
     //////
     sentenceBare="1 2 3 4";
     shadowBare="A B C D"


//put orig and shadow sentences into arrays
oSentArr=sentenceBare.split(" ");
shSentArr=shadowBare.split(" "); 

//produce different arrays for sentences
questionArray=[""];
questionArray.shift();
shortAnswerArray=[""];
shortAnswerArray.shift();
longAnswerArray=[""];
longAnswerArray.shift();

for (i=0; i<oSentArr.length; i++){
    questionArray.push(oSentArr[i]);
    longAnswerArray.push(oSentArr[i]);
    shortAnswerArray.push(oSentArr[i])
        }

////////////
// MAKE FIRST QUESTION SET: OBJ-No
////////////

console.log("Shadows: "+ shSentArr);
// Construct question by replacing object
questionArray[3]=shSentArr[3];
console.log("Shadow is "+questionArray[3]);
// Add the question particle;
questionArray.push('吗？');
question=questionArray.join(" ");

// Construct short answer
// bu = "不";
shortAnswer=bu+shortAnswerArray[1];
// Construct long deny-assert-deny answer combo

deny=oSentArr[0]+" "+shortAnswer+" "+longAnswerArray[2]+" "+shSentArr[3]+"。 ";
longAnswer=deny + sentence +"。 "+ deny;



    let questionDiv = document.createElement('div');
    questionDiv.classList.add('questionOutput');
    questionDiv.class = 'questionOutput';
    questionDiv.innerHTML = question;
    document.body.appendChild(questionDiv);

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



/////////////
//  MAKE SECOND QUESTION SET: Yes
/////////////

//reload original sentences
oSentArr=sentenceBare.split(" ");
shSentArr=shadowBare.split(" "); 
console.log("Q2 sentence array: "+oSentArr);

//produce different arrays for sentences
questionArray=[""];
questionArray.shift();
shortAnswerArray=[""];
shortAnswerArray.shift();
longAnswerArray=[""];
longAnswerArray.shift();

for (i=0; i<oSentArr.length; i++){
    questionArray.push(oSentArr[i]);
    longAnswerArray.push(oSentArr[i]);
    shortAnswerArray.push(oSentArr[i])
        }

// Construct the YES question
   
questionArray.push('吗？');
console.log(questionArray);
question=questionArray.join(" ");

// Construct short answer
shortAnswer=shortAnswerArray[1];
// Long answer is original sentence
longAnswer=sentence;


// Output the question set
questionDiv = document.createElement('div');
    questionDiv.classList.add('questionOutput');
    questionDiv.class = 'questionOutput';
    questionDiv.innerHTML = question;
    document.body.appendChild(questionDiv);
shortAnswerDiv = document.createElement('div');
    shortAnswerDiv.classList.add('shortAnsOutput');
    shortAnswerDiv.class = 'shortAnsOutput';
    shortAnswerDiv.innerHTML = shortAnswer;
    document.body.appendChild(shortAnswerDiv);
longAnsDiv = document.createElement('div');
    longAnsDiv.classList.add('longAnsOutput');
    longAnsDiv.class = 'longAnsOutput';
    longAnsDiv.innerHTML = longAnswer;
    document.body.appendChild(longAnsDiv);


//////////////////////
/// 3: Subject QW  ///
//////////////////////

//reload original sentences
oSentArr=sentenceBare.split(" ");
shSentArr=shadowBare.split(" "); 
console.log("Q2 sentence array: "+oSentArr);

//produce different arrays for sentences
questionArray=[""];
questionArray.shift();
shortAnswerArray=[""];
shortAnswerArray.shift();
longAnswerArray=[""];
longAnswerArray.shift();

for (i=0; i<oSentArr.length; i++){
    questionArray.push(oSentArr[i]);
    longAnswerArray.push(oSentArr[i]);
    shortAnswerArray.push(oSentArr[i])
        }

// Produce the subject QW question

questionArray[0]='谁';
questionArray.push('?')
question=questionArray.join(" ");

// Produce the short answer
shortAnswer=shortAnswerArray[0];

// Long answer is the original sentence.
questionDiv = document.createElement('div');
    questionDiv.classList.add('questionOutput');
    questionDiv.class = 'questionOutput';
    questionDiv.innerHTML = question;
    document.body.appendChild(questionDiv);
shortAnswerDiv = document.createElement('div');
    shortAnswerDiv.classList.add('shortAnsOutput');
    shortAnswerDiv.class = 'shortAnsOutput';
    shortAnswerDiv.innerHTML = shortAnswer;
    document.body.appendChild(shortAnswerDiv);
longAnsDiv = document.createElement('div');
    longAnsDiv.classList.add('longAnsOutput');
    longAnsDiv.class = 'longAnsOutput';
    longAnsDiv.innerHTML = longAnswer;
    document.body.appendChild(longAnsDiv);

/////////////////////
/// 4. Subject NO ///
/////////////////////

//reload original sentences
oSentArr=sentenceBare.split(" ");
shSentArr=shadowBare.split(" "); 

//produce different arrays for sentences
questionArray=[""];
questionArray.shift();
shortAnswerArray=[""];
shortAnswerArray.shift();
longAnswerArray=[""];
longAnswerArray.shift();

for (i=0; i<oSentArr.length; i++){
    questionArray.push(oSentArr[i]);
    longAnswerArray.push(oSentArr[i]);
    shortAnswerArray.push(oSentArr[i])
        }

// Construct the Subject-No question
   
questionArray[0]=shSentArr[0];
questionArray.push('吗？');
question=questionArray.join(" ");

// Construct short answer
shortAnswer=shortAnswerArray[1];
// Long answer is original sentence

predicate=oSentArr.slice(1,oSentArr.length-1);
longAnswer=predicate + "的 不是" + shSentArr[0] +", 而是 "+oSentArr[0]+"。 ";


// Output the question set
questionDiv = document.createElement('div');
    questionDiv.classList.add('questionOutput');
    questionDiv.class = 'questionOutput';
    questionDiv.innerHTML = question;
    document.body.appendChild(questionDiv);
shortAnswerDiv = document.createElement('div');
    shortAnswerDiv.classList.add('shortAnsOutput');
    shortAnswerDiv.class = 'shortAnsOutput';
    shortAnswerDiv.innerHTML = shortAnswer;
    document.body.appendChild(shortAnswerDiv);
longAnsDiv = document.createElement('div');
    longAnsDiv.classList.add('longAnsOutput');
    longAnsDiv.class = 'longAnsOutput';
    longAnsDiv.innerHTML = longAnswer;
    document.body.appendChild(longAnsDiv);

//////////////////////////////
// Yes Modal bu modal     ////
//////////////////////////////

//reload original sentences

oSentArr=sentenceBare.split(" ");
shSentArr=shadowBare.split(" ");

console.log(oSentArr);

//produce different arrays for sentences

questionArray=[""];
questionArray.shift();
shortAnswerArray=[""];
shortAnswerArray.shift();
longAnswerArray=[""];
longAnswerArray.shift();

for (i=0; i<oSentArr.length; i++){
    questionArray.push(oSentArr[i]);
    longAnswerArray.push(oSentArr[i]);
    shortAnswerArray.push(oSentArr[i]);
}
    // make modal Bu modal Yes question
    var VbV=questionArray[1]+" 不"+questionArray[1];
    console.log(VbV);
    question=questionArray[0]+space +VbV+space+questionArray[2]+space + questionArray[3];
    console.log(question);


// Output the question set

    questionDiv = document.createElement('div');
    questionDiv.classList.add('questionOutput');
    questionDiv.class = 'questionOutput';
    questionDiv.innerHTML = question;
    document.body.appendChild(questionDiv);
    shortAnswerDiv = document.createElement('div');
    shortAnswerDiv.classList.add('shortAnsOutput');
    shortAnswerDiv.class = 'shortAnsOutput';

    shortAnswerDiv.innerHTML = shortAnswer;
    document.body.appendChild(shortAnswerDiv);

    longAnsDiv = document.createElement('div');
    longAnsDiv.classList.add('longAnsOutput');
    longAnsDiv.class = 'longAnsOutput';
    longAnsDiv.innerHTML = longAnswer;

document.body.appendChild(longAnsDiv);

///////////////////////
/// Yes: V bu V     ///
///////////////////////

//reload original sentences

oSentArr=sentenceBare.split(" ");
shSentArr=shadowBare.split(" ");

//produce different arrays for sentences

questionArray=[""];
questionArray.shift();
shortAnswerArray=[""];
shortAnswerArray.shift();
longAnswerArray=[""];
longAnswerArray.shift();

for (i=0; i<oSentArr.length; i++){
    questionArray.push(oSentArr[i]);
    longAnswerArray.push(oSentArr[i]);
    shortAnswerArray.push(oSentArr[i]);}

// construct V bu V Yes question 
questionArray.splice(1,1); // remove the modal
console.log(questionArray);



    }