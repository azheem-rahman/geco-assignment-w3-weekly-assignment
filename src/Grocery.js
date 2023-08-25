import React from "react";

const Grocery = (props) => {
  const { groceryData } = props;

  return (
    <div>
      {groceryData.map((item) => {
        return (
          <ul key={item.id}>
            <li>Name: {item.name}</li>
            <li>Category: {item.category}</li>
            <li>Price: ${item.price}</li>
            <li>Quantity: {item.quantity}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default Grocery;
