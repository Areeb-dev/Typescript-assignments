abstract class Vehicle {
    constructor(
        protected readonly make: string,
        protected readonly model: string,
        protected readonly year: number,
        protected rented = false
    ) { }

    abstract rentalRate(): number;

    getMake(): string {
        return this.make;
    }

    getModel(): string {
        return this.model;
    }

    getYear(): number {
        return this.year;
    }

    isRented(): boolean {
        return this.rented;
    }

    setRented(rented: boolean): void {
        this.rented = rented;
    }

    rent(): void {
        if (this.rented) {
            console.log(`${this.make} ${this.model} ${this.year} is already rented.`);
        } else {
            this.rented = true;
            console.log(`${this.make} ${this.model} ${this.year} has been rented.`);
        }
    }

    return(): void {
        if (this.rented) {
            this.rented = false;
            console.log(`${this.make} ${this.model} ${this.year} has been returned.`);
        } else {
            console.log(`${this.make} ${this.model} ${this.year} was not rented.`);
        }
    }
}

class Car extends Vehicle {
    constructor(
        make: string,
        model: string,
        year: number,
        private readonly numDoors: number,
        private readonly numSeats: number,
        rented = false
    ) {
        super(make, model, year, rented);
    }

    rentalRate(): number {
        // Implement rental rate calculation for cars here
        return 500;
    }

    getNumDoors(): number {
        return this.numDoors;
    }

    getNumSeats(): number {
        return this.numSeats;
    }
}

class Truck extends Vehicle {
    constructor(
        make: string,
        model: string,
        year: number,
        private readonly cargoCapacity: number,
        rented = false
    ) {
        super(make, model, year, rented);
    }

    rentalRate(): number {
        return 1200;
    }

    getCargoCapacity(): number {
        return this.cargoCapacity;
    }
}

class MotorBike extends Vehicle {
    constructor(make: string, model: string, year: number, private readonly engineSize: number, rented = false) {
        super(make, model, year, rented);
    }

    rentalRate(): number {
        return 200;
    }

    getEngineSize(): number {
        return this.engineSize;
    }
}

const car1 = new Car('Honda', 'City', 2011, 4, 5, false);
console.log(`CAR ==> ${car1.rent()}`);
console.log(`CAR ==> ${car1.rent()}`);
console.log(`CAR ==> ${car1.return()}`);

const truck1 = new Truck('Ford', 'F-150', 2011, 1800, false);
console.log(`TRUCK ==> ${truck1.rent()}`);
console.log(`TRUCK ==> ${truck1.return()}`);

const motorcycle1 = new MotorBike('Suzuki', 'CG-110', 2017, 110, false);
console.log(`motorcycle ==> ${motorcycle1.rent()}`);
console.log(`motorcycle ==> ${motorcycle1.rent()}`);
console.log(`motorcycle ==> ${motorcycle1.return()}`)