const button = document.getElementById('make');

button.addEventListener('click', makeQuestions);

function makeQuestions() {
    alert ("Thanks for clicking! Come back again!");
    const sentence=document.getElementById('sentence').value;
    //  console.log(sentence);
     const shadow=document.getElementById('shadow').value;
    // console.log(shadow);


oSentArr=sentence.split(" ");
shSentArr=shadow.split(" "); //shadow oSentArr

// console.log(oSentArr);
// console.log(shSentArr);


//copy oSent into separate arrays to produce different sentences
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

     
// Construct question by replacing object
questionArray[3]=shSentArr[3];

questionArray.push('吗？');
// console.log(questionArray);
question=questionArray.join(" ");

// Construct short answer
bu = "不";
shortAnswer=bu+shortAnswerArray[1];
// Construct long deny-assert-deny answer combo
// console.log(longAnswerArray);
deny=oSentArr[0]+" "+shortAnswer+" "+longAnswerArray[2]+" "+shSentArr[3]+"。 ";
longAnswer=deny + sentence +"。 "+ deny;
// console.log(longAnswer);

// var output="<h2 id=\"questionOutput\">"+question+"</h2>\n\n<p id=\"shortAnsOutput\">"+shortAnswer+"<\p>\n\n<p id=\"longAnsOutput\">"+longAnswer+"<\p>";


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


//output the circling questions and answers
// console.log("%c"+question, "color:blue;");
//         console.log("%cShort answer: \""+shortAnswer+"\".","color: gray; padding-left: 30px;");
//         console.log("%cLong answer: \""+longAnswer+"\"","color: gray; padding-left: 30px;");

// document.getElementById('questionSpace').innerHTML=output;
    }