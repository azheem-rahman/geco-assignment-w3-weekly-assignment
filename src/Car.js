import React, { Component } from "react";
import PropTypes from "prop-types";

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

// Prop Validation
Car.propTypes = {
  make: PropTypes.string,
  model: PropTypes.string,
  year: PropTypes.number,
  color: PropTypes.string,
  mileage: PropTypes.number,
};

export default Car;
