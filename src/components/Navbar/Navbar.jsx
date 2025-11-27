import React, { useState } from "react";
import "./Navbar.css";
import DarkMode from "../DarkMode/DarkMode";

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
        <a href="#popular">
          Popular<span>🔥</span>
        </a>
        <a href="#top_rated">
          Top Rated <span>🌟</span>
        </a>
        <a href="#upcoming">
          Upcoming <span>🥳</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
