import React from "react";
import CardContext from "./cart-context";

const CartProvider = (props) => {
  const addItem = (item) => {};
  const removeItem = (id) => {};

  const cardContext = {
    items: [],
    totalAmount: 0,
    addItem: addItem,
    removeItem: removeItem,
  };
  return (
    <CardContext.Provider value={cardContext}>
      {props.children}
    </CardContext.Provider>
  );
};

export default CartProvider;
