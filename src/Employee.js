import React from "react";
import PropTypes from "prop-types";

const Employee = (props) => {
  const { employeeData } = props;

  const handleHover = (event) => {
    const employeeId = parseInt(event.target.id);
    console.log(parseInt(event.target.id));
    employeeData.employees.map((employee) => {
      if (employeeId === employee.id) {
        return alert(JSON.stringify(employee));
      }
    });
  };

  return (
    <div>
      {employeeData.map((employee) => {
        return (
          <div key={employee.id}>
            <img src={employee.img} alt="employee-photo" />
            <div style={{ backgroundColor: "yellow", width: "20%" }}>
              <p
                id={employee.id}
                onMouseOver={handleHover}
                name={employee.fullName}
              >
                {employee.fullName}
              </p>
            </div>
            <p>{employee.designation}</p>
          </div>
        );
      })}
    </div>
  );
};

// Prop Validation
Employee.propTypes = {
  id: PropTypes.number,
  fullName: PropTypes.string,
  age: PropTypes.number,
  salary: PropTypes.number,
  designation: PropTypes.string,
  img: PropTypes.string,
  dept: PropTypes.string,
};

export default Employee;
