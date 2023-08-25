import React, { Component } from "react";

class Car extends Component {
  render() {
    const { car } = this.props;
    return (
      <div>
        <ul style={{ listStyleType: "none" }}>
          <li>Brand: {car.make}</li>
          <li>Model: {car.model}</li>
          <li>Year: {car.year}</li>
          <li>Colour: {car.color}</li>
          <li>Mileage: {car.mileage}</li>
        </ul>
      </div>
    );
  }
}

export default Car;
