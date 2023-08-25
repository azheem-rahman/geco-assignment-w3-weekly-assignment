import React, { Component } from "react";
import Employee from "./Employee";
import employeeData from "./employeeData";

import Grocery from "./Grocery";
import groceryData from "./groceryData";

class App extends Component {
  state = {
    groceryData: groceryData,
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
      </>
    );
  }
}

export default App;
