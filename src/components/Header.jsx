import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ThemeToggleButton from "./components/ThemeToggleButton";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
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
        !isScrolled ? "bg-skin-primary opacity-100" : "bg-skin-primary opacity-10 hover:opacity-100"
      } hover:bg-opacity-100 z-50`}
    >
      <div className="relative h-20 w-screen">
        <div className="flex relative flex-row items-center mx-5 justify-evenly">
          <Link to="/" className="flex">
            <div className="p-1 px-4 font-bold text-lg">My Tailwind Design Library</div>
          </Link>
          <nav className="flex flex-row p-1 mx-2">
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

            <div className="flex">
              <ThemeToggleButton />
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
