import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}

const todos = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos = [
                action.payload,
                ...state.todos
            ]
        },
        editTodo: (state, action) => {
            state.todos = state.todos.map(todo => {
                if (action.payload.id === todo.id) {
                    todo.title = action.payload.title
                    todo.done = action.payload.done
                }
                return todo
            })
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(t => t.id !== action.payload)
        }
    }
})

export const { addTodo } = todos.actions
export const { deleteTodo } = todos.actions
export default todos.reducer