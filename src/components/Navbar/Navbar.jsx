import React, { useState } from "react";
import "./Navbar.css";
import DarkMode from "../DarkMode/DarkMode";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [mode, setMode] = useState(false);
  const handleMode = () => {
    setMode(!mode);
      console.log(mode);

  };

  
  return (
    <nav className="navbar">
      <h1>MovieManiac</h1>
      <div className="navbar_links">
        <DarkMode onClick={handleMode} />
        <NavLink to={"/"}>Popular🔥</NavLink>
        <NavLink to={"/top_rated"}>Top Rated🌟</NavLink>
        <NavLink to={"/upcoming"}>Upcoming🥳</NavLink>
       
        
      </div>
    </nav>
  );
};

export default Navbar;
