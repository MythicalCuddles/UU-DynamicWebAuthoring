// Main JS by Melissa Brennan

// Rooms enum and class to store information about the available rooms.

const room_sizes = {
    SINGLE: 'Single Bed Room',
    TWIN: 'Twin Bed Room',
    DOUBLE: 'Double Bed Room',
    SUITE: 'Executive Suite Room'
}

const rooms = [
    [ room_sizes.SINGLE, 14.99 ],
    [ room_sizes.TWIN, 24.99 ],
    [ room_sizes.DOUBLE, 24.99 ],
    [ room_sizes.SUITE, 64.99 ]
];

// Reservations that the user can create, each object to be added to the users account.
class Reservation {
    constructor(checkInDate, checkOutDate) {
        this.checkInDate = checkInDate;
        this.checkOutDate = checkOutDate;
    }

    addOwner(userEmail) {
        this.ownerEmail = userEmail;
    }
    getOwner() {
        return this.ownerEmail;
    }

    setCheckInDate(checkIn) {
        this.checkInDate = checkIn;
    }
    setCheckOutDate(checkOut) {
        this.checkOutDate = checkOut;
    }

    getCheckInDate() {
        return this.checkInDate;
    }
    getCheckOutDate() {
        return this.checkOutDate;
    }

    setRoom(roomIndex) {
        this.room = roomIndex;
    }
    getRoomDetails() {
        return rooms[this.room][0];
    }
    getRoomCostPerNight() {
        return rooms[this.room][1];
    }

    static fromJSON(serializedJSON) {
        return Object.assign(new Reservation(), JSON.parse(serializedJSON));
    }
}

// User class to store and obtain users information.
class User {
    constructor (forename, surname, email, password) {
        this.forename = forename;
        this.surname = surname;
        this.email = email;
        this.password = password;
    }

    setForename(forename) {
        this.forename = forename;
    }
    setSurname(surname){
        this.surname = surname;
    }
    setEmail(email) {
        this.email = email;
    }
    setPassword(password) {
        this.password = password;
    }

    getForename() {
        return this.forename;
    }
    getSurname() {
        return this.surname;
    }
    getEmail() {
        return this.email;
    }
    getPassword() {
        return this.password;
    }

    static fromJSON(serializedJSON) {
        return Object.assign(new User(), JSON.parse(serializedJSON));
    }
}

/* end of classes */

/* Login Page */
function showLogin() {
    document.getElementById("loginToAccount").style.display = "";
    document.getElementById("createAccount").style.display = "none";
}

function showCreateAccount() {
    document.getElementById("loginToAccount").style.display = "none";
    document.getElementById("createAccount").style.display = "";    
}

function createAccount() {
    var inputForename = document.getElementById("forename").value;
    var inputSurname = document.getElementById("surname").value;
    var inputEmail = document.getElementById("caEmail").value;
    var inputPassword = document.getElementById("caPassword").value;

    // Check for empty fields
    if(!inputForename) {
        alert("Please enter in your forename");
        document.getElementById("forename").focus();
        return;
    }
    if(!inputSurname) {
        alert("Please enter in your surname");
        document.getElementById("surname").focus();
        return;
    }
    if(!inputEmail) {
        alert("Please enter in your email");
        document.getElementById("caEmail").focus();
        return;
    }
    if(!caPassword) {
        alert("Please enter in a password");
        document.getElementById("caPassword").focus();
        return;
    }

    // Check to see if email is valid
    if(!validEmail(inputEmail)) {
        alert("Please enter in a valid email address");
        document.getElementById("caEmail").focus();
        return;
    }

    // Check password length
    if(inputPassword < 10) {
        alert("Please enter 10 or more characters in the password field");
        document.getElementById("caPassword").focus();
        return;
    }

    // Check if email address is already in use.
    if(window.localStorage.getItem(inputEmail) === null) {
        var user = new User(inputForename, inputSurname, inputEmail, inputPassword);
        setCookieData("email", inputEmail);
        window.localStorage.setItem(inputEmail, JSON.stringify(user));
        
        window.location = "./reservations.html";
    }
    else {
        alert("That email is already in use. Try logging into the account or use a different email.");
    }
}

