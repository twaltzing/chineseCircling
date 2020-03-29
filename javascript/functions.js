


var onButtonClick = function () {
    // Select the textfields and get values 
    var origSentence = document.getElementById("sentence").value;
    console.log(origSentence);

    var shadowSentence = document.getElementById("shadows").value;
    console.log(shadowSentence);

    //run a test question output
    //remove trailing punctuation
    oSent=oSent.slice(0,oSent.length-1);
    shSent=shSent.slice(0,shSent.length-1);

    //split two sentences into arrays of individual words
    oSentArr=oSent.split(" ");
    shSentArr=shSent.split(" "); //shadow oSentArr
    
    
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
    console.log(questionArray);
    question=questionArray.join(" ");
    
    // Construct short answer
    bu = "不";
    shortAnswer=bu+shortAnswerArray[1];
    // Construct long deny-assert answer combo
    
    console.log(longAnswerArray);
    deny=oSentArr[0]+" "+shortAnswer+" "+longAnswerArray[2]+" "+shSentArr[3]+"。 ";
    longAnswer=deny + oSent +"。 "+ deny;
    console.log(longAnswer);
    
    //output the circling questions and answers
    console.log("%c"+question, "color:blue;");
            console.log("%cShort answer: \""+shortAnswer+"\".","color: gray; padding-left: 30px;");
            console.log("%cLong answer: \""+longAnswer+"\"","color: gray; padding-left: 30px;");
}






function getInput (){

    // Select the textfields and get values 
    var origSentence = document.getElementById("sentence").value;
    console.log(origSentence);

    var shadowSentence = document.getElementById("shadows").value;
    console.log(shadowSentence);
}



// user input: sentence, spaces between words
// var origSentence = "Bob xiang CHI HanbaoBAO.";
// var origSentence = "Bob 想 吃 漢堡包.";
var origSentence = "Pig 想 吃 牛肉。";
var shadowSentence = "George 討厭 喝 可樂。";
// let subShade=shadows[0];
// console.log(subShade)
// let modShade=shadows[1];

//store the sentence piece-by-piece in an array
chunks=origSentence.split(" ");



//placeholder paramater for repeatable function
//parameter names are placeholder texts for whatever you type in when you call the function
function subQW (arr) {
    //split into array of individual words
    arr=origSentence.split(" ");
    //remove ending punctuation
    endPunct = arr[arr.length-1].substr(0,arr[arr.length-1].length-1);
    arr[arr.length-1]=endPunct;
 

        oldChunk=arr[0];
        arr[0]="誰";

       
        
        // assemble the question and answers
        // subYesquestion=arr.join(" ");
        // subYesquestion+="?";
        // console.log(subYesquestion);

        question=arr.join(" ");
        question+="?";
        console.log("%c"+question, "color:blue;");

        console.log("%cShort answer: \""+oldChunk+"\".","color: gray; padding-left: 30px;");
        console.log("%cLong answer: \""+origSentence+"\"","color: gray; padding-left: 30px;");
        
}


function modalBuModal (arr){
    //split into array of individual words
    arr=arr.split(" ");

    //remove ending punctuation from last array element
    endPunct = chunks[chunks.length-1].substr(0,chunks[chunks.length-1].length-1);
    chunks[chunks.length-1]=endPunct;


        modalNotModal=chunks[1]+"不"+ chunks[1];
        // console.log("Transformation: change "+oldChunk +" to "+modalNotModal+" and add a question mark.");
        answer=arr;
        shortAnswer=chunks[1];  
        chunks[1]=modalNotModal;  
        
        // assemble the question and answers
        question=chunks.join(" ");
        question+="?";
        console.log("%c"+question, "color:blue;");
        console.log("%cShort answer: \""+shortAnswer+"\".","color: gray; padding-left: 30px;");
        console.log("%cLong answer: \""+arr+"\"","color: gray; padding-left: 30px;");
}

function maQuestion (arr){
// ask a yes-no question using ma*
    //split into array of individual words
    chunks=arr.split(" ");

    //remove ending punctuation from last array element
    endPunct = chunks[chunks.length-1].substr(0,chunks[chunks.length-1].length-1);
    chunks[chunks.length-1]=endPunct;



        question=chunks.push('嗎？');
        question=chunks.join(" ");
        shortAnswer=chunks[1];
        console.log("%c"+question, "color:blue;");
        console.log("%cShort answer: \""+shortAnswer+"\".","color: gray; padding-left: 30px;");
        console.log("%cLong answer: \""+arr+"\"","color: gray; padding-left: 30px;");

}

