import { createContext, useState } from "react";

export const ThemeContext = createContext({});

const ThemeProvider = ({ children }) => {
  const [changeTheme, setChangeTheme] = useState(false);
  return (
    <ThemeContext.Provider value={{ changeTheme, setChangeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