function login() {
    var inputEmail = document.getElementById("lEmail").value;
    var inputPassword = document.getElementById("lPassword").value;

    let storageJson = window.localStorage.getItem(inputEmail)
    var storedUser = User.fromJSON(storageJson);

    // Check to see if email is valid
    if(!validEmail(inputEmail)) {
        alert("Please enter in a valid email address");
        document.getElementById("lEmail").focus();
        return;
    }

    if(storageJson === null) {
        alert("That user does not exist. Try creating an account.");
        return false;
    }

    if(inputEmail == storedUser.getEmail())
    {
        if(inputPassword == storedUser.getPassword()) {
            // User has logged in.
            setCookieData("email", inputEmail);
            window.location = "./reservations.html";
        }
        else {
            document.getElementById("lPassword").focus();
            alert("Invalid password. Please try again.");
        }
    }
    else {
        document.getElementById("lEmail").focus();
        alert("Invalid email. Please try again.")
    }
}

function validEmail(email) { 
    if(!email) {
        return false;
    }

    // find the location of the @ symbol in the input after the first character.
    var atLoc = email.indexOf("@", 1);
    // find the location of a dot (.) after two characters after the location of the @ symbol. 
    var dotLoc = email.indexOf(".", atLoc+2);
    // get the length of the input.
    var length = email.length;

    // if the @ symbol is present; and
    // a dot (.) after the @ symbol is present; and
    // the email has a TLD ending (top level domain)
    if(atLoc > 0 && dotLoc > 0 && length > dotLoc+2) {
        return true;
    }
    else {
        return false;
    }
}

function loginOnLoad() {
    var email = getCookie("email");
    
    if(!email) {
        return;
    }
    else {
        window.location = "./reservations.html";
    }
}

function logout() {
    deleteCookie("email");
}

/* Reservations page */
function reservationsOnLoad() {
    var email = getCookie("email");
    
    if(!email) {
        window.location = "./login.html";
    }

    var reservations = getAllStoredReservations();

    var reservationTable = document.getElementById("reservationsTable");
    var userEmail = getCookie("email");

    if(reservations.length == 0) {
        let tRow = reservationTable.insertRow(-1);
        let rCell = tRow.insertCell(0);
        rCell.colSpan = 2;
        rCell.innerHTML = "There are no reservations under your account. Why not create a new reservation?";
    }
    else {
        for(let i = 0; i < reservations.length; i++) {
            if(reservations[i].getOwner() == userEmail) {
                var tRow = reservationTable.insertRow(-1);
                var rCell1 = tRow.insertCell(0);
                rCell1.innerHTML = "<strong>Reservation #" + (i + 1) + "</strong>";
                rCell1.colSpan = 2;

                tRow = reservationTable.insertRow(-1);
                rCell1 = tRow.insertCell(0);
                rCell2 = tRow.insertCell(1);
                rCell1.innerHTML = "Checkin Date: ";
                rCell2.innerHTML = reservations[i].getCheckInDate();

                tRow = reservationTable.insertRow(-1);
                rCell1 = tRow.insertCell(0);
                rCell2 = tRow.insertCell(1);
                rCell1.innerHTML = "Checkout Date: ";
                rCell2.innerHTML = reservations[i].getCheckOutDate();

                let duration = calculateDuration(reservations[i].getCheckInDate(), reservations[i].getCheckOutDate());
                tRow = reservationTable.insertRow(-1);
                rCell1 = tRow.insertCell(0);
                rCell2 = tRow.insertCell(1);
                rCell1.innerHTML = "Duration: ";
                rCell2.innerHTML = duration + " night(s)";

                tRow = reservationTable.insertRow(-1);
                rCell1 = tRow.insertCell(0);
                rCell2 = tRow.insertCell(1);
                rCell1.innerHTML = "Room Size: ";
                rCell2.innerHTML = reservations[i].getRoomDetails();

                let costPerNight = reservations[i].getRoomCostPerNight();
                tRow = reservationTable.insertRow(-1);
                rCell1 = tRow.insertCell(0);
                rCell2 = tRow.insertCell(1);
                rCell1.innerHTML = "Cost Per Night: ";
                rCell2.innerHTML = "£" + costPerNight;

                let totalCost = calculateTotalCost(costPerNight, duration);
                tRow = reservationTable.insertRow(-1);
                rCell1 = tRow.insertCell(0);
                rCell2 = tRow.insertCell(1);
                rCell1.innerHTML = "Total Cost: ";
                rCell2.innerHTML = "£" + totalCost;
                
                tRow = reservationTable.insertRow(-1);
                rCell1 = tRow.insertCell(0);
                rCell1.colSpan = 2;
            }
        }
    }
}

function getAllStoredReservations() {
    var reservations = new Array();

    for(let a in localStorage) {
        //console.log(a + " = " + localStorage[a]);
        if(a.includes("reservation") && !a.includes("@")) {
            let storageJson = window.localStorage.getItem(a)
            let storedReservation = Reservation.fromJSON(storageJson);

            reservations.push(storedReservation);
        }
    }

    return reservations;
}

/* Math Functions */

