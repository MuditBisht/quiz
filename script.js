const questions = [
    { 
        question: "International Literacy Day is observed on", 
        a: "Sep 8",
        b: "Nov 28",
        c: "May 2",
        d: "Sep 22",
        sol: "a"
    }, {
        question: "The language of Lakshadweep, a Union Territory of India, is",
        a: "Tamil",
        b: "Hindi",
        c: "Malayalam",
        d: "Telugu",
        sol: "c"
    }
];



function putContent(){
    if( currQuestionNo<questions.length ) {
        const question = questions[currQuestionNo];
        const questionDiv = document.getElementById("question");
        const optionADiv = document.getElementById("option-a");
        const optionBDiv = document.getElementById("option-b");
        const optionCDiv = document.getElementById("option-c");
        const optionDDiv = document.getElementById("option-d");
        questionDiv.innerHTML = question.question;
        optionADiv.innerHTML = question.a;
        optionBDiv.innerHTML = question.b;
        optionCDiv.innerHTML = question.c;
        optionDDiv.innerHTML = question.d;
    } else {
        alert("You have completed the quiz!");
    }
}

function answer( option ){
    if(currQuestionNo<questions.length){
        if(questions[currQuestionNo].sol === option){
            currQuestionNo++;
            putContent();
        } else {
            alert("Incorrect Solution");
            currQuestionNo = 0;
            putContent();
        }
    } else {
        alert("You have already completed the quiz!");
    }
}

let currQuestionNo = 0;
putContent();