import React, { useState, useEffect } from "react";
import "./UseEffect/effects.css";
const UseEffectForTitle = () => {
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    // Display an alert message when the component is mounted
    alert("Component is mounted");

    return () => {
      document.title = "React App";
    };
  }, []); // Empty dependency array ensures the effect runs only on mount

  useEffect(() => {
    document.title = `TitleCount: ${clickCount}`;
  }, [clickCount]);
  // Function to handle button click and update click count
  const handleButtonClick = () => {
    setClickCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Click Me</button>
      <h2>Count Displayer: {clickCount}</h2>
    </div>
  );
};

export default UseEffectForTitle;
