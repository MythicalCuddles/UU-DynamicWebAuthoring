function mainFunction() {
    var fullName = passing("Melissa Brennan");
    console.log(fullName.first + " " + fullName.second);

    const {firstName, secondName} = passing("Melissa Brennan");
    console.log(firstName + " " + secondName);
}

function passing(fullName) {
    var name = fullName.split(" ");
    console.log(name);

    return {
        first: name[0],
        second: name[1]
    };
}