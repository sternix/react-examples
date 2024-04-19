import { useSite } from "./context/SiteContext"

function SwitchTheme() {
    const { theme, setTheme } = useSite()

    return (
        <>
            <br />
            Mevcut tema {theme}<br />
            <button onClick={() => theme === 'light' ? setTheme('dark') : setTheme('light')} >Temayı değiştir</button>
        </>
    )
}

export default SwitchTheme