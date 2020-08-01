function findInsuranceClass() {
    var iForename = document.getElementById("forename").value;
    var iSurname = document.getElementById("surname").value;
    var iAge = Number(document.getElementById("age").value); // if not a number, would return NaN.

    var maritalStatusObj = document.getElementById("maritalStatus");
    var iMaritalStatus = maritalStatusObj.options[maritalStatusObj.selectedIndex].value;

    /// validation stages
    if(!iForename || !iSurname || !iAge || iMaritalStatus == "undefined") {
        // if any fields left blank or unanswered.
        alert("Please fill in all the fields.");
        return;
    }

    var regex = /^[A-Za-z]+$/;
    if(!iForename.match(regex)) {
        // if forename contains anything but A-Z or a-z characters.
        alert("Invalid forename. Please only use A-Z or a-z characters");
        return;
    }
    else if(!iSurname.match(regex)) {
        // if surname contains anything but A-Z or a-z characters.
        alert("Invalid surname. Please only use A-Z or a-z characters");
        return;
    }

    if(isNaN(iAge)) {
        // if age is Not a Number.
        alert("Invalid age. Please enter a number value.");
        return;
    }
    else if(iAge < 17) {
        // if user age is under 17, not including 17.
        alert("You are too young for car insurance.");
        return;
    }
    /// end of validation

    
    // Made this shorter, does the same thing haha.
    var insuranceClass = (iAge >= 30) ? 1 : 3; // If age is greater than or equal to 30, set class as 1, otherwise set it as 3. (Assume user is married)
    insuranceClass += (iMaritalStatus == "single") ? 1 : 0; // If user is single, add one to the class number, otherwise keep it as it is. (Check for marital status)
    
    document.getElementById("result").innerHTML = iForename + " " + iSurname + ", your insurance class is: Class " + insuranceClass;
}