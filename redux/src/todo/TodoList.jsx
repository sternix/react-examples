import TodoItem from "./TodoItem"
import { useSelector } from "react-redux"

function TodoList() {
    const todos = useSelector(state => state.todo.todos)

    return (
        <ul>
            {
                todos.map((todo, key) => <TodoItem key={key} todo={todo} />)
            }
        </ul>
    )
}

export default TodoList