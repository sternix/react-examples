import { useAuth } from "../../context/AuthContext"
import { useNavigate, useLocation } from "react-router-dom"

function Login() {
    const navigate = useNavigate();
    const location = useLocation()

    const { setUser } = useAuth()

    const loginHandle = () => {
        setUser({
            id: 28,
            username: 'yavuz',
        })

        navigate(location?.state?.return_url || '/')
    }

    return (
        <div>Login
            <button onClick={loginHandle}>Giriş Yap</button>
        </div>
    )
}

export default Login