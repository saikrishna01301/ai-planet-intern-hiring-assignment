import { createContext, useState } from "react";

//actual value you want to access
export const TabContext = createContext({
  active: 1,
});

export const TabProvider = ({ children }) => {
  const [active, setActive] = useState(1);
  const value = { active, setActive };

  return <TabContext.Provider value={value}>{children}</TabContext.Provider>;
};
