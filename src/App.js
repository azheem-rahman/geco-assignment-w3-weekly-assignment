import React, { Component } from "react";
import Employee from "./Employee";
import employeeData from "./employeeData";

import Grocery from "./Grocery";
import groceryData from "./groceryData";

import Car from "./Car";

class App extends Component {
  state = {
    groceryData: groceryData,
    car: {
      make: "Toyota",
      model: "Camry",
      year: 2022,
      color: "Silver",
      mileage: 15000,
    },
  };

  render() {
    return (
      <>
        <h2>Employee Data</h2>
        <section>
          <div style={{ border: "solid 1px black" }}>
            <Employee employeeData={employeeData} />
          </div>
        </section>

        <h2>Grocery Data</h2>
        <section>
          <div style={{ border: "solid 1px red" }}>
            <Grocery groceryData={this.state.groceryData} />
          </div>
        </section>

        <h2>Passing Object Data</h2>
        <section>
          <div style={{ border: "solid 1px blue" }}>
            <Car car={this.state.car} />
          </div>
        </section>
      </>
    );
  }
}

export default App;
