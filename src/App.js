import React, { Component } from "react";
import employeeData from "./employeeData";
import Employee from "./Employee";

export default class App extends Component {
  render() {
    return (
      <>
        Hello World!
        <Employee employeeData={employeeData} />
      </>
    );
  }
}
