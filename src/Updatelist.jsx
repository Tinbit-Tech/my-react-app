import React, { useState } from 'react';    
function Updatelist(){
const [foods, setFoods] = useState(["Pizza", "Burger", "Pasta"]);

function handleAddFood() {
    const newFood = document.getElementById("Enter a new food item:").value;
    document.getElementById("Enter a new food item:").value = ""; // Clear the input field
     
       setFoods(f => [...f, newFood]);
}

function handleRemoveFood(index) {
    setFoods(foods.filter((_, i) => i !== index));
}

  
return(
    <div>
        <h2>Food List</h2>
        <ul>
            {foods.map((food, index) => 
                <li key={index} onClick={() => handleRemoveFood(index)}>
                    {food}
                </li>)}
                      </ul>
                 <input type="text" id="foodInput" placeholder="enter food name"/>
                    <button onClick={() => handleAddFood}>Add Food</button>
               
            
       
    </div>)
}
export default Updatelist