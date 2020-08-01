function onSubmit() {
    var allInfoValid = validAll();
    console.log(allInfoValid);
}

function validAll() {
    if(!validName()) return false;
    if(!validNo()) return false;
    if(!validEmail()) return false;
    if(!validChoice()) return false;

    return true;
}

function validName() {
    var iUserName = document.getElementById("userName").value;
    var regex = /^[A-Za-z\s]+$/
    if(!iUserName || !iUserName.match(regex)) {
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
        var phoneNo = document.userSurvey.phone.value;

        for(let i = 0; i < phoneNo.length; i++) {
            chars = phoneNo.substring(i, i+1);

            if(chars >= "0" && chars <= "9") {
                numbersOnly = numbersOnly + chars;
            }
        }

        if(numbersOnly.length != 13) {
            window.alert("Incorrect phone number format. Please enter your area number followed by your mobile number. (Example: 4401234567890)");
            document.userSurvey.phone.focus();
            return false;
        }
        else {
            var areacode = numbersOnly.substring(0, 2);
            var leading0 = numbersOnly.substring(2, 3);
            var exchange = numbersOnly.substring(3, 5);
            var ext1 = numbersOnly.substring(5, 9);
            var ext2 = numbersOnly.substring(9);

            var newNumber = ("+" + areacode + " (" + leading0 + ") " + exchange + " " + ext1 + "-" + ext2);
                document.userSurvey.phone.value = newNumber;

            return true;
        }
    }
}

function validEmail() {
    if(!document.userSurvey.email.value) {
        window.alert("Email address missing. Plase enter a valid email address to continue.");
        document.userSurvey.email.focus();
        return false;
    }
    else {
        var emailAddress = document.userSurvey.email.value;
        var atLoc = emailAddress.indexOf("@", 1);
        var dotLoc = emailAddress.indexOf(".", atLoc+2);
        var len = emailAddress.length;

        if(atLoc > 0 && dotLoc > 0 && len > dotLoc+2) {
            return true;
        }
        else {
            window.alert("Invalid email address! Please enter your email address again.");
            document.userSurvey.email.focus();
            return false;
        }
    }
}

function validChoice() {
    var bookChoice = "";
    var x = "";

    for(let i = 0; i < 4; i++) {
        if(document.userSurvey['bookChoice'+i].checked) {
            bookChoice = document.userSurvey['bookChoice'+i].value;
            x = x + "\n" + bookChoice;
        }
    }

    if(bookChoice == "") {
        window.alert("You must select at least one book category.");
        return false;
    }
    else {
        var userName = document.userSurvey.userName.value;
        var email = document.userSurvey.email.value;
        var phoneNo = document.userSurvey.phone.value;

        document.userSurvey.userInformation.value += "Username: " + userName;
        document.userSurvey.userInformation.value += "\nEmail: " + email;
        document.userSurvey.userInformation.value += "\nPhone No: " + phoneNo;
        document.userSurvey.userInformation.value += "\nBook Categories:\n" + bookChoice;

        
        return true;
    }
}
