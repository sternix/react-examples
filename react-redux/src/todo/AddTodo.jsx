import { nanoid } from "nanoid"
import { useState } from "react"
import { useDispatch, useSelector} from "react-redux"
import { addTodo } from "../stores/todo"

function AddTodo() {
    const user = useSelector(state => state.auth.user)

    const [todo, setTodo] = useState('')
    const dispatch = useDispatch()

    const submitHandle = e => {
        e.preventDefault()
        dispatch(addTodo({
            title: todo,
            done: false,
            id: nanoid(),
            user: user.id 
        }))

        setTodo('')
    }

    return (
        <form onSubmit={submitHandle}>
            <input type="text" value={todo} onChange={e => setTodo(e.target.value)} />
            <button disabled={!todo || !user} type="submit">Ekle</button>
        </form>
    )
}

export default AddTodo