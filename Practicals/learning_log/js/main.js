function popupHelloWorld() {
    alert("Hello World!");
}

function changeToDate(element) {
    element.innerHTML = Date();
}

function variables() {
    var myName = "Melissa";
    var myAge = 22, enjoyProgramming = true, programmingStr;
    const pi = 3.1415926 + "...";
    
    programmingStr = (enjoyProgramming) ? "\nI enjoy programming!" : "\nI don't enjoy programming";

    alert("My Name: " + myName + "\nMy Age: " + myAge + programmingStr + "\nPI is still " + pi);
}