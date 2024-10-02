import Desserts from "./components/desserts/Desserts";
import { CartProvider } from "./components/cart/CartContext";

import "./App.css";

function App() {
  return (
    <>
      <CartProvider>
        <Desserts />
      </CartProvider>
    </>
  );
}

export default App;
