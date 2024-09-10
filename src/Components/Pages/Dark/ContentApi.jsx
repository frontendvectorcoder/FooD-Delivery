import React, { createContext, useEffect, useState } from 'react';

// Create the context
export const ThemesApply = createContext();

// Create the provider component
export const ContentProvider = ({ children }) => {
    const [checklocal, setCheckLocal] = useState('light');

    useEffect(() => {
        const theme = localStorage.getItem('theme');
        if (theme) {
            setCheckLocal(theme);
        }
    }, []);

    const themeToggle = () => {
        const newTheme = checklocal === 'light' ? 'dark' : 'light';
        setCheckLocal(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <ThemesApply.Provider value={{ checklocal, themeToggle }}>
            {children}
        </ThemesApply.Provider>
    );
};