function calculateDuration(earliestDate, latestDate) {
    var date1 = new Date(earliestDate);
    var date2 = new Date(latestDate);

    var timeDiff = Math.abs(date2 - date1);
    var duration = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    return duration;
}

function calculateTotalCost(pricePerNight, duration) {
    return pricePerNight * duration;
}

/* New Reservation */
var user_reservation, setDates = false, setRoom = false;

function newReservationOnLoad() {
    user_reservation = new Reservation();

    // Add elements to the room size select box.
    var selectRoomSize = document.getElementById('roomSize');
    //console.table(rooms); // debugging

    for(let i = 0; i < rooms.length; i++) {
        let option = document.createElement('option');
        let roomString = rooms[i][0] + " (£" + rooms[i][1] + "/each night)";
        option.appendChild(document.createTextNode(roomString));
        option.value = roomString;
        option.id = i;
        selectRoomSize.appendChild(option);
    }
}

function checkDates() {
    var currentDate = new Date(); // Get todays date to compare with
    currentDate = currentDate.toISOString().substring(0, 10);

    // Get the date the user selected as a checkin date.
    var checkInDate = document.getElementById("checkInDate").value;
    //checkInDate = new Date(checkInDate);

    // Get the date the user selected as a checkout date.
    var checkOutDate = document.getElementById("checkOutDate").value;
    //checkOutDate = new Date(checkOutDate);
    console.log("Current Date: " + currentDate);
    console.log("Check-In Date: " + checkInDate);
    console.log("Check-Out Date: " + checkOutDate);

    if(!checkInDate || !checkOutDate) {
        console.log("Waiting for all fields to be added.")
        return;
    }

    if(checkInDate > checkOutDate) {
        console.log("Caught Error: User has inputted checkin date after checkout date.");
        alert("Please enter a checking out date that is after the checking-in date.");
        document.getElementById("checkOutDate").focus();
        setDates = false;
        return;
    }

    if(checkInDate < currentDate) {
        console.log("Caught Error: User has inputted checkin date in the past.");
        alert("Please enter a checking in date that is today or after todays date.");
        document.getElementById("checkInDate").focus();
        setDates = false;
        return;
    }

    user_reservation.setCheckInDate(checkInDate);
    user_reservation.setCheckOutDate(checkOutDate);

    console.table(user_reservation);
    setDates = true;
    
    updateConfirmation();
}

function roomSelected() {
    var optionElement = document.getElementById("roomSize");
    var selectedIndex = optionElement.options[optionElement.selectedIndex].id;
    var selectedOption = rooms[selectedOption];

    user_reservation.setRoom(selectedIndex);
    setRoom = true;

    updateConfirmation();
}

function allInfoEntered() {
    if((setDates) && (setRoom)){
        return true;
    }

    return false;
}


function updateConfirmation() {
    if(allInfoEntered()) {
        let duration = calculateDuration(user_reservation.getCheckInDate(), user_reservation.getCheckOutDate());
        let totalCost = calculateTotalCost(user_reservation.getRoomCostPerNight(), duration);
        document.getElementById("showRoomSize").innerHTML = user_reservation.getRoomDetails();
        document.getElementById("showCheckInDate").innerHTML = user_reservation.getCheckInDate();
        document.getElementById("showCheckOutDate").innerHTML = user_reservation.getCheckOutDate();
        document.getElementById("showDuration").innerHTML = duration + " nights";
        document.getElementById("showCostPerNight").innerHTML = "£" + user_reservation.getRoomCostPerNight();
        document.getElementById("showTotalCost").innerHTML = "£" + totalCost;
    }
}

function createReservation() {
    if(allInfoEntered()) {
        var reservation = user_reservation;
        reservation.addOwner(getCookie("email"));
        // set a random number to the reservation - this would usually be autoassigned in a database as the unique id.
        let randomNum = Math.floor((Math.random() * 999999999) + 1);

        window.localStorage.setItem("reservation" + randomNum, JSON.stringify(reservation));

        alert("Reservation created successfully.");
        window.location = "./reservations.html";
    }
    else {
        alert("Please ensure that all fields are filled in with the required information.");
        return;
    }
}

/* Cookies */
function setCookieData(cookieName, cookieValue) {
    document.cookie = cookieName + "=" + cookieValue + ";";
}

function getCookie(cookieName) {
    var name = cookieName + "=";

    var cookieData = document.cookie.split(';');
    for(let i = 0; i < cookieData.length; i++) {
        let cookie = cookieData[i];

        while(cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }

        if(cookie.indexOf(name) == 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }

    return "";
}

function deleteCookie(cookieName) {
    document.cookie = cookieName + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}