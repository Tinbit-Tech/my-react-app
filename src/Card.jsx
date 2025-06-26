import profilepic from './assets/tinbit.jpg'
import styles from './Button.module.css'
function Card(){
return(
<div className='card'>
<img className='cardclass' src={profilepic} alt="profile image"></img>
<h2 className='cardtittle'> TINBIT TEFERA</h2>
<p className='cardtext'>I'm software engineer , this is my porofile</p>
<button className={styles.Button}>View me</button>
</div>

);

}
 export default Card