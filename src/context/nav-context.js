import { useState, createContext } from "react";

export const NavContext = createContext();

const NavProvider = ({ children }) => {
  const [navClass, setNavClass] = useState("");

  return (
    <NavContext.Provider value={{ navClass, setNavClass }}>
      {children}
    </NavContext.Provider>
  );
};

export default NavProvider;
