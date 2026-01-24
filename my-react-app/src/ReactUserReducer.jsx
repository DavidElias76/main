
// the usereducer aloows custom state logic

import { useReducer, useState } from "react";

// the reducer takes two arguments - the reducer function and the state object 

const buttonStyles= {backgroundColor: 'green', padding: '20px', color: 'white'}

// the reducer function that is goint to update the count variable

function reducer( state, action ){
    switch(action.type){

        case 'increment': 
            return {count: state.count + 1}
        case 'decrement':
            return {count: state.count - 1}
        default: 
            return state
    }
}

function ReducerComponent(){

    const [state, displatch] = useReducer(reducer, {count: 0}); // the reducer function and the state object withe count property set to 0

    function increment(){
        displatch({type: 'increment'})
    }

    function decrement(){
        displatch({type: 'decrement'})
    }

    return (
        <>
        <br /> <br />
            <h2>The useReducer Hook</h2>
            <br />
            <button style={buttonStyles} onClick={decrement}>-</button>
            <p style={{color: 'black', padding: '20px'}}> {state.count}</p>
            <button style={buttonStyles} onClick={increment}>+</button>
        </>
    )
}


// function reducerFunction(state, action){

//     if(action.type === 'increment'){
//         return {count: state.count + 1}
//     }else if(action.type === 'decrement'){
//         return {count: state.count - 1 }
//     }else{
//         return state
//     }
// }


// function ReducerComponent2(){
//     const [state, displatch] = useReducer(reducerFunction, {count: 0})

//     function increment(){
//         displatch({type: 'increment'})
//     }


//     function decrement(){
//         displatch({type: 'decrement'})
//     }

//     return (<>
//         <button onClick={decrement}></button>
//         <p>{state.count}</p>
//         <button onClick={increment}></button>

//     </>)
// }

// a simple to do app using the usereducer Hook

// const ACTIONS = {
//     ADD_TODO: 'add-Todo',
//     TOGGLE_TODO: 'togggle-todo', // marking complete or not complete
//     DELETE_TODO: 'delete-todo'
// }

// function reducerApp(todos, actions){
//     switch(actions.type){
//         case ACTIONS.ADD_TODO: 
//             return [ ...todos, newTodo(actions.payload.name)] // pass the name to the newTodo function
//         case ACTIONS.TOGGLE_TODO:
//             return todos.map(todo => {
//                 if(todo.id === actions.payload.id){
//                     return {...todo, complete: !todo.complete} // change the todo.complete from false to true
//                 }
//                 return todo;     
//             })
//         case ACTIONS.DELETE_TODO: 
//             return todos.filter(todo => todo.id !== actions.payload.id)

//         default: todos;
//     }
// }

// function ReducerComponent2(){
//     const [todos, dispatch] = useReducer(reducerApp, [])
//     const [name, setName] = useState('')

//     function handleSubmit(e){
//         e.preventDefault();
//         dispatch({type: ACTIONS.ADD_TODO, payload: {name: name} }) // add a payload to acess the name value of the input 
//         setName('') // reset the input field

//     }

//     function newTodo(name){
//         return {id: Date.now, name: name, complete: false} // it will return an object 
//     }

//     console.log(todos)

//     return (
//         <>
//         <br /> <br />
//         <h2>Simple Todo App using useReducer</h2>
//             <form onClick={handleSubmit}>
//                 <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//             </form>
//             {todos.map(todo => {
//                 <Todo key={todo.id} todo={todo} dispatch = {dispatch}/>
//             })}
//         </>
//     )
// }

// function Todo({ todo, dispatch }){
//     return (
//         <>
//             <div>
//                 <span style={{color: todo.complete ? '#AAA' : '#000'}}>{todo.name}</span>
//                 <button onClick={() => dispatch({type: ACTIONS.TOGGLE_TODO, payload: {id: todo.id}})}>Toggle</button>
//                 <button onClick={() => dispatch({type: ACTIONS.DELETE_TODO, payload: {id: todo.id}})}>Delete</button>
//             </div>
//         </>
//     )
// }

// from chatGpt - updated
// Action Types

const ACTIONS_TYPES = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
};

// The reducer

function reducerFunction(todos, action) {
  switch (action.type) {
    case ACTIONS_TYPES.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];

    case ACTIONS_TYPES.TOGGLE_TODO:
      return todos.map((todo) =>
        // change the complete property value from false to true to mark as complete
        todo.id === action.payload.id ? { ...todo, complete: !todo.complete } : todo ); // change the complete property value from false to true

    case ACTIONS_TYPES.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id); // checks for the element that do not match the criterion and removes them 

    default:
      return todos;
  }
}

// The helper function 

function newTodo(name) {
  return {
    id: Date.now(), // unique id
    name: name,
    complete: false,
  };
}

// The main component

function ReducerComponent2() {
  const [todos, dispatch] = useReducer(reducerFunction, []);
  const [name, setName] = useState("");

function handleSubmit(e) {
    e.preventDefault();

    if (name.trim() === "") return;

    dispatch({ type: ACTIONS_TYPES.ADD_TODO, payload: { name }});

    setName("");
}

  return (
    <>
      <h2>Simple Todo App using useReducer</h2>
      <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter todo..."/>
            <button type="submit">Add</button>
        </form>
      {todos.map((todo) => (<Todo key={todo.id} todo={todo} dispatch={dispatch} />))} {/* pass the todo array and the dispatch function which is the reducer function  */}
    </>
  );
}

// The Todo Component

function Todo({ todo, dispatch }) {
  return (
    <div>
        <span style={{ color: todo.complete ? "#AAA" : "#000", textDecoration: todo.complete ? "line-through" : "none" }}>{todo.name}</span>
        <button onClick={() => dispatch({ type: ACTIONS_TYPES.TOGGLE_TODO, payload: { id: todo.id }})}>Toggle</button>
        <button onClick={() => dispatch({ type: ACTIONS_TYPES.DELETE_TODO, payload: { id: todo.id }})}>Delete</button>
    </div>
  );
}


// // W3schools example: 
// const initialScore = [
//   {
//     id: 1,
//     score: 0,
//     name: "John",
//   },
//   {
//     id: 2,
//     score: 0,
//     name: "Sally",
//   },
// ];
// // the main component

// function Score(){
//     const [score, dispatch] = useReducer(reducer, initialScore) // the initialscore / score is already declared as the object
//     // const [count, setCount] = useState()v- not used

//     function handleIncrease(player){
//         dispatch({type: 'INCREASE', id: player.id})
//     }
//     return (
//         <>
//             {score.map(player => {
//                 (
//                     <div key={player.id}>
//                         <label htmlFor=""> Count Score:
//                             {/* passing one of the object to the handleincrease function */}
//                             <button type="button" onClick={() => handleIncrease(player)} value={player.name}
//                                 style={{backgroundColor: 'green', padding: '20px'}}>Count Button</button>
//                         </label>
//                         {player.score}
//                     </div>
//                 )
//             })}
//         </>
//     )
// }

// function reducer(state, actions){
//     switch (actions.type) {

//         case 'INCREASE':
//             return state.map(player => {
//                 if(player.id === actions.id){
//                     return {... player, score: player.score + 1}
//                 }
//                 return player;
//             })

//         default:
//             state;
//     }
// }


export {ReducerComponent, ReducerComponent2}