import react from 'react'
import {useState,useContext,createContext} from 'react'

interface UserContextType {
    email: string | null;
}

const UserContext = createContext<UserContextType | null>(null);

import { ReactNode } from 'react';

export const UserProvider = ({children}: {children: ReactNode})=>{
    const email = localStorage.getItem('email')
    return(
        <UserContext.Provider value={{email}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext);

