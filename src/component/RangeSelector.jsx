import React, { useState } from "react";

const RangeSelector = ({ isDarkMode }) => {
  // State to track the selected range
  const [startRange, setStartRange] = useState(1);
  const [endRange, setEndRange] = useState(60);

  // Update start and end range handlers
  const handleStartChange = (e) => {
    setStartRange(parseInt(e.target.value));
  };

  const handleEndChange = (e) => {
    setEndRange(parseInt(e.target.value));
  };

  // Determine styling based on theme
  const themeStyles = isDarkMode
    ? {
        container: "bg-gray-900 text-gray-100",
        label: "text-gray-300",
        select: "bg-gray-800 text-white border-gray-600",
      }
    : {
        container: "bg-gray-100 text-gray-900",
        label: "text-gray-700",
        select: "bg-white text-gray-900 border-gray-300",
      };

  return (
    <div
      className={`px-4 py-2 flex items-center gap-2`}
    >
      
      <div className="ml-3">
      <select
        className={`border rounded px-2 py-1 focus:outline-none transition-all duration-300 ${themeStyles.select}`}
        value={startRange}
        onChange={handleStartChange}
      >
        {[...Array(60).keys()].map((num) => (
          <option key={num + 1} value={num + 1}>
            {num + 1}
          </option>
        ))}
      </select>
      <span className={`${themeStyles.label}`}>~</span>
      <select
        className={`border rounded px-2 py-1 focus:outline-none transition-all duration-300 ${themeStyles.select}`}
        value={endRange}
        onChange={handleEndChange}
      >
        {[...Array(60).keys()].map((num) => (
          <option key={num + 1} value={num + 1}>
            {num + 1}
          </option>
        ))}
      </select>
      </div>
    </div>
  );
};

export default RangeSelector;
