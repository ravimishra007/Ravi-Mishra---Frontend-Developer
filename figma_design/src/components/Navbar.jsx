import { useState } from 'react';
import '../styles/navbar.css';


export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex justify-between items-center p-6 relative z-10 backdrop-blur-md">
      <div className="flex items-center justify-start gap-5">
        <div className="text-2xl font-bold tracking-[8px]">AI.GEN</div>
        {/* Hide the menu items on screens smaller than 750px */}
        <ul className={`hidden md:flex gap-5`}>
          <li>Features</li>
          <li>Roadmap</li>
          <li>Tokenomics</li>
        </ul>
      </div>
      {/* Hamburger menu icon */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            )}
          </svg>
        </button>
      </div>
      {/* Menu items for screens larger than 750px */}
      {/* <div className={`flex gap-3 ${menuOpen ? 'hidden' : 'md:flex'}`}> */}
      <div className="hidden md:flex gap-3">
        <button className="rounded-md py-3 px-6 border-0 backdrop-opacity-50 bg-slate-900">
          Whitepaper
        </button>
        <button className="bg-gradient-to-r from-indigo-500 to-pink-500 rounded-md py-3 px-6 border-0">
          Get Started
        </button>
      </div>
    </nav>
  );
};
