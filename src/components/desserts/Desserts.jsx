import DessertComp from "./DessertComp";
import data from "../../data.json";
import { useState } from "react";
import CartLayout from "../cart/CartLayout";

import { useCart } from "../cart/CartContext";

export default function Desserts() {
  const { addToCart, removeFromCart } = useCart();
  const [dessertStates, setDessertStates] = useState({}); // Object to track each dessert's state

  const handleClick = (dessert) => {
    addToCart(dessert);
    setDessertStates((prev) => ({
      ...prev,
      [dessert.name]: {
        count: (prev[dessert.name]?.count || 0) + 1,
        active: false,
      },
    }));
  };

  const handleRemove = (dessert) => {
    removeFromCart(dessert);
    setDessertStates((prev) => {
      const currentCount = prev[dessert.name]?.count || 0;
      return {
        ...prev,
        [dessert.name]: {
          count: Math.max(0, currentCount - 1), // Decrease count without going negative
          active: currentCount <= 1, // Set active to true if count is 0 after removal
        },
      };
    });
  };

  const dessertList = data.map((dessert) => {
    const { count = 0, active = true } = dessertStates[dessert.name] || {};

    return (
      <DessertComp
        key={dessert.name}
        image={dessert.image.thumbnail}
        name={dessert.name}
        category={dessert.category}
        price={dessert.price}
        count={count}
        active={active}
        addCount={() => handleClick(dessert)} // Call with specific dessert
        lessCount={() => handleRemove(dessert)} // Call with specific dessert
      />
    );
  });

  return (
    <div className="bg-orange-100">
      <div className="container max-w-screen-xl mx-auto">
        <div className="py-16 grid grid-cols-4">
          <div className="col-span-3">
            <h1 className="text-3xl font-bold pb-8">Desserts</h1>
            <div className="w-full">
              <div className="grid grid-cols-3">{dessertList}</div>
            </div>
          </div>
          <div className="col-span-1">
            <CartLayout  />
          </div>
        </div>
      </div>
    </div>
  );
}
