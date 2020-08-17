// Enum to store room sizes
const room_sizes = {
    SINGLE: 'Single Bed Room',
    TWIN: 'Twin Bed Room',
    DOUBLE: 'Double Bed Room',
    STUDIO: 'Studio Bed Room',
    SUITE: 'Executive Suite Room'
}

class Room {
    constructor(room_size, room_cost_per_night) {
        this.size = room_size;
        this.cost = room_cost_per_night;
    }

    getRoomSize() {
        return this.size.value;
    }
}

export var available_rooms = [
    new Room(room_sizes.SINGLE, 19.99),
    new Room(room_sizes.TWIN, 29.99),
    new Room(room_sizes.DOUBLE, 34.99),
    new Room(room_sizes.STUDIO, 39.99),
    new Room(room_sizes.SUITE, 69.99)
];