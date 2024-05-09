import React, { useState } from "react";

const BackgroundChanger = () => {
  const [bgColor, setBgColor] = useState("bg-gray-200");

  const changeBackground = (color) => {
    setBgColor(color);
  };

  return (
    <div className={`min-h-screen ${bgColor} flex items-center justify-center`}>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Background Changer</h1>
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-2"
            onClick={() => changeBackground("bg-blue-200")}
          >
            Blue
          </button>
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded mr-2"
            onClick={() => changeBackground("bg-green-200")}
          >
            Green
          </button>
          <button
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded"
            onClick={() => changeBackground("bg-yellow-200")}
          >
            Yellow
          </button>
        </div>
      </div>
    </div>
  );
};

export default BackgroundChanger;
