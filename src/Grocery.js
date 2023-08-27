import React from "react";
import PropTypes from "prop-types";

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

// Prop Validation
Grocery.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  category: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
};

export default Grocery;
