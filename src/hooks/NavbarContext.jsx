import React, { createContext, useState, useContext } from 'react';

const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  return (
    <NavbarContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbar = () => useContext(NavbarContext);
