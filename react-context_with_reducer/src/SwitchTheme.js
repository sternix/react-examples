import { useSite } from "./context/SiteContext"

function SwitchTheme() {
    const { theme, dispatch } = useSite()

    const toggleTheme = () => {
        dispatch({
            type: 'TOGGLE_THEME',
        })
    }

    return (
        <>
            <br />
            Mevcut tema {theme}<br />
            <button onClick={toggleTheme} >Temayı değiştir</button>
        </>
    )
}

export default SwitchTheme