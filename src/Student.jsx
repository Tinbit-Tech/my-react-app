import PropType from 'prop-types'
function Student(props){
    return(
<div className='Student'>
    <p>Name: {props.name}</p>
    <p>Age: {props.age}</p>
    <p>Student: {props.isStudent}</p>
</div>
    );
    // eslint-disable-next-line no-unreachable
    Student.PropType = {
        name:PropType.String,
        age: PropType.number,
        isStudent: PropType.bool,
    }
    Student.defaultProps = {
         name: "MAMU",
         age: 2,
         isStudent: false,
    }
}
export default Student