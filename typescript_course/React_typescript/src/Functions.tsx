// import { useState } from "react"
import React, { useState } from "react"
import "./App.css"
import InputField from "./components/InputField"
import type { Todo } from "./Models"

// This represent a type of a functional component

const AppFunction: React.FC = () => {

    const [todo, setTodo] = useState<string>(''); // This is the input element
    const [todos, setTodos] = useState<Todo[]>([]) // This is an array of todos of the types todo

    const handleAddTodo = (e: React.FormEvent) => {
        e.preventDefault()
        setTodos([...todos, {id: Date.now(), todo: todo, isDone: false}])
    }
    return (
        <div className="App">
            <span className="heading">Taskify</span>
            <InputField todo = {todo} setTodo = {setTodo} handleAdd = {handleAddTodo} />
        </div>
    )
}
export default AppFunction