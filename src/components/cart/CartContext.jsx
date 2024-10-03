import React, { useState, useContext, createContext } from "react";
import data from "../../data.json";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prev) => {
      const existingitem = prev.find((x) => x.name === item.name);
      if (existingitem) {
        return prev.map((x) =>
          x.name === item.name
            ? { ...existingitem, count: existingitem.count + 1 }
            : x
        );
      }

      return [...prev, { ...item, count: 1 }];
    });
  };

  const removeFromCart = (item) => {
    setCartItems((prev) => {
      const existingItem = prev.find((x) => x.name === item.name);
      if (existingItem) {
        if (existingItem.count > 1) {
          return prev.map((x) =>
            x.name === item.name ? { ...x, count: x.count - 1 } : x
          );
        } else {
          return prev.filter((x) => x.name !== item.name);
        }
      }
      return prev; 
    });
  };

  const deleteItem = (itemName) => {
    setCartItems((prev) => prev.filter((x) => x.name !== itemName));
  };

  return (
    <div>
      <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, data }}>
        {children}
      </CartContext.Provider>
    </div>
  );
};
