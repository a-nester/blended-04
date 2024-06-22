import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todos",
    initialState: {
        items: []
    },
    reducers: {
        addTodo: (state, { payload }) => {
            state.items.push(payload)
        },
        deleteTodo: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        }
    },
    selectors: {
        selectTodo: (state) => state.items
    }
})

export const todosReducer = todoSlice.reducer;
export const { addTodo, deleteTodo } = todoSlice.actions;

export const { selectTodo } = todoSlice.selectors;