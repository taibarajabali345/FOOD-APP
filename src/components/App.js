import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Menu from "./Menu";
import About from "./About";
import Contact from "./Contact";
import "./App.css";

function App() {
  return (
    <div>
      <header className="navbar">
        <nav>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu/:category" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> {/* Ensure this is accessible */}
      </Routes>
    </div>
  );
}

export default App;




