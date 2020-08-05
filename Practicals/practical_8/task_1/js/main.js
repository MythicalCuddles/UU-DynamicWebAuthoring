function onSubmit() {
    // Clear the current user information in the output box.
    document.userSurvey.userInformation.value = ""; 

    // check if all the fields are valid.
    var allInfoValid = validAll();
    // show an error if the information is invalid in the console.
    console.assert(allInfoValid, "validAll() returned false.");
}

function validAll() {
    // run all the validations, and expect a result.
    // we are able to run functions in an if statement, which
    // will execute the code in the function and gather a result
    // before checking it against the compare condition.

    // if any functions return false, validAll returns false and stops running.
    if(!validName()) return false;
    if(!validNo()) return false;
    if(!validEmail()) return false;
    if(!validChoice()) return false;

    return true;
}

function validName() {
    // get the value stored in the name text field and store in iUserName
    var iUserName = document.getElementById("userName").value;
    // store a regular expression in regex to be used below.
    var regex = /^[A-Za-z\s]+$/

    // if the username is blank, or doesn't match the regex defined above, run the following:
    if(!iUserName || !iUserName.match(regex)) {
        // alert the user of this and select the name text field.
        alert("Please enter a valid name, only using the characters A-Z or a-z");
        document.getElementById("userName").focus();
        return false;
    }

    return true;
}

function validNo() {
    // If the phone input is blank
    if(!document.userSurvey.phone.value) {
        // send alert popup to warn user
        window.alert("Phone number missing. Please enter a valid phone number to continue.");
        // set the cursor to the phone input
        document.userSurvey.phone.focus();

        return false;
    }
    else {
        var numbersOnly = "";
        var chars = "";
        var phoneNo = document.userSurvey.phone.value; // get user phone number input.

        // for loop to loop through each of the characters/digits in the user input.
        for(let i = 0; i < phoneNo.length; i++) {
            // split the input depending into the chars variable, character by character
            chars = phoneNo.substring(i, i+1);

            // if the character of the current loop is a digit between 0 and 9:
            if(chars >= "0" && chars <= "9") {
                // add the number to the numbersOnly variable.
                numbersOnly = numbersOnly + chars;
            }
        }

        if(numbersOnly.length != 13) {
            // alert user of invalid format if the /valid/ user input is not 13 digits long.
            window.alert("Incorrect phone number format. Please enter your area number followed by your mobile number. (Example: 4401234567890)");
            document.userSurvey.phone.focus();
            return false;
        }
        else {
            // substring() method extracts the characters from the given string, 
            // between two specified indexes, and returns the characters.
            var areacode = numbersOnly.substring(0, 2); // start at index 0, and end at index 2 (exclusive)
            var leading0 = numbersOnly.substring(2, 3); // start at index 2, and end at index 3 (exclusive)
            var exchange = numbersOnly.substring(3, 5); // start at index 3, and end at index 5 (exclusive)
            var ext1 = numbersOnly.substring(5, 9); // start at index 5, and end at index 9 (exclusive)
            var ext2 = numbersOnly.substring(9); // start at index 9, and end at the end of the string

            // format and concatenate the defined variables above into one string.
            var newNumber = ("+" + areacode + " (" + leading0 + ") " + exchange + " " + ext1 + "-" + ext2);
            // change the value in the phone input to the formatted string.
            document.userSurvey.phone.value = newNumber;

            return true;
        }
    }
}

function validEmail() {
    if(!document.userSurvey.email.value) {
        // alert the user if the email input is empty.
        window.alert("Email address missing. Plase enter a valid email address to continue.");
        document.userSurvey.email.focus();
        return false;
    }
    else {
        // get the value in the email textbox.
        var emailAddress = document.userSurvey.email.value;
        // find the location of the @ symbol in the input after the first character.
        var atLoc = emailAddress.indexOf("@", 1);
        // find the location of a dot (.) after two characters after the location of the @ symbol. 
        var dotLoc = emailAddress.indexOf(".", atLoc+2);
        // get the length of the input.
        var len = emailAddress.length;

        // if the @ symbol is present; and
        // a dot (.) after the @ symbol is present; and
        // the email has a TLD ending (top level domain)
        if(atLoc > 0 && dotLoc > 0 && len > dotLoc+2) {
            return true;
        }
        else {
            // alert the user if any of the conditions above are false.
            window.alert("Invalid email address! Please enter your email address again.");
            document.userSurvey.email.focus();
            return false;
        }
    }
}

function validChoice() {
    var bookChoice = "";
    var allChoices = "";

    for(let i = 0; i < 4; i++) {
        // for each of the bookChoice checkboxes:
        if(document.userSurvey['bookChoice'+i].checked) {
            // set x to the value string of the box if it is checked.
            bookChoice = document.userSurvey['bookChoice'+i].value;
            // add the value to a new line of the allChoices variable
            allChoices = allChoices + "\n" + bookChoice;
        }
    }

    if(allChoices == "") {
        // alert the user if they don't make a selection.
        window.alert("You must select at least one book category.");
        return false;
    }
    else {
        // get all of the other inputs from the page.
        var userName = document.userSurvey.userName.value;
        var email = document.userSurvey.email.value;
        var phoneNo = document.userSurvey.phone.value;

        // add each of the users input to the textbox at the bottom of the page.
        document.userSurvey.userInformation.value += "Username: " + userName;
        document.userSurvey.userInformation.value += "\nEmail: " + email;
        document.userSurvey.userInformation.value += "\nPhone No: " + phoneNo;
        document.userSurvey.userInformation.value += "\nBook Categories:" + allChoices;

        // log the users inputs to the console (debugging)
        console.table([userName, email, phoneNo, allChoices]);
        
        return true;
    }
}

function resetForm() {
    // show a popup to check if the user is okay to clear the form.
    var response = confirm("You are about to clear the data in the form.");

    // if okay:
    if(response) {
        // reset all elements on the form.
        document.userSurvey.userName.value = "";
        document.userSurvey.email.value = "";
        document.userSurvey.phone.value = "";

        for(let i = 0; i < 4; i++) {
            document.userSurvey['bookChoice'+i].checked = false;
        }
    }
}
