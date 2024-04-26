import { useState } from "react"

function EditTodo({ data, close }) {
    const [todo, setTodo] = useState(data.title)
    const [done, setDone] = useState(data.done)

    const handleSubmit = (e) => {
        e.preventDefault()

    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={todo} onChange={e => setTodo(e.target.value)} /> <br />
            <label>
                <input type="checkbox" checked={done} onChange={e => setDone(e.target.checked)} />
                Tamamlandı
            </label>
        </form>
    )
}

export default EditTodo