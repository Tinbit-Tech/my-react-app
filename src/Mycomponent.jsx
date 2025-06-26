import React, {useState} from 'react'; 
function Mycomponent(){

    const [name, setName] = useState("Gust");
    const [age, setAge] = useState("Gust Age");
    const [isEmployed, setIsEmployed] = useState(false);
    const updateName = () =>{
        setName("Tinbit");

    }
        const incrementAge = () => {
            setAge(age + 1);

        }
        const toggleEmployedstatus = () => {
            setIsEmployed(!isEmployed);
        }
    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName} > Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge} > IncrementAge Age</button>

             <p>Is employed: {isEmployed ? "yes" : "no"}</p>
            <button onClick={toggleEmployedstatus} > Toggle Employed Status</button>


        </div>
    );
}
export default Mycomponent