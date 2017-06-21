import React, { Component } from 'react';
import './App.css';
import Vehicles from'./Vehicles.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Show Room</h1>
        </div>
        <div className="App-intro">
          <Vehicles />
        </div>
      </div>
    );
  }
}

export default App;
