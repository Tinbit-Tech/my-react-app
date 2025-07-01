//Update state with new color main function is a color picker component that allows users to select a color and
// see the selected color displayed in a preview box. 
// It uses React's useState hook to manage the selected color state and updates the preview box background color 
// dynamically as the user selects a new color.


import React, { useState } from "react";

function Colorpic() {
   const [color, setColor] = useState("#FFFFFF");

   function handleChange(event) {
    setColor(event.target.value);      // Update state with new color
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-md w-full max-w-md text-center space-y-8">
        <h2 className="text-2xl font-bold text-gray-800"> Color Picker</h2>

        <div
          className="h-32 rounded-lg flex items-center justify-center border-2 border-gray-300"
          style={{ backgroundColor: color }}
        >
          <p className="text-lg font-medium text-white drop-shadow">
            Selected Color: {color}
          </p>
        </div>

        <label className="block text-gray-600 font-medium">
          Select a color:
        </label>

        <input
          type="color"
          value={color}
          onChange={handleChange}
          className="w-16 h-10 border-none cursor-pointer"
        />
      </div>
    </div>
  );
}

export default Colorpic;
