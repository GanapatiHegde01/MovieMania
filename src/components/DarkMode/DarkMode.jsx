import React from "react";

import "./DarkMode.css";
import Sun from "../../assets/Sun.svg";
import Moon from "../../assets/Moon.svg";

const DarkMode = () => {
  const setDarkTheme = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("data-theme", "dark");
  };
  const setLightTheme = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("data-theme", "light");
  };
  const setTheme = (e) => {
    if (e.target.checked) {
      setDarkTheme();
    } else {
      setLightTheme();
    }
  };

  const themeSelected = localStorage.getItem("data-theme");
  if (themeSelected === "dark") {
    setDarkTheme();
  } else {
    setLightTheme();
  }

  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={setTheme}
        defaultChecked={themeSelected!=="light"}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <img src={Sun} alt="" className="sun" />
        <img src={Moon} alt="" className="moon" />
      </label>
    </div>
  );
};

export default DarkMode;
