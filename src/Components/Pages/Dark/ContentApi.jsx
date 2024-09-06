import React, { createContext, useEffect, useState } from 'react'

const themesapply = createContext()

export const ContentApi = ({ children }) => {

    let [checklocal, setchecklocal] = useState('light')


    useEffect(() => {

        const theme = localStorage.getItem('theme')

        if (theme) {
            setchecklocal(theme)
        }


    }, [])

    let themetoggle = () => {
        let newtheme = checklocal === 'light' ? 'dark' : 'light';
        localStorage.setItem(newtheme)
    }




    return (
        <themesapply.Provider>
            {children}
        </themesapply.Provider>
    )
}
