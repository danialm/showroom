import Vehicle from './Vehicle.js';

class Motorcycle extends Vehicle {
  constructor(name) {
    super(name);

    this.wheels = 2;
    this.seats = 1;
    this.type = 'motorcycle';
  }
}

export default Motorcycle;
