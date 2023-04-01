"use strict";
class Vehicle {
    constructor(make, model, year, rented = false) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.rented = rented;
    }
    getMake() {
        return this.make;
    }
    getModel() {
        return this.model;
    }
    getYear() {
        return this.year;
    }
    isRented() {
        return this.rented;
    }
    setRented(rented) {
        this.rented = rented;
    }
    rent() {
        if (this.rented) {
            console.log(`${this.make} ${this.model} ${this.year} is already rented.`);
        }
        else {
            this.rented = true;
            console.log(`${this.make} ${this.model} ${this.year} has been rented.`);
        }
    }
    return() {
        if (this.rented) {
            this.rented = false;
            console.log(`${this.make} ${this.model} ${this.year} has been returned.`);
        }
        else {
            console.log(`${this.make} ${this.model} ${this.year} was not rented.`);
        }
    }
}
class Car extends Vehicle {
    constructor(make, model, year, numDoors, numSeats, rented = false) {
        super(make, model, year, rented);
        this.numDoors = numDoors;
        this.numSeats = numSeats;
    }
    rentalRate() {
        // Implement rental rate calculation for cars here
        return 500;
    }
    getNumDoors() {
        return this.numDoors;
    }
    getNumSeats() {
        return this.numSeats;
    }
}
class Truck extends Vehicle {
    constructor(make, model, year, cargoCapacity, rented = false) {
        super(make, model, year, rented);
        this.cargoCapacity = cargoCapacity;
    }
    rentalRate() {
        return 1200;
    }
    getCargoCapacity() {
        return this.cargoCapacity;
    }
}
class MotorBike extends Vehicle {
    constructor(make, model, year, engineSize, rented = false) {
        super(make, model, year, rented);
        this.engineSize = engineSize;
    }
    rentalRate() {
        return 200;
    }
    getEngineSize() {
        return this.engineSize;
    }
}
const car1 = new Car('Honda', 'City', 2011, 4, 5, false);
console.log(`CAR ==> ${car1.rentalRate()}`);
console.log(`CAR ==> ${car1.rent()}`);
console.log(`CAR ==> ${car1.rent()}`);
console.log(`CAR ==> ${car1.return()}`);
const truck1 = new Truck('Ford', 'F-150', 2011, 1800, false);
console.log(`TRUCK ==> ${truck1.rent()}`);
console.log(`TRUCK ==> ${truck1.return()}`);
const motorcycle1 = new MotorBike('Suzuki', 'CG-110', 2017, 110, false);
console.log(`motorcycle ==> ${motorcycle1.rent()}`);
console.log(`motorcycle ==> ${motorcycle1.rent()}`);
console.log(`motorcycle ==> ${motorcycle1.return()}`);
//# sourceMappingURL=index.js.map