import React, { createContext, useState, useEffect, Children } from 'react';

export const CartContext = createContext()

const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);
  const addToCart = () => {
    console.log('addet to cart');
  }
  return (<CartContext.Provider value={{ addToCart }}>{children}</CartContext.Provider>);
};

export default CartProvider;
