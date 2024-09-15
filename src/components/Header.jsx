import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set isScrolled state to true if scrolled down, false if at the top
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full h-10 transition-opacity duration-300 ease-in-out ${
        isScrolled ? "bg-blue-200 bg-opacity-70" : "bg-blue-200 bg-opacity-100"
      } hover:bg-opacity-100 z-50`}
    >
      <div className="relative h-20 w-screen">
        <div className="flex relative flex-row items-center mx-full">
          <Link to="/">
            <div className="p-1 px-4 font-bold text-lg">My Tailwind Design Library</div>
          </Link>
          <nav className="flex-row p-1 mx-auto">
            <ul className="flex flex-row px-2 justify-between w-auto">
              <li className="btn-header">
                <Link to="/Template">Template</Link>
              </li>
              <li className="btn-header">
                <Link to="/Component">Component</Link>
              </li>
              <li className="btn-header">
                <Link to="/Theme">Theme</Link>
              </li>
              <li className="btn-header">
                <Link to="/AboutUs">About</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
