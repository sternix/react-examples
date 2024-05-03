import { useDispatch, useSelector } from "react-redux"
import { login, logout} from "../stores/auth"

function Header() {
    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()

    const loginHandle = user => {
        dispatch(login(user))
    }

    const logoutHandle = () => {
        dispatch(logout())
    }

    return (
        <header className="header">
            <h2>Logo</h2>
            {!user && (
                <nav>
                    <button onClick={() => loginHandle({ id: 1, username: 'user' })}>User olarak giriş yap</button>
                    <button onClick={() => loginHandle({ id: 2, username: 'admin' })}>Admin olarak giriş yap</button>
                </nav>
            )}
            {user && (
                <nav>
                    Hoşgeldin, {user.username}
                    <button onClick={logoutHandle}>Çıkış yap</button>
                </nav>
            )}
        </header>
    )
}

export default Header