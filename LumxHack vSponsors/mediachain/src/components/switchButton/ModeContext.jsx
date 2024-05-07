import { createContext, useState, useEffect } from 'react';

const ModeContext = createContext();

export const ModeProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const storedLanguage = localStorage.getItem('language');
    return storedLanguage ? storedLanguage : 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prevLanguage => (prevLanguage === 'en' ? 'pt' : 'en'));
  };

  return (
    <ModeContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </ModeContext.Provider>
  );
};

export default ModeContext;