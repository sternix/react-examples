import { useContext, useReducer } from "react";
import { createContext } from "react";
import { authReducer } from "../reducer"

const Context = createContext()

const Provider = ({ children }) => {
    const user = localStorage.getItem('user');

    const [state, dispatch] = useReducer(authReducer, {
        user: user ? JSON.parse(user) : false
    })

    const data = {
        ...state,
        dispatch
    }

    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}

export const useAuth = () => useContext(Context)

export default Provider