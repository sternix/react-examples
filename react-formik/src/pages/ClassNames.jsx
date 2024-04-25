import classNames from "classnames"
import { useState } from "react"

function ClassNames() {
    const [kabul, setKabul] = useState(false)
    const [adi, setAdi] = useState('')
    const [soyadi, setSoyadi] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(`Adı: ${adi}, Soyadı: ${soyadi}, Kabul: ${kabul}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Adı</label>
            <input type="text" name="name" id="name" value={adi} onChange={e => setAdi(e.target.value)} />
            <br />
            <label htmlFor="surname">Soyadı</label>
            <input type="text" name="surname" id="surname" value={soyadi} onChange={e => setSoyadi(e.target.value)} />
            <br />
            <label htmlFor="kabul" className={
                classNames({
                    "varsayilan": true,
                    "secili": kabul,
                    "seciliDegil": !kabul
                })
            }  >
                <input type="checkbox" checked={kabul} onChange={e => setKabul(e.target.checked)} name="kabul" id="kabul" />
                Şartları kabul ediyorum
            </label>
            <input type="submit" value="Kaydet" />
            <br />
            {kabul ? 'KABUL' : 'DEĞİL'}
        </form>
    )
}

export default ClassNames