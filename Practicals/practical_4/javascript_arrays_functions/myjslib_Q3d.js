function onLoad() {
    var universities = new Array(2);
    universities[0] = "University of Ulster";
    universities[1] = "Queens University";

    var ulsterCampuses = new Array();
    ulsterCampuses.push("Jordanstown");
    ulsterCampuses.push("Belfast");
    ulsterCampuses.push("Magee");
    ulsterCampuses.push("Coleraine");

    var ulsterCourses = ["Software Engineering", "Computer Science", "Interactive Multimedia Design", "Information Communication Technology", "Computing Systems"];

    var universityDropdownElement = document.getElementById("universityDropdown");
    // attempting a loop to add elements from universities array to select dropdown box.
    for(let i = 0; i < universities.length; i++){
        let optionElement = document.createElement("option");
        optionElement.text = universities[i];
        universityDropdownElement.add(optionElement);
    }

    var campusDropdownElement = document.getElementById("ulsterCampusesDropdown");
    for(let i = 0; i < ulsterCampuses.length; i++) {
        let optionElement = document.createElement("option");
        optionElement.text = ulsterCampuses[i];
        campusDropdownElement.add(optionElement);
    }

    var coursesDropdownElement = document.getElementById("coursesDropdown");
    for(let i = 0; i < ulsterCourses.length; i++) {
        let optionElement = document.createElement("option");
        optionElement.text = ulsterCourses[i];
        coursesDropdownElement.add(optionElement);
    }
}

function displayInformation() {
    let usersName = document.getElementById("usersName").value;

    let userUniversityElement = document.getElementById("universityDropdown");
    let userUniversity = userUniversityElement.options[userUniversityElement.selectedIndex].value;

    let userCampusElement = document.getElementById("ulsterCampusesDropdown");
    let userCampus = userCampusElement.options[userCampusElement.selectedIndex].value;

    let userCourseElement = document.getElementById("coursesDropdown");
    let userCourse = userCourseElement.options[userCourseElement.selectedIndex].value;

    document.getElementById("userName").innerHTML = usersName + ", welcome to the JavaScript homepage!";
    document.getElementById("userInfo").innerHTML = "You're studying " + userCourse + " at " + userUniversity + " in the " + userCampus + " campus.";
}