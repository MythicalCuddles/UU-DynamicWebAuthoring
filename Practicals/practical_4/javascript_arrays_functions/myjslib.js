function displayText(inputText) {
    document.write(inputText);
}

// Adding values to an array using the index values.
var universities = new Array(2);
universities[0] = "University of Ulster";
universities[1] = "Queens University Belfast";
console.log(universities);

// Creating an array using push method to add elements to the array.
var ulsterCampuses = new Array();
ulsterCampuses.push("Jordanstown");
ulsterCampuses.push("Belfast");
ulsterCampuses.push("Magee");
ulsterCampuses.push("Coleraine");
console.log(ulsterCampuses);

// Declaring and Initialise an array using one line.
var ulsterCourses = ["Software Engineering", "Computer Science", "Interactive Multimedia Design", "Information Communication Technology", "Computing Systems"];

displayText("I'm a third year " + ulsterCourses[4] + " student in " + universities[0] + " at " + ulsterCampuses[0] + ". ");
displayText("My friend is a " + ulsterCourses[(Math.floor(Math.random() * ulsterCourses.length))] + " student at " + universities[(Math.floor(Math.random() * universities.length))]);