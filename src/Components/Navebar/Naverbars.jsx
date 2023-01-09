import React, { useState } from "react";
import "./Nave.css";
const Naverbars = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
    <span className="nav-logo">
        <img src="Assets/Group 114.png"/>
    </span>
    <div className={`nav-items ${isOpen && "open"}`}>
      <a style={{color:"black"}}>Home</a>
      <a >Service</a>
      <a >Pricing</a>
      <a >About Us</a>
      <a className="button-company" style={{color:"white"}}>Start a Company</a>
    </div>
    <div
      className={`nav-toggle ${isOpen && "open"}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="bar"></div>
    </div>
  </div>
  )
}
export default Naverbars
