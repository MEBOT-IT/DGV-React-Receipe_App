import React, { useEffect } from 'react';
import Counter from './Counter'
import "./Counter.css"

const ValueCounter = () => {
  useEffect(() => {
    const valueDisplays = document.querySelectorAll(".num");
    const interval = 10000;

    valueDisplays.forEach((valueDisplay) => {
      const startValue = 0;
      const endValue = parseInt(valueDisplay.getAttribute("data-val"), 10);
      const duration = Math.floor(interval / endValue);

      let current = startValue;
      const counter = setInterval(() => {
        current += 1;
        valueDisplay.textContent = current;

        if (current === endValue) {
          clearInterval(counter);
        }
      }, duration);

      return () => {
        clearInterval(counter);
      };
    });
  }, []);
  <Counter/>

  return (
    // Your JSX for the component, which may include the HTML structure you provided earlier
    <div className="counter_wrapper">
      {/* Your containers */}
    </div>
  );
};

export default ValueCounter;
