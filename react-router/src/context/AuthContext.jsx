import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext();

export function AuthProvider({ children }) {
    const luser = localStorage.getItem('user')
    const [user, setUser] = useState(luser != null ? JSON.parse(luser) : false)

    const data = {
        user,
        setUser
    }

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user))
    }, [user])

    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}

export const useAuth = () => useContext(Context)