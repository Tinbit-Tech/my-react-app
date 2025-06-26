
import profilepic from './assets/tinbit.jpg'
import styles from './Button.module.css'
function Card2(){
    const handleclick = (e) => {e.target.textcontent = "Ouch stop cliking me"
        alert("Button clicked!");
    }
return(
<div className='card'>
<img className='cardclass' src={profilepic} alt="profile image"></img>
<h2 className='cardtittle'> TINBIT TEFERA</h2>
<p className='cardtext'>I'm software engineer , this is my profile</p>

<button className={styles.Button} onClick={handleclick}>View me</button>
</div>
);
}
 export default Card2