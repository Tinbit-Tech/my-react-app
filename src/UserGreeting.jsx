function UserGreeting(props){

    return(props.isLoggedIn ? <h2 className="welcom">Welcome back, {props.username}!</h2> :
                             <h2>Please log in first, {props.username}!</h2>)
         
    }
export default UserGreeting