import React from "react"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-200 items-center mx-auto w-auto">
      <div className="flex flex-row items-center mx-full">
        <Link to="/">
        <div className="p-1 px-4 font-bold text-lg">
          My Tailwind Design Library
        </div>
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
            <Link to="/AboutUs">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
};

export default Header;
