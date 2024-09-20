import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const ThemeWrapper = ({ children }) => {
  const currentTheme = useSelector((state) => state.theme.currentTheme);

  const [theme, setTheme] = useState(currentTheme);

  // useEffect to update theme whenever currentTheme changes
  useEffect(() => {
    setTheme(currentTheme);
  }, [currentTheme]);

  return (
    <div className={theme}>
      {children}
    </div>
  );
};

export default ThemeWrapper;
