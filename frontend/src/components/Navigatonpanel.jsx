import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Navigatonpanel() {
  const navigate = useNavigate();
  const location = useLocation();

  const [searchTerm, setSearchTerm] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  const [user, setUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem("user");
      return storedUser ? JSON.parse(storedUser) : null;
    } catch {
      return null;
    }
  });

  
  useEffect(() => {
    const syncUser = () => {
      try {
        const storedUser = localStorage.getItem("user");
        setUser(storedUser ? JSON.parse(storedUser) : null);
      } catch {
        setUser(null);
      }
    };

    window.addEventListener("user-login", syncUser);
    window.addEventListener("user-logout", syncUser);

    return () => {
      window.removeEventListener("user-login", syncUser);
      window.removeEventListener("user-logout", syncUser);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.dispatchEvent(new Event("user-logout"));
    navigate("/auth");
  };

  const onSearch = (e) => {
    e.preventDefault();
    const base = location.pathname || "/";
    const query = searchTerm ? `?q=${encodeURIComponent(searchTerm)}` : "";
    navigate(`${base}${query}`);
  };

  return (
    <nav
      className="relative bg-black text-white flex justify-between items-center 
      px-6 md:px-16 py-6 text-lg shadow-lg border-b border-gray-800"
    >
      {/* LEFT */}
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <img src="/icon/pcicon.png" width={50} alt="PC Build Icon" />
          <p className="text-3xl font-bold">PCBUILD</p>
        </div>

        {/* AUTH */}
        {user ? (
          <div className="flex items-center gap-4">
            <span className="text-green-400 font-semibold text-lg ">
              {user.username}
            </span>
            <button
              onClick={handleLogout}
              className="px-4 py-2 border border-red-500 text-red-500 rounded-md
              hover:bg-red-500 hover:text-black transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            to="/auth"
            className="px-4 py-2 border border-green-500 text-green-500 rounded-md
            hover:bg-green-500 hover:text-black transition"
          >
            Sign Up
          </Link>
        )}
      </div>

      {/* CENTER */}
      <div className="hidden md:flex gap-10 items-center text-green-500 text-xl">
        <Link to="/" className="neon-tab">
          Home
        </Link>
        <span className="neon-tab">About</span>
        <div className="relative group">
          {" "}
          <span className="neon-tab cursor-pointer flex items-center gap-1">
            {" "}
            Component{" "}
          </span>{" "}
          <div className="absolute left-0 mt-2 w-48 bg-black text-white border border-gray-700 rounded-lg shadow-lg invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 z-50">
            {" "}
            <Link
              to="/processor"
              className="px-4 py-2 dropdown-neon flex items-center"
            >
              {" "}
              <img src="/processor.svg" className="w-5 h-5 mr-2" />{" "}
              Processor{" "}
            </Link>{" "}
            <Link
              to="/graphics"
              className="px-4 py-2 dropdown-neon flex items-center"
            >
              {" "}
              <img src="/graphics.svg" className="w-5 h-5 mr-2" /> Graphics{" "}
            </Link>{" "}
            <Link
              to="/ssd"
              className="px-4 py-2 dropdown-neon flex items-center"
            >
              {" "}
              <img src="/ssd.svg" className="w-5 h-5 mr-2" /> SSD{" "}
            </Link>{" "}
            <Link
              to="/ram"
              className="px-4 py-2 dropdown-neon flex items-center"
            >
              {" "}
              <img src="/ram.svg" className="w-5 h-5 mr-2" /> RAM{" "}
            </Link>{" "}
            <Link
              to="/casefan"
              className="px-4 py-2 dropdown-neon flex items-center"
            >
              {" "}
              <img src="/casefan.svg" className="w-5 h-5 mr-2" /> Case Fan{" "}
            </Link>{" "}
            <Link
              to="/powersupply"
              className="px-4 py-2 dropdown-neon flex items-center"
            >
              {" "}
              <img src="/powersupply.svg" className="w-5 h-5 mr-2" /> Power
              Supply{" "}
            </Link>{" "}
            <Link
              to="/motherboard"
              className="px-4 py-2 dropdown-neon flex items-center"
            >
              {" "}
              <img src="/motherboard.svg" className="w-5 h-5 mr-2" />{" "}
              Motherboard{" "}
            </Link>{" "}
            <Link
              to="/case"
              className="px-4 py-2 dropdown-neon flex items-center"
            >
              {" "}
              <img src="/case.svg" className="w-5 h-5 mr-2" /> Case{" "}
            </Link>{" "}
          </div>{" "}
        </div>

        <form onSubmit={onSearch}>
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search..."
            className="bg-black border border-gray-700 text-white px-2 py-1 rounded-md"
          />
        </form>

        <span className="neon-tab">FAQ</span>
      </div>

      <div 
        className="md:hidden text-3xl cursor-pointer hover:text-green-500 transition"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        role="button"
        tabIndex={0}
        aria-label="Toggle navigation menu"
        onKeyDown={(e) => e.key === "Enter" && setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        ☰
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black border-b border-gray-800 md:hidden z-40 w-full">
          <div className="flex flex-col gap-4 px-6 py-6 text-green-500 text-lg">
            <Link 
              to="/" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="neon-tab"
            >
              Home
            </Link>
            <span className="neon-tab">About</span>
            
            {/* Mobile Component Dropdown */}
            <div>
              <span className="neon-tab cursor-pointer">Component</span>
              <div className="ml-4 mt-2 flex flex-col gap-2 text-gray-300">
                <Link 
                  to="/processor" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2 hover:text-green-500 transition"
                >
                  <img src="/processor.svg" className="w-5 h-5" /> Processor
                </Link>
                <Link 
                  to="/graphics" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2 hover:text-green-500 transition"
                >
                  <img src="/graphics.svg" className="w-5 h-5" /> Graphics
                </Link>
                <Link 
                  to="/ssd" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2 hover:text-green-500 transition"
                >
                  <img src="/ssd.svg" className="w-5 h-5" /> SSD
                </Link>
                <Link 
                  to="/ram" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2 hover:text-green-500 transition"
                >
                  <img src="/ram.svg" className="w-5 h-5" /> RAM
                </Link>
                <Link 
                  to="/casefan" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2 hover:text-green-500 transition"
                >
                  <img src="/casefan.svg" className="w-5 h-5" /> Case Fan
                </Link>
                <Link 
                  to="/powersupply" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2 hover:text-green-500 transition"
                >
                  <img src="/powersupply.svg" className="w-5 h-5" /> Power Supply
                </Link>
                <Link 
                  to="/keyboard" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2 hover:text-green-500 transition"
                >
                  <img src="/keyboard.svg" className="w-5 h-5" /> Keyboard
                </Link>
                <Link 
                  to="/motherboard" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2 hover:text-green-500 transition"
                >
                  <img src="/motherboard.svg" className="w-5 h-5" /> Motherboard
                </Link>
                <Link 
                  to="/case" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2 hover:text-green-500 transition"
                >
                  <img src="/case.svg" className="w-5 h-5" /> Case
                </Link>
              </div>
            </div>
            
            <span className="neon-tab">FAQ</span>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigatonpanel;
