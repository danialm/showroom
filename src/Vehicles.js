import React, { Component } from 'react';
import Car from './Car.js';
import Motorcycle from './Motorcycle.js';

class Vehicles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      types: [{id: 1, name: 'motorcycle'}, {id: 2, name: 'car'}],
      newCar: {
        name: '',
        type: 'motorcycle'
      }
    }

    this.onFormChange = this.onFormChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onShowVehicle = this.onShowVehicle.bind(this);
  }

  onFormChange(event) {
    const newCar = Object.assign({}, this.state.newCar);

    if(event.target.name === 'name') {
      newCar.name = event.target.value;
    } else if(event.target.name === 'type') {
      newCar.type = event.target.value;
    }

    this.setState({newCar: newCar});
  }

  onFormSubmit(event) {
    event.preventDefault();

    let vehicleModle = this.state.newCar.type === 'car' ? Car : Motorcycle;
    const vehicle = new vehicleModle(this.state.newCar.name);
    const list = this.state.list.slice();
    list.push(vehicle);

    this.setState({list: list});
  }

  onShowVehicle(i){
    let vehicle = this.state.list[i];
    let message = [
      'I am ', vehicle.getName(), ', a ',
      vehicle.type, ' with ', vehicle.wheels,
      ' wheels, and ', vehicle.seats, ' seats!'
    ].join('');
    console.log(message)
  }

  render() {
    const list = this.state.list.map((v, i) => {
      return(
        <li key={i}>
          {v.getName()}
          <button onClick={() => { this.onShowVehicle(i) } }>Console Details</button>
        </li>
      );
    });

    const types = this.state.types.map((type) => {
      return <option key={type.id} value={type.name}>{type.name}</option>
    });

    return(
      <div>
        <div className="span6">
          <p>Add new vehicle:</p>
          <form onSubmit={this.onFormSubmit}>
            type:
            <select name='type'
                    onChange={this.onFormChange}
                    value={this.state.newCar.type}>
              {types}
            </select>
            <br />
            name:
            <input name='name'
                   type='text'
                   onChange={this.onFormChange}
                   value={this.state.newCar.name}/>
            <br />
            <input type='submit' name='Submit' value='Submit' />
          </form>
        </div>
        <div className="span6">
          {list.length > 0 ? <h2>Cars:</h2> : <br />}
          <ul>{list}</ul>
        </div>
      </div>
    )
  }
}

export default Vehicles;
