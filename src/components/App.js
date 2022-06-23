import React, { Component } from "react";
import "../App.css";
import Header from "./Header.js";
import Car from "./Car";
import { initialCars } from "../carsData";
import { additionalCars } from "../carsData";
import AddCar from "./AddCar";
import DeleteCar from "./DeleteCar";
import Card from "./Card";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cars: initialCars,
    };
    this.loadAdditionalCars = this.loadAdditionalCars.bind(this);
    this.addCarToGallery = this.addCarToGallery.bind(this);
  }

  loadAdditionalCars() {
    var currentCars = { ...this.state.cars };
    var newCars = Object.assign(currentCars, additionalCars);
    this.setState({ cars: newCars });
  }

  addCarToGallery(car) {
    var ts = Date.now();
    var newCar = {};
    newCar["car" + ts] = car;
    var currentCars = { ...this.state.cars };
    var newCars = Object.assign(currentCars, newCar);
    this.setState({ cars: newCars });
  }

  render() {
    return (
      <div className="App">
        <Header text="Are you interested to buy A car?" />
        <p className="App-intro">
          Different type of vehicles with best price.
        </p>
        <div className="cars">
          {Object.keys(this.state.cars).map((key) => (
            <Car key={key} meta={this.state.cars[key]} />
          ))}
        </div>
        <div className="add-cars">
          <button onClick={this.loadAdditionalCars}>Load more...</button>
        </div>
        <AddCar addCar={this.addCarToGallery} />
        <DeleteCar addCar={this.deleteCarToGallery} />
      </div>
    );
  }
}

export default App;
