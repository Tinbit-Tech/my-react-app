function ProfilepicEvent(){
const imageUrl = './assets/tinbit.jpg';

const handleclick = (e) => e.target.style.display ="none";

return(<img onClick={(e) => handleclick(e)} src={imageUrl} alt="profile image"></img>);


}
export default ProfilepicEvent;