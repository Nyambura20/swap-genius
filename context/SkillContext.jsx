import { createContext, useState, useContext } from "react";

const SkillContext = createContext();

export function SkillProvider({ children }) {
  const [skills, setSkills] = useState([]);

  return (
    <SkillContext.Provider value={{ skills, setSkills }}>
      {children}
    </SkillContext.Provider>
  );
}

export function useSkills() {
  return useContext(SkillContext);
}
