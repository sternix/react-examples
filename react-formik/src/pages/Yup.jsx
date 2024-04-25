import { useState } from "react"
import Schema from "../validations/Schema"

function Yup() {
  const [kabul, setKabul] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState(null)

  const hasError = error != null

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      name,
      email,
      kabul,
    }

    Schema.validate(data)
      .then(user => {
        setError(null)
        console.log(user)
      })
      .catch(e => setError(e))

    console.log(`Adı: ${name}, Soyadı: ${email}, Kabul: ${kabul}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <span>{error.message}</span>}
      <br />
      <label htmlFor="name">Adı</label>
      <input type="text" name="name" id="name" value={name} onChange={e => setName(e.target.value)} />
      <br />
      <label htmlFor="email">Email</label>
      <input type="text" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
      <br />
      <label htmlFor="kabul">
        <input type="checkbox" checked={kabul} onChange={e => setKabul(e.target.checked)} name="kabul" id="kabul" />
        Şartları kabul ediyorum
      </label>
      <input type="submit" value="Kaydet" />
      <br />
      {kabul ? 'KABUL' : 'DEĞİL'}
      {error && <pre>{JSON.stringify(error, null, 2)}</pre>}
    </form>
  )
}

export default Yup