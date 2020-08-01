function findInsuranceClass() {
    var iForename = document.getElementById("forename").value;
    var iSurname = document.getElementById("surname").value;
    var iAge = Number(document.getElementById("age").value); // if not a number, would return NaN.

    var maritalStatusObj = document.getElementById("maritalStatus");
    var iMaritalStatus = maritalStatusObj.options[maritalStatusObj.selectedIndex].value;

    if(isNaN(iAge)) {
        alert("Invalid age. Please enter a number value.");
        return;
    }

    var insuranceClass;

    if(iAge >= 30) {
        if(iMaritalStatus == "married") {
            insuranceClass = "Class 1";
        }
        else if(iMaritalStatus == "single") {
            insuranceClass = "Class 2";
        }
    }
    else { // Age is below 30.
        if(iMaritalStatus == "married") {
            insuranceClass = "Class 3";
        }
        else if(iMaritalStatus == "single") {
            insuranceClass = "Class 4";
        }
    }

    document.getElementById("result").innerHTML = iForename + " " + iSurname + ", your insurance class is: " + insuranceClass;
}