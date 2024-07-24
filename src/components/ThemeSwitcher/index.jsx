import React, { useState, useEffect } from "react";
import { IoIosMoon } from "react-icons/io";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("light");

  // Load saved theme from local storage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.body.setAttribute("data-theme", savedTheme);
  }, []);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div>
      <button onClick={toggleTheme} className="bg-transparent p-3 border-0">
        <div className="d-flex justify-content-center align-items-center">
          <IoIosMoon className="text-switcher" />
          <p className="mb-0 ms-1 fw-semibold text-switcher">
            {theme === "light" ? "Dark" : "Light"} Mode
          </p>
        </div>
      </button>
    </div>
  );
};

export default ThemeSwitcher;
