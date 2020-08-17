import { available_rooms } from "./room.js";

class Reservation {
    constructor(checkInDate, checkOutDate) {
        this.checkInDate = checkInDate;
        this.checkOutDate = checkOutDate;
    }

    assignRoom() {
        
    }
}

export var user_reservations = [
    new Reservation(new Date(), new Date())
];