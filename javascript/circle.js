// user input: sentence, spaces between words
// var origSentence = "Bob xiang CHI HanbaoBAO.";
var origSentence = "Bob 想 吃 漢堡包.";
var shadows = ['George', '討厭', '買' ,'麵條'];
// console.log("The possible replacement items are: "+shadows);

//remove ending punctuation
sentence=origSentence.substr(0,origSentence.length-1);


//split into array of individual words
var chunks = sentence.split(" ");


toChange=6;
question = "";

switch(toChange) {
    //subject to who? SUBJ-QW
    //NEED TO ADD INANIMATE OPTION
    case 0: {
        oldChunk=chunks[0];
        chunks[0]="shéI";
        answer=chunks;
        answer=answer.join(" ");
        // console.log("Storing "+answer+" in answer");
        chunks.push('嗎');
        shortAnswer=chunks[0];        
        
        // assemble the question and answers
        question=chunks.join(" ");
        question+="?";
        console.log(question);
        console.log("The short answer to the question is \""+oldChunk+"\".");
        console.log("The long answer is \""+origSentence+"\"");
        break;
    }
    // modal to negative modal: MODAL-NO
    case 1: {
        oldChunk=chunks[1];
        chunks[1]="不"+ chunks[1];
        console.log("Transformation: change "+oldChunk +" to "+chunks[1]+" and add a question mark.");
        answer=chunks;
        answer=answer.join(" ");
        // console.log("Storing "+answer+" in answer");
        chunks.push('嗎');
        shortAnswer=chunks[1];        
        
        // assemble the question and answers
        question=chunks.join(" ");
        question+="?";
        console.log(question);
        console.log("The short answer to the question is \""+shortAnswer+"\".");
        console.log("The long answer is \""+answer+".\"");
        break;
    }

case 2: {
    // Object to QW
    oldChunk=chunks[3];
        chunks[3]="什麼";
        answer=chunks;
        answer=answer.join(" ");
        // console.log("Storing "+answer+" in answer");
        shortAnswer=oldChunk;        
        
        // assemble the question and answers
        question=chunks.join(" ");
        question+="?";
        console.log(question);
        console.log("The short answer to the question is \""+shortAnswer+"\".");
        console.log("The long answer is \""+origSentence+"\"");
        break;
}

    case 3: {
        //replace main verb: VERB-NO
        oldChunk=chunks[2];
        chunks[2]= shadows[2];
        console.log("Transformation: change "+oldChunk +" to "+ shadows[2]+" and add a question mark.");
        verbNo="不"+chunks[1];
        chunks[1]=verbNo;
        answer=chunks;
        answer=answer.join(" ");
        // console.log("Storing "+answer+" in answer");
        chunks.push('嗎');
        shortAnswer=verbNo;        
        // assemble the question and answers
        question=chunks.join(" ");
        question+="?";
        console.log(question);
        console.log("The short answer to the question is \""+shortAnswer+"\".");
        console.log("The long answer is \""+answer+"; "+origSentence);
        break;
    }

    case 4: {
        //YES-QUESTION
        question=chunks.push('嗎？');
        question=chunks.join(" ");
        shortAnswer=chunks[1];
        console.log(question);
        console.log("The short answer to the question is \""+shortAnswer+"\".");
        console.log("The long answer is \""+origSentence);
        break;
    }
    case 5: {
        //The awkward verb QW case
        shortAnswer=chunks[1];
        question=chunks.splice(0,2);
        question.push('做 什麼？');
        question=question.join(" ");
        console.log("The question is "+question);
        console.log("The short answer is \"" + shortAnswer +".\"")
        console.log("The long answer is \""+origSentence+"\"")
        break;
    }

    case 6: {
        // SUBJ-NO
        //replace subject with shadow subject
        oldChunk=chunks[0];
        chunks[0]= shadows[0];
        console.log("Transformation: change "+oldChunk +" to "+ shadows[0]+" and add a question mark.");
        verbNo="不"+chunks[1];
        answer=chunks;
        answer=answer.join(" ");
        // console.log("Storing "+answer+" in answer");
        chunks.push('嗎');
        shortAnswer=verbNo;        
        // assemble the question and answers
        question=chunks.join(" ");
        question+="?";
        console.log(question);
        console.log("The short answer to the question is \""+shortAnswer+"\".");
        console.log("The long answer is \""+answer+"; "+origSentence);
        break;

    }


    default: {
        console.log("Did not change the array:" +chunks);
    }


}