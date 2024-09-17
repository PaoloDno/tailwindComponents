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
      className="p-2 rounded flex flex-row"
    >
      <RiPaintFill className='themeToggleButton'/> <span className='sidebar-tooltip'> Current: {currentTheme} </span>
    </button>
  );
};

export default ThemeToggleButton;