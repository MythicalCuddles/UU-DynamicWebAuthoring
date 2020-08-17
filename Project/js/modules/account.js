import { user_reservations } from './reservation.js';
import { available_rooms } from "./room.js";

class Account {
    constructor(forename, surname, email, password) {
        this.forename = forename;
        this.surname = surname;
        this.email = email;
        this.password = password;
    }

    printInfo() {
        console.log(this.forename + " " + this.surname);
    }
}