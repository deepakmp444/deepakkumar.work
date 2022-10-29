import { useState, createContext } from "react";

export const SidebarContextApi = createContext();

const MenuProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SidebarContextApi.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SidebarContextApi.Provider>
  );
};

export default MenuProvider;
