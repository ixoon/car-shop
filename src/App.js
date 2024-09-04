import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Shop from "./pages/shop/shop";
import Cart from "./pages/cart/cart";
import { CartProvider } from "./context/cartContext";

function App() {
  return (
    <div>
      <CartProvider>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
