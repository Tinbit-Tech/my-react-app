// the main function it their is a card box with profile image and profile name 
// then when you click the "view me" button it show the pop-up text with button clicked and the button text change to Ouch! Stop clicking me



import profilepic from './assets/tinbit.jpg'; 
function Card2() {
  // Handle click: change button text and show alert
  const handleclick = (e) => {
    e.target.textContent = "Ouch! Stop clicking me";
    alert("Button clicked!");
  };

  return (
    // Outer card container
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg text-center space-y-4">
      {/* Profile image */}
      <img
        className="w-32 h-32 mx-auto rounded-full border-4 border-blue-500 shadow"
        src={profilepic}
        alt="profile image"
      />

      {/* Name heading */}
      <h2 className="text-2xl font-bold text-gray-800">TINBIT TEFERA</h2>

      {/* Description */}
      <p className="text-gray-600">I'm a software engineer — this is my profile.</p>

      {/* Button — using external CSS + event handler */}
      <button
        className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded`}
        onClick={handleclick}
      >
        View me
      </button>
    </div>
  );
}

export default Card2;
