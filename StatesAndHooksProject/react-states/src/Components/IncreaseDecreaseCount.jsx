// IncreaseDecreaseCount.js
import React, { useState } from "react";
import "./ClassStateExample/counter.css";

const IncreaseDecreaseCount = () => {
  // Using the useState hook to manage the click count state
  const [clickCount, setClickCount] = useState(0);

  // Function to increase the click count
  const increaseClick = () => {
    setClickCount((prevCount) => prevCount + 1);
  };

  // Function to decrease the click count
  const decreaseClick = () => {
    setClickCount((prevCount) => prevCount - 1);
  };

  // Function to reset the click count to 0
  const resetClick = () => {
    setClickCount(0);
  };

  return (
    <div>
      <p>Click Count: {clickCount}</p>

      <button onClick={increaseClick}>Increase</button>
      <button onClick={decreaseClick}>Decrease</button>
      <button onClick={resetClick}>Reset</button>
    </div>
  );
};

export default IncreaseDecreaseCount;
