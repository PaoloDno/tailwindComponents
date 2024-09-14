import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar, closeSidebar, updateSections } from '../Redux/reducers/sidebarReducer';
import { useLocation } from 'react-router-dom';

const Sidebar = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const sections = useSelector((state) => state.sidebar.sections);
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/Component':
        dispatch(updateSections([
          { id: 'section1', label: 'Mission' },
          { id: 'section2', label: 'Team' },
          { id: 'contact', label: 'Contact' },
        ]));
        break;
      case '/Template':
        dispatch(updateSections([
          { id: 'electronics', label: 'Electronics' },
          { id: 'fashion', label: 'Fashion' },
          { id: 'groceries', label: 'Groceries' },
        ]));
        break;
      case '/Theme':
        dispatch(updateSections([
        { id: 'electronics', label: 'Electronics' },
        { id: 'fashion', label: 'Fashion' },
        { id: 'groceries', label: 'Groceries' },
      ]));
      break;
      case '/AboutUs':
        dispatch(updateSections([
          { id: 'electronics', label: 'Electronics' },
          { id: 'fashion', label: 'Fashion' },
          { id: 'groceries', label: 'Groceries' },
        ]));
        break;
      default:
        dispatch(updateSections([
          { id: 'home', label: 'Home' },
          { id: 'about', label: 'About' },
        ]));
        break;
    }
  }, [location, dispatch]);

  return (
    <div>
      <button onClick={() => dispatch(toggleSidebar())}>
        {isOpen ? 'Close Sidebar' : 'Open Sidebar'}
      </button>

      {isOpen && (
        <div className="sidebar fixed">
          <ul>
            {sections.map((section) => (
              <li key={section.id}>{section.label}</li>
            ))}
          </ul>
          <button onClick={() => dispatch(closeSidebar())}>Close</button>
        </div>
      )}
    </div>
  );
};

const SideBarIcon = ({ icon, text }) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
);

const Divider = () => {
  return <hr className='a' />;
}

export default Sidebar;
