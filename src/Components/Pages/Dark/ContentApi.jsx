import React, { createContext, useEffect, useState } from 'react'

export const Themesapply = createContext()

export const ContentApi = ({ children }) => {
    const [checklocal, setchecklocal] = useState('light')

    const theme = localStorage.getItem('theme')
    if (theme) {
        setchecklocal(theme)
    }

    const themetoggle = () => {
        let newtheme = checklocal === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', newtheme) // Corrected here
        setchecklocal(newtheme)
    }

    return (
        <Themesapply.Provider value={{ checklocal , themetoggle }}>
            {children}
        </Themesapply.Provider>
    )
}