import { useState } from "react"
import { useSelector } from "react-redux"
import Header from "./todo/Header"
import AddTodo from "./todo/AddTodo"
import TodoList from "./todo/TodoList"
import Modal from "./todo/Modal"

function App() {
    const { open: isModalOpen } = useSelector(state => state.modal)

    const [user, setUser] = useState(false)
    const [language, setLanguage] = useState('tr')
    const [dark, setDark] = useState(true)

    return (
        <main>
            {isModalOpen && <Modal />}
            <Header />
            <AddTodo />
            <TodoList />
        </main>
    )
}

export default App
