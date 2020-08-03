class Vehicle {
    constructor(make, model, color) {
        this.make = make;
        this.model = model;
        this.color = color;
    }

    getVehicleDetails() {
        console.dir(this);
    }
}

export var vehicles = [
    new Vehicle("Tesla", "S", "white"),
    new Vehicle("Tesla", "3", "white"),
    new Vehicle("Tesla", "X", "white"),
    new Vehicle("Tesla", "Y", "white"),
];