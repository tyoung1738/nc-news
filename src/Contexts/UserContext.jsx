import { createContext, useState, useContext } from "react";

const UserContext = createContext()

export function useAuth(){
    return useContext(UserContext)
}

export function UserProvider({children}){
    const [authUser, setAuthUser] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const value = {
        authUser,
        setAuthUser,
        isLoggedIn,
        setIsLoggedIn
    }

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
}
