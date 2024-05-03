import { useAuth } from "../context/AuthContext"
import { Navigate, useLocation } from "react-router-dom"

function PrivateRoute({ children }) {
    const location = useLocation()
    const { user } = useAuth()
    if (!user) {
        return <Navigate to="/auth/login" state={{
            return_url: location.pathname + location.search
        }} />
    }

    return (
        children
    )
}

export default PrivateRoute