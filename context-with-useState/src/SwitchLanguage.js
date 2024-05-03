import { useSite } from "./context/SiteContext"

function SwitchLanguage() {
    const { language, setLanguage } = useSite()

    return (
        <>
            <br />
            Mevcut dil {language}<br />
            <button onClick={() => language === 'tr' ? setLanguage('en') : setLanguage('tr')} >Dili değiştir</button>
        </>
    )
}

export default SwitchLanguage