//the main function is a digital clock component that displays the current time in a 12-hour format with AM/PM.
// It uses React's useState and useEffect hooks to manage the time state and update it every second.

import React, { useState, useEffect } from 'react';

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  // Update the time every second
  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalID); // cleanup on unmount
  }, []);

  // Format time as 12-hour clock with leading zeros
  function formatTime(date) {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const meridiem = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
  }

  // Helper function to add leading zero
  function padZero(number) {
    return (number < 10 ? "0" : "") + number;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <div className="p-10 rounded-xl shadow-2xl bg-gray-900 border border-gray-700 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-blue-400 drop-shadow">Digital Clock</h1>
        <span className="text-4xl sm:text-6xl font-mono tracking-wider bg-black/30 px-6 py-3 rounded-lg border border-blue-500">
          {formatTime(time)}
        </span>
      </div>
    </div>
  );
}

export default DigitalClock;
