import SwitchLanguage from "./SwitchLanguage";
import SwitchTheme from "./SwitchTheme"
import { useAuth } from "./context";

function Header() {

    const {user, setUser} = useAuth()

    const login = () => {
        setUser({
            name:'Yavuz',
            surname:'Tanrıverdi',
            id:28,
        })
    }

    const logout = () => {
        console.log(user)
        setUser(false)
    }

    return (
        <header>
            Header
            <hr/>
            { (user && <button onClick={logout}>Çıkış</button>) || <button onClick={login} >Giriş</button>}
            <SwitchTheme />
            <SwitchLanguage />
        </header>
    )
}

export default Header;