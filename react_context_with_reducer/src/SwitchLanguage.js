import { useSite } from "./context/SiteContext"

function SwitchLanguage() {
    const { language, dispatch } = useSite()

    const toggleLanguage = () => {
        dispatch({
            type: 'TOGGLE_LANG',
        })
    }

    return (
        <>
            <br />
            Mevcut dil {language}<br />
            <button onClick={toggleLanguage} >Dili değiştir</button>
        </>
    )
}

export default SwitchLanguage