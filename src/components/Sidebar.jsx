import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeSidebar, updateSections } from '../redux/reducers/sidebarReducer';
import { useLocation } from 'react-router-dom';

import bgImgsunset from "../assets/imgs/sideSunset.jpg";
import bgImgocean from "../assets/imgs/sideOcean.jpg";
import bgImgforest from "../assets/imgs/sideSunset.jpg";
import bgImgnight from "../assets/imgs/sideSunset.jpg";
import bgImgretro from "../assets/imgs/sideSunset.jpg";

import { ImCross } from "react-icons/im";

import SidebarToggle from './components/SidebarToggle';


const Sidebar = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const sections = useSelector((state) => state.sidebar.sections);
  const location = useLocation();

  const [sideBgImg, setSideBgImg] = useState('');  
  const [pageTitle, setPageTitle] = useState('');

  useEffect(() => {
    if (isOpen) {
      console.log('Sidebar opened');
      // Additional side effects when sidebar opens
    } else {
      console.log('Sidebar closed');
      // Additional side effects when sidebar closes
    }
  }, [isOpen]);


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
          { id: 'Home', label: 'Home' },
          { id: 'Template', label: 'Template' },
          { id: 'Components', label: 'Components' },
          { id: 'Themes', label: 'Themes' },
          { id: 'About', label: 'About' },
        ]));
        break;
    }
  }, [location, dispatch]);

  return (
    <div className={`hidden lg:flex flex-col fixed h-screen
    ${isOpen ? 'w-64 bg-skin-inverted' : 'w-20 bg-skin-secondary'}
    text-lg transition-all duration-300 z-20 fixed h-screen`}>

      <SidebarToggle />

      {isOpen && (
        <div className="p-4">
          {isOpen && <span className="font-bold text-skin-inverted">{pageTitle}</span>}

          <ul className="space-y-2">
            {sections.map((section) => (
              <a href={`#${section.id}`} key={section.id}>
                <li className="relative flex items-center justify-center h-10 min-w-16 mt-2 mb-2 mx-auto shadow-md 
                bg-skin-button-primary text-skin-primary text-sm border-skin-primary hover:bg-white hover:text-black rounded-sm hover:rounded-2xl
                transition-all duration-300 ease-linear cursor-pointer">
                  {section.label}
                </li>
              </a>
            ))}
          </ul>
        </div>
      )}
      <div className={`${!isOpen ? "hidden" : "flex" } absolute top-0 left-0 h-screen w-screen
      -z-10 opacity-25 bg-skin-secondary`}
      onClick={() =>dispatch(closeSidebar())}
      >
        <ImCross className='absolute top-20 right-20 h-10 w-10'/>

      </div>
    </div>
  );
};

export default Sidebar;
