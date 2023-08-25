import React from "react";

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
      {employeeData.employees.map((employee) => {
        return (
          <div key={employee.id}>
            <img src={employee.img} alt="employee-photo" />
            <div style={{ border: "solid 1px black", width: "20%" }}>
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

export default Employee;
