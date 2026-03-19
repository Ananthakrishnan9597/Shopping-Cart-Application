import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { CartProvider } from "./components/CartContext";
import Cart from "./pages/Cart";

function App() {
  const [keyword, setKeyword] = useState("")
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Header setKeyword={setKeyword} />
          <Routes>
            <Route path="/" element={<Home keyword={keyword} />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  )
}

export default App
