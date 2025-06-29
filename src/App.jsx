import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Header from "./Components/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <h1>Footer</h1>
    </div>
  );
}

export default App;
