import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nextTheme } from '../../redux/reducers/themeReducer'; 
import { RiPaintFill } from "react-icons/ri";

const ThemeToggleButton = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => state.theme.currentTheme); 

  return (
    <button
      onClick={() => dispatch(nextTheme())} 
      className="icon-header flex relative group">

      <RiPaintFill /> 
      
      <span className='absolute top-10 -left-10 group-hover:scale-100 w-auto
      p-2 m-2 min-w-[8rem] rounded-md shadow-md text-white bg-gray-900 
      text-xs font-bold transition-all duration-100 scale-0 origin-left'>
        Current: {currentTheme} 
      </span>
    </button>
  );
};

export default ThemeToggleButton;