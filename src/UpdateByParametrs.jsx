import React, { useState } from 'react';
function UpdateByParametrs(){
    const [car, setcar] = useState([]);
    const [newCar, setcaryear] = useState( new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar() {
        const newcar = {
            year: newCar,
            make: carMake,
            model: carModel
        };
        setcar(c => [...c, newcar]);
        setcaryear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }
function handleRemoveCar(index) {
        setcar(car.filter((_, i) => i !== index));
    }
    function handleYearChange(event) {
        setcaryear(event.target.value);
    }

    function handleMakeChange(event) {
        setCarMake(event.target.value);
    }

    function handleModelChange(event) {
        setCarModel(event.target.value);
    }   

    return (
        <div>
            <h2>Car List</h2>

            <ul>
                {car.map((car, index) => (
                    <li key={index}>
                        {car.year} {car.make} {car.model}
                        <button onClick={() => handleRemoveCar(index)}>Remove</button>
                    </li>
                ))}
            </ul>
            <input
                type="number"
                value={newCar}
                onChange={handleYearChange}/>
            <input
                type="text"
                value={carMake}
                onChange={handleMakeChange}
                placeholder="Enter car make"/>
            <input
                type="text"
                value={carModel}
                onChange={handleModelChange}
                placeholder="Enter car model"></input>
            <button onClick={handleAddCar}>Add Car</button>
        </div>
    );
}
export default UpdateByParametrs;