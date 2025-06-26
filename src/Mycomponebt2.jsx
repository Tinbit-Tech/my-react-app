import React, {useState} from 'react';
function Mycomponebt2(){
const [name, setName] = useState("Gust");
const [age, setAge] = useState("");
const [payment, setPayment] = useState("");
const [shipping, setShipping] = useState("delivered");
function handleNameChange(event){
    setName(event.target.value);
}
function handleAgeChange(event){
    setAge(event.target.value);
}
function handlePaymentChange(event){
    setPayment(event.target.value);
}
function handleShippingChange(event){
    setShipping(event.target.value);
}

return(
<div>
    <p>Name {name}</p>
    <input value={name} onChange={handleNameChange} placeholder="Enter your name" />
    <p>Age {age}</p>
    <input value={age} onChange={handleAgeChange} placeholder="Enter your age" />
    <p>Payment Method {payment}</p>
    <input value={payment} onChange={handlePaymentChange} placeholder="Enter your payment method" />
    <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select an option</option>
        <option value="visa">Visa</option>
        <option value="paypal">PayPal</option>
    </select>
    <p>Shipping Method {shipping}</p>
<label>
   <input type="radio" value="pick up" checked={shipping === "pick up"} onChange={handleShippingChange} /> Pick Up
   </label>
<label>
   <input type="radio" value="delivered" checked={shipping === "delivered"} onChange={handleShippingChange} /> Delivered
</label>
</div>

);
}
export default Mycomponebt2