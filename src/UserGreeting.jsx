import propTypes from 'prop-types';
function UserGreeting(props){
   const welcomemessage = <h2 className="welcomemessage">Welcome back {props.username}</h2>

   const loginmessage = <h2 className="loginmessage">please log in first {props.username}</h2>
    return(props.isLoggedIn ? welcomemessage : loginmessage)
         
    }
    UserGreeting.propTypes = {
    isLoggedIn: propTypes.bool,
    username: propTypes.string,
    }
    UserGreeting.defaultProps = {
        isLoggedIn: false,
        username: "Guest",
    }
export default UserGreeting