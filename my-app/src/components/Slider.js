import React, { useState, useEffect } from 'react';
import './Slider.css';

function Slider() {
  const [currentLine, setCurrentLine] = useState(0);
  const lines = [
    "Now in Sikandra Rao + free Delivery",
    "We Provide Fresh Milk in Glass Bottles",
    "for Preserving Freshness and Nutritional Values"
  ];
  useEffect(() => {
    // Check if current line is the last line
    if (currentLine === lines.length - 1) {
      // If last line, wait 3 seconds and then reset to first line
      const timeout = setTimeout(() => {
        setCurrentLine(0);
      }, 3000);
      return () => clearTimeout(timeout);
    } else {
      // If not last line, wait 3 seconds and move to next line
      const timeout = setTimeout(() => {
        setCurrentLine(prevLine => prevLine + 1);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [currentLine, lines]);

  return (
    <div className="slider-container">
      <ul className="slider-list">
        <li className="active">
          <div className="slide-content">{lines[currentLine]}</div>
        </li>
      </ul>
    </div>
  );
}

export default Slider;
