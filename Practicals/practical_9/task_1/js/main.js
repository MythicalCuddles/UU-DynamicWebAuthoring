function checkAnswers() {
    var uAnswers = new Array(); // Array to store users' answers.
    var cAnswers = ["answer2", "answer2", "answer3"];
    var userScore = 0;

    for(let i = 1; i <= 3; i++) {
        uAnswers.push(getSelectValue("question" + i));
    }

    console.log(uAnswers);
    console.log(cAnswers);

    for(let i = 0; i < uAnswers.length; i++) {
        if(uAnswers[i] == cAnswers[i]) {
            userScore++;
        }
    }

    console.log(userScore);
    document.xhtmlQuiz.scoreBox.value = userScore;
}

function getSelectValue(selectName, formName = "xhtmlQuiz") {
    var theMenu = document[formName][selectName];
    var selectedItem = theMenu.selectedIndex;
    return theMenu.options[selectedItem].value;
}