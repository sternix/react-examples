import SwitchLanguage from "./SwitchLanguage";
import SwitchTheme from "./SwitchTheme"
import { useAuth } from "./context";

function Header() {

    const { user, dispatch } = useAuth()

    const login = () => {
        dispatch({
            type: 'LOGIN',
            payload: {
                // form'dan alınabilir
                name: 'Yavuz',
                surname: 'Tanrıverdi',
                id: 28,
            }
        })
    }

    const logout = () => {
        dispatch({
            type: 'LOGOUT',
        })
    }

    return (
        <header>
            Header
            <hr />
            {(user && <button onClick={logout}>Çıkış</button>) || <button onClick={login} >Giriş</button>}
            <SwitchTheme />
            <SwitchLanguage />
        </header>
    )
}

export default Header;