import React, { createContext, useState, useEffect, useContext } from "react";

// Create context
const DarkModeContext = createContext();

// Custom hook for easier consumption
export const useDarkMode = () => useContext(DarkModeContext);

// DarkModeProvider component
export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "enabled"
  );

  // Apply dark mode classes
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("bg-dark", "text-white");
    } else {
      document.body.classList.remove("bg-dark", "text-white");
    }
    localStorage.setItem("darkMode", darkMode ? "enabled" : "disabled");
  }, [darkMode]);

  return (
    <DarkModeContext.Provider
    value={{
      darkMode,
      setDarkMode,
      toggleDarkMode: () => setDarkMode((prevMode) => !prevMode),
    }}
  >
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>{children}</div>
  </DarkModeContext.Provider>
    
  );
};
