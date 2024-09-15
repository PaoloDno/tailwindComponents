import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar, closeSidebar, updateSections } from '../redux/reducers/sidebarReducer';
import { useLocation } from 'react-router-dom';

import { 
  MdKeyboardDoubleArrowRight as ArrowRight,
  MdOutlineKeyboardDoubleArrowLeft as ArrowLeft 
} from "react-icons/md";

const Sidebar = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const sections = useSelector((state) => state.sidebar.sections);
  const location = useLocation();
  
  const [pageTitle, setPageTitle] = useState('');

  useEffect(() => {
    switch (location.pathname) {
      case '/Component':
        setPageTitle('Components');
        dispatch(updateSections([
          { id: 'section1', label: 'Page Sections' },
          { id: 'section2', label: 'Elements' },
          { id: 'section3', label: 'Feedback' },
        ]));
        break;
      case '/Template':
        setPageTitle('Templates');
        dispatch(updateSections([
          { id: 'sections1', label: 'Creative Landing Page' },
          { id: 'sections2', label: 'E-commerce Product Page' },
          { id: 'sections3', label: 'Nature Blog Template' },
          { id: 'sections4', label: 'Business Page' },
        ]));
        break;
      case '/Theme':
        setPageTitle('Themes');
        dispatch(updateSections([
          { id: 'sections1', label: 'Sunset Glow' },
          { id: 'sections2', label: 'Ocean Breeze' },
          { id: 'sections3', label: 'Midnight Purple' },
          { id: 'sections4', label: 'Forest Mist' },
          { id: 'sections5', label: 'Retro Vibes' },
        ]));
        break;
      default:
        setPageTitle('Home');
        dispatch(updateSections([
          { id: 'home', label: 'Home' },
          { id: 'about', label: 'About' },
        ]));
        break;
    }
  }, [location, dispatch]);

  return (
    <div className={`flex flex-col ${isOpen ? 'w-64 bg-slate-500' : 'w-20 bg-slate-500/20'} text-lg transition-all duration-300 fixed h-screen`}>
      <div className="p-4 mt-12 flex items-center justify-between">
        {isOpen && <span className="font-bold text-white">{pageTitle}</span>}
        <button onClick={() => dispatch(toggleSidebar())} className="sidebarArrow">
          {isOpen ? 
          <ArrowLeft  size={48} /> 
          : <ArrowRight size={48} />}
        </button>
      </div>

      {isOpen && (
        <div className="p-4">
          <ul className="space-y-2">
            {sections.map((section) => (
              <a href={`#${section.id}`}>
              <li key={section.id} className="hover:bg-slate-600 rounded-md p-2 cursor-pointer">
                {section.label}
              </li>
              </a>
            ))}
          </ul>
          <button onClick={() => dispatch(closeSidebar())} className="mt-4 bg-red-500 hover:bg-red-600 text-white rounded-md px-4 py-2">
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
