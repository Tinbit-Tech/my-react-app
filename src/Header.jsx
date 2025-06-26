function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-600">My profile</h1>
        <nav>
          <ul className="flex space-x-6 text-gray-700 font-medium">
            <li className="hover:text-blue-500 cursor-pointer transition duration-300">Home</li>
            <li className="hover:text-blue-500 cursor-pointer transition duration-300">About</li>
            <li className="hover:text-blue-500 cursor-pointer transition duration-300">Service</li>
            <li className="hover:text-blue-500 cursor-pointer transition duration-300">Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
