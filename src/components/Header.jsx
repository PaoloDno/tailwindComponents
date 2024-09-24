import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ThemeToggleButton from "./components/ThemeToggleButton";
import { FiAlignJustify } from "react-icons/fi";


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
      className={`fixed top-0 left-0 w-screen h-16 items-center
        justify-center transition-opacity duration-300 ease-in-out
        ${ !isScrolled ? "bg-skin-primary opacity-100" :
        "bg-skin-primary opacity-10 hover:opacity-100"}
        hover:bg-opacity-100 z-50 border-b-4 border-skin-primary`}
    >
      <div className="relative w-screen bg-gradient-to-l
        from-skin-start to-skin-end h-full px-5
        flex flex-row items-center justify-between">
          <Link to="/" className="flex text-skin-primary">
            <div className="p-1 px-4 md:px-0 font-bold text-sm md:text-lg"><i>My Tailwind Library</i></div>
          </Link>
          <nav className="hidden flex-row p-1 mx-2 lg:flex">
            <ul className="flex flex-row px-2 justify-between w-auto">
              <li>
                <Link to="/tailwindComponents/Template"
                className="btn-header"
                >Template</Link>
              </li>
              <li>
                <Link to="/tailwindComponents/Component"
                className="btn-header"
                >Component</Link>
              </li>
              <li>
                <Link to="/tailwindComponents/Theme" 
                className="btn-header"
                >Theme</Link>
              </li>
              <li>
                <Link to="/tailwindComponents/AboutUs" 
                className="btn-header"
                >About</Link>
              </li>
            </ul>
            </nav>

            <div className="flex flex-row items-center justify-center gap-2 mr-2 lg:mr-14">
              <ThemeToggleButton />

              <FiAlignJustify className="icon-header lg:hidden block"/>
            </div>
      </div>
    </header>
  );
};

export default Header;
