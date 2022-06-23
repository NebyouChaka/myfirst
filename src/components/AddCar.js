import React, { Component } from "react";

class AddCar extends Component {
  addNewCar(e) {
    e.preventDefault();
    const car = {
      model: this.model.value,
      picture: this.picture.value,
      description: this.description.value,
      engine: this.engine.value,
      price: this.price.value
    };
    this.props.addCar(car);
  }

  render() {
    return (
      <form className="car-form" onSubmit={(e) => this.addNewCar(e)}>
        <p className="add">Add a Car</p>
        <input
          ref={(input) => (this.model = input)}
          type="text"
          placeholder="Model"
        />
        <input
          ref={(input) => (this.picture = input)}
          type="text"
          placeholder="Picture"
        />
        <input
          ref={(input) => (this.engine = input)}
          type="text"
          placeholder="Engine"
        />
        <textarea
          ref={(input) => (this.description = input)}
          placeholder="Description"
        ></textarea>
        <input
          ref={(input) => (this.price = input)}
          type="text"
          placeholder="Price"
        />
        <button type="submit">Add Car</button>
      </form>
    );
  }
}

export default AddCar;
