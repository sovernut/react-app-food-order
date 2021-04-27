import React, { useReducer } from "react";
import CardContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item); // immutable ways so react will know
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }
  if (action.type === "REMOVE") {
    const updatedItems = state.items.filter(item => item.id !== action.id)
    return defaultCartState
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

  const addItem = (item) => {
    dispatchCart({ type: "ADD", item: item });
  };
  const removeItem = (id) => {
    dispatchCart({ type: "REMOVE", id: id });
  };

  const cardContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
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
