import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todos",
    initialState: {
        items:[]
    },
    redusers: {
        addTodo: (state, {payload}) => {
            state.items.push(payload)
        }
    },
    selectors: {
        selectTodo: (state)=>state.items
    }
})

export const todosReducer = todoSlice.reducer;
export const { addTodo } = todoSlice.actions;
export const { selectTodo } = todoSlice.selectors;