function List(){
const fruits = [{id:1, name: "Apple", calories: 95},
    {id:2, name: "Banana", calories: 105},
    {id:3, name: "Orange", calories: 55},
    {id:4, name: "Mango", calories: 60},
    {id:5, name: "Grapes", calories: 70}
   ];

   //fruits.sort((a, b) => a.name.localeCompare(b.name));
    //fruits.sort((a, b) => a.calories - b.calories);
fruits.sort((a, b) => b.calories - a.calories);
    // const listItems = fruits.map((fruit) => <li key={fruit.id}>{fruit.name}</li>);
    // return (<ul>{listItems}</ul>);

    // const listItems = fruits.map((fruit) => <li key={fruit.id}>{fruit.name}: {fruit.calories}</li>);
    // return (<ul>{listItems}</ul>);

const listItems = fruits.map((fruit) => <li key={fruit.id}>
                                        {fruit.name}:&nbsp;
                                        <b>{fruit.calories}</b></li>);
    return (<ul>{listItems}</ul>);
}
export default List