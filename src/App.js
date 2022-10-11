import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
export default function App(props) {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
    } else {
      setMode("dark");
    }
  };
  return (
    <div className={`bg-${props.mode === "dark" ? "dark" : "light"}`}>
      <Navbar
        logo="My Logo"
        title="Text Formatter"
        mode={mode}
        toggleMode={toggleMode}
      />
      <TextForm boxtitle="write something here......." mode={mode} />
    </div>
  );
}
