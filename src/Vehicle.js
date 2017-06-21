class Vehicle {
  constructor(name) {
    this.state = { name: null, seats: null, wheels: null }

    this.setName(name);
  }

  setName(name) {
    this.state.name = name;
  }

  getName() {
    return this.state.name;
  }

  set seats(seats) {
    this.state.seats = seats;
  }

  set wheels(wheels) {
    this.state.wheels = wheels;
  }

  get seats() {
    return this.state.seats;
  }

  get wheels() {
    return this.state.wheels;
  }
}

export default Vehicle;
