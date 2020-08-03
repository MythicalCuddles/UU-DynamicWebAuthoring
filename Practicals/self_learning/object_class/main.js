import { vehicles } from './vehicles.js';

// long loop
for(let i = 0; i < vehicles.length; i++) {
    vehicles[i].getVehicleDetails();
}

// reduced loop
vehicles.forEach(x => x.getVehicleDetails());

console.assert(false, "Wait, why is this false?!");