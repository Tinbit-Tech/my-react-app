//the main function is to display a list of food items using React.
// It uses JSX to create an unordered list with three items, two of which are defined as constants within the function. 

function Food()
{
    const food1 ="orange";
    const food2 ="banana";
    return(
<ul>
    <li>Apple</li>
    <li>{food1}</li>
    <li>{food2}</li>


</ul>
    );
}
export default Food