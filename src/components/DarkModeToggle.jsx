// components/DarkModeToggle.jsx
import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

const DarkModeToggle = () => {
    const { darkMode, setDarkMode } = useContext(DarkModeContext);

    return (
        <button onClick={() => setDarkMode(!darkMode)} className="btn btn-secondary">
            {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
    );
};

export default DarkModeToggle;
