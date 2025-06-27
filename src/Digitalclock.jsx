import React, { useState, useEffect } from 'react';
function Digitalclock(){
   const [time, setTime] = useState(new Date());

   useEffect(() => {
       const intervalID = setInterval(() => {
           setTime(new Date());
       }, 1000);
       return () => {
           clearInterval(intervalID);
       };
   }, []);

   function formatTime(date) {
       let hours = date.getHours();
       const minutes = date.getMinutes();
       const seconds = date.getSeconds();
       const meridiem = hours >= 12 ? 'PM' : 'AM';
       hours = hours % 12 || 12;
       return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
   }
   function padZero(number) {
       return (number < 10 ? "0" : "") + number;
   }
   return (
       <div className='Digitalclock'>
         <div className='Digitalclock-content'>
           <h1>Digital Clock</h1>
          <span>{formatTime(time)}</span>
          </div>
       </div>
   );
}
export default Digitalclock