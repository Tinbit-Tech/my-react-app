import React, { useState, useEffect } from 'react';
function UseEffect(){
const [width, setWidth] = useState(window.innerWidth);
const [height, setHeight] = useState(window.innerHeight);

useEffect(() => {
    window.addEventListener('resize', handleResize);
    console.log("event listener added");
    return () => {
        window.removeEventListener('resize', handleResize);
        console.log("event listener removed");
    };

}, []);
useEffect(() => {
    document.title = `Width: ${width}, Height: ${height}`;
}, [width, height]);

function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);

}
return (
    <div>
        <h1>Window Size</h1>
        <p>window Width: {width}px</p>
        <p>window Height: {height}px</p>
    </div>
);
}

export default UseEffect