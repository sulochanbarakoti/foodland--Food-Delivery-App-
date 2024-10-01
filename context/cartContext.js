import { View, Text } from "react-native";
import React, { createContext } from "react";
import { menuList } from "../data/data";

export const CartContext = createContext();

const getCart = () => {
  let cart = {};
  for (let index = 1; index <= menuList.length; index++) {
    cart[index] = 0;
  }
  return cart;
};

const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = React.useState(getCart());

  const addToCart = (itemId) =>
    setCartItems((Prev) => ({ ...Prev, [itemId]: Prev[itemId] + 1 }));
  const removeFromCart = (itemId) =>
    setCartItems((Prev) => ({ ...Prev, [itemId]: Prev[itemId] - 1 }));

  const getTotalAmount = () => {
    let total = 0;
    for (const key in cartItems) {
      if (cartItems[key] > 0) {
        let itemInfo = menuList.find((i) => i.id === Number(key));
        total += itemInfo.price * cartItems[key];
      }
    }
    return total.toFixed(2);
  };

  const getTotalCart = () => {
    let total = 0;
    for (const key in cartItems) {
      if (cartItems[key] > 0) {
        total += cartItems[key];
      }
    }
    return total;
  };
  const contextValue = {
    getTotalAmount,
    getTotalCart,
    menuList,
    cartItems,
    addToCart,
    removeFromCart,
  };
  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
