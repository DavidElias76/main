
// building a simple todo app using the userReducer Hook

import { useReducer, useState } from "react";

// the components

const ACTIONS_TYPES = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
};


// the main component 
function ReducerComponentApp(){
    const [todos, dispatch] = useReducer(reducer, []) // the reducer function which is the dispatch function and the todos which is the array
    const [name, setName] = useState('')
    
    function handleSubmit(e){

        if (name.trim() === "") return;

        e.preventDefault()

        dispatch({type: ACTIONS_TYPES.ADD_TODO, payload: { name }}) // you are passing the name value of the input field 

        setName("") // reset the input field 
    }
    
    return (
        <>
        <br /> <br />
        <div>
            <h2>Simple Todo App</h2>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                <button type="submit">Add</button>
            </form>
            {todos.map(todo => {
                return <Todo key ={todo.id} todo = {todo} dispatch = {dispatch} />
            })}
            
        </div>

        </>
    )
}

function Todo({todo, dispatch}){
    return (
        <>
            <div>
                <span style={{ 
                        color: todo.complete ? "#AAA" : "#000", 
                        textDecoration: todo.complete ? "line-through" : "none" 
                    }}>{todo.name}</span>
                <button onClick={dispatch({type: ACTIONS_TYPES.TOGGLE_TODO, payload: {id: todo.id}})}>Toggle</button>
                <button onClick={() => dispatch({type:  ACTIONS_TYPES.DELETE_TODO, payload: { id: todo.id }})}>Delete</button>
            </div>
        </>
    )

}

// NOTE: the todo.id and the actions.payload.id is the same object

// the reducer function
function reducer(todos, actions){
    switch (actions.type) {
        case ACTIONS_TYPES.ADD_TODO:
            return [ ...todos, newTodo(actions.payload.name)] // the function passed the value from the input field 

        case ACTIONS_TYPES.TOGGLE_TODO:
            return todos.map((todo) => 
                todo.id === actions.payload.id ? { ...todo, complete: !todo.complete} : todo)

        case ACTIONS_TYPES.DELETE_TODO:
            return todos.filter((todo) => todo.id !== actions.payload.id); // checks for the element that do not match the criterion and removes them 

        default:
            return todos;
    }
}

function newTodo(name){
    return {
        id: Date.now(), // unique id
        name: name,
        complete: false,
    }
}


export default ReducerComponentApp;