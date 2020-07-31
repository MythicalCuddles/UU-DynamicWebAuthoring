function onLoad() {
    document.getElementById("averageMark").style.display = "none";
    document.getElementById("classification").style.display = "none";
    document.getElementById("feedback").style.display = "none";
}

function calculateAverage() {
    /// PART I. - PART IV can also be seen throughout the function.

    // Number() sets the variable to a number if a number is inputted or NaN (false) if text is inputted.
    var mark1 = Number(document.getElementById("markOne").value);
    var mark2 = Number(document.getElementById("markTwo").value);
    var mark3 = Number(document.getElementById("markThree").value);
    var mark4 = Number(document.getElementById("markFour").value);

    // Check to see if any marks are NaN (Not a Number)
    if(isNaN(mark1) || isNaN(mark2) || isNaN(mark3) || isNaN(mark4)) { 
        onLoad(); // onLoad hides all outputs after a calculation has been made.
        alert("Please only enter number marks in the boxes.");
        return; // escape from function.
    }
    
    // Check to see if any marks are outside of the range of 0 - 100
    if((mark1 > 100 || mark1 < 0) || (mark2 > 100 || mark2 < 0) || (mark3 > 100 || mark3 < 0) || (mark4 > 100 || mark4 < 0)) {
        onLoad(); // onLoad hides all outputs after a calculation has been made.
        alert("Please enter marks in the range of 0 to 100.");
        return; // escape from function.
    }

    var averageMark = (mark1 + mark2 + mark3 + mark4) / 4;

    // Display average mark and make element visible.
    document.getElementById("averageMark").innerHTML = "The average mark is: " + averageMark;
    document.getElementById("averageMark").style.display = "block";

    /// PART II.

    var grade;
    if(averageMark >= 90 && averageMark <= 100) {
        grade = "A";
    }
    else if(averageMark >= 80 && averageMark <= 90) {
        grade = "B";
    }
    else if(averageMark >= 70 && averageMark <= 80) {
        grade = "C";
    }
    else if(averageMark >= 60 && averageMark <= 70) {
        grade = "D";
    }
    else if(averageMark <= 60) {
        grade = "E";
    }
    // These can also be placed inside the if statements, but it is easier to modify this way.
    document.getElementById("classification").innerHTML = "You got an " + grade + ", your average mark is " + averageMark;
    document.getElementById("classification").style.display = "block";

    /// PART III.

    var feedbackText;
    switch(grade) {
        case 'A':
            feedbackText = "Outstanding!";
            break;
        case 'B':
            feedbackText = "Very good!";
            break;
        case 'C':
            feedbackText = "Fairly good!";
            break;
        case 'D':
            feedbackText = "Doing okay!";
            break;
        case 'E':
            feedbackText = "Need to work much harder!";
            break;
        default:
            feedbackText = "Encountered error while trying to find feedback to grade!";
            break;
    }
    // Like above, these can also be placed inside the switch statement, but it is easier to modify this way.
    document.getElementById("feedback").innerHTML = feedbackText;
    document.getElementById("feedback").style.display = "block";
}