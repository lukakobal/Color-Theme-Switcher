import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const themes = ["light", "dark", "blue", "green"];

  const [theme, setTheme] = useState("light");

  return (
    <div className={`app ${theme}`}>
      <h1>Color Theme Switcher 🎨</h1>

      <div className="buttons">
        {themes.map((t) => (
          <button
            key={t}
            onClick={() => setTheme(t)}
            className={theme === t ? "active" : ""}
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  );
}
