import React,{useState}  from "react";
function ColorPicker() {
  const [color, setColor] = useState("#FFFFFF");

function handleChange (event){
    setColor(event.target.value);
  }

  return (
    <div className="color-picker">
        <h2>Color Picker</h2>
        <div className="color-display" style={{ backgroundColor: color}}>
          <p> select color : {color}</p>

        </div>
        <label > select a color:</label>
      <input type="color" value={color} onChange={handleChange} />
    </div>
  );
}

export default ColorPicker;