function objQW (arr){
    // ask about the object with a QW
    //split into array of individual words
    chunks=arr.split(" ");

    //remove ending punctuation from last array element
    endPunct = chunks[chunks.length-1].substr(0,chunks[chunks.length-1].length-1);
    chunks[chunks.length-1]=endPunct;

    oldChunk=chunks[3];
    chunks[3]="什麼";
    answer=chunks;
    answer=answer.join(" ");
    // console.log("Storing "+answer+" in answer");
    shortAnswer=oldChunk;        
    
    // assemble the question and answers
    question=chunks.join(" ");
    question+="?";
    console.log("%c"+question, "color:blue;");
    console.log("%cShort answer: \""+shortAnswer+"\".","color: gray; padding-left: 30px;");
        console.log("%cLong answer: \""+arr+"\"","color: gray; padding-left: 30px;");
}

function verbQW (arr){
    //split into array of individual words
    chunks=arr.split(" ");

    //remove ending punctuation from last array element
    endPunct = chunks[chunks.length-1].substr(0,chunks[chunks.length-1].length-1);
    chunks[chunks.length-1]=endPunct;

    //make separate arrays to produce different sentences
   questionArray=[""];
   questionArray.shift();
   shortAnswerArray=[""];
   shortAnswerArray.shift();

    for (i=0; i<chunks.length; i++){
        questionArray.push(chunks[i]);
        
        shortAnswerArray.push(chunks[i]);

    }
    //Get the first half of the question and add QW
        var question = questionArray.slice(0,2);
        question.push('做什麼？');
        question=question.join(" ");

        //set up answers
        var shortAnswer=shortAnswerArray.slice(2,4)
        shortAnswer=shortAnswer.join(" ");
        //long answer is original sentence
        
 

        console.log("%c"+question, "color:blue;");
        console.log("%cShort answer: \""+shortAnswer+"\".","color: gray; padding-left: 30px;");
        console.log("%cLong answer: \""+arr+"\"","color: gray; padding-left: 30px;");

}


function subShadowMa(oSent, shSent) {
//split two sentences into arrays of individual words
oSentArr=oSent.split(" ");
shSentArr=shSent.split(" "); //shadow oSentArr

//remove ending punctuation from last array element
endPunct = oSentArr[oSentArr.length-1].substr(0,oSentArr[oSentArr.length-1].length-1);
oSentArr[oSentArr.length-1]=endPunct;

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

     
// Construct question by replacing subject
questionArray[0]=shSentArr[0];

questionArray.push('吗？');
console.log(questionArray);
question=questionArray.join(" ");

// Construct short answer
bu = "不";
shortAnswer=bu+shortAnswerArray[1];
// Construct long deny-assert answer combo

console.log(longAnswerArray);
deny=questionArray[0]+" "+shortAnswer+" "+longAnswerArray[2]+" "+longAnswerArray[3]+"。 ";
longAnswer=deny + oSent + deny;
console.log(longAnswer);

//output the circling questions and answers
console.log("%c"+question, "color:blue;");
        console.log("%cShort answer: \""+shortAnswer+"\".","color: gray; padding-left: 30px;");
        console.log("%cLong answer: \""+longAnswer+"\"","color: gray; padding-left: 30px;");

}

function objShadowMa(oSent, shSent) {
    //remove trailing punctuation
    oSent=oSent.slice(0,oSent.length-1);
    shSent=shSent.slice(0,shSent.length-1);

    //split two sentences into arrays of individual words
    oSentArr=oSent.split(" ");
    shSentArr=shSent.split(" "); //shadow oSentArr
    
    
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
    console.log(questionArray);
    question=questionArray.join(" ");
    
    // Construct short answer
    bu = "不";
    shortAnswer=bu+shortAnswerArray[1];
    // Construct long deny-assert answer combo
    
    console.log(longAnswerArray);
    deny=oSentArr[0]+" "+shortAnswer+" "+longAnswerArray[2]+" "+shSentArr[3]+"。 ";
    longAnswer=deny + oSent +"。 "+ deny;
    console.log(longAnswer);
    
    //output the circling questions and answers
    // console.log("%c"+question, "color:blue;");
    //         console.log("%cShort answer: \""+shortAnswer+"\".","color: gray; padding-left: 30px;");
    //         console.log("%cLong answer: \""+longAnswer+"\"","color: gray; padding-left: 30px;");

    documentGetElementById("questionSpace").innerHTML=question,"\n\n\t",shortAnswer="\n\n\t",longAnswer;
   
    
    }
// outputQuestions();
// subQW(origSentence);
// objQW(origSentence);
// verbQW(origSentence);
// modalBuModal (origSentence);
// maQuestion (origSentence);
// subShadowMa(origSentence, shadowSentence);
// objShadowMa(origSentence, shadowSentence);

