const Navbar = ({ setPage }) => {
  return (
    <nav className="bg-blue-600 p-4 flex items-center justify-between">
      {/* Brand / title on the left */}
      <div className="text-white text-xl font-bold">
        My Hobbies App
      </div>

      {/* Navigation links on the right */}
      <div className="flex gap-3">
        <button
          className="px-4 py-2 bg-white rounded hover:bg-gray-100"
          onClick={() => setPage('home')}
        >
          Home
        </button>
        <button
          className="px-4 py-2 bg-white rounded hover:bg-gray-100"
          onClick={() => setPage('hobbies')}
        >
          Hobbies
        </button>
        <button
          className="px-4 py-2 bg-white rounded hover:bg-gray-100"
          onClick={() => setPage('about')}
        >
          About
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
