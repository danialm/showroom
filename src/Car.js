import Vehicle from './Vehicle.js';

class Car extends Vehicle {
  constructor(name) {
    super(name);

    this.wheels = 4;
    this.seats = 5;
    this.type = 'car';
  }
}

export default Car;
