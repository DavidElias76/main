
// React useMemo - returns a memorized value
// it only runs when one of the dependencies update 

import { useState, useMemo } from "react";

function MemoComponent(){
    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)

    // const doubleNumber = slowFunction(number) // This function gets called every single time we render our component 

    // It will retain the value and only run depending on the dependancy value(number) - this function returns and memorizes the value and not the whole function itself
    const doubleNumber = useMemo(() => {
        slowFunction(number)
    }, [number])

    // // it will runs depending on the dependancy 
    // const themeStyles = useMemo(() => {
    //     backgoundColor: dark ? 'black' : 'white',
    //     color: dark ? 'white' : 'black'
    // }, [dark])

    // it will run every render
    const themeStyles = {
        backgoundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
    }

    return (
        <>
            <input type="number"  value={number} onChange={(e) => setNumber(parseInt(e.target.value))}/>
            <button onClick={() => setDark(prevDark => !prevDark)} style={{padding: '10px', backgroundColor: 'green'}}>Change Theme</button>
            <div style={themeStyles}>{doubleNumber}</div>
        </>
    )
}

function slowFunction(num){
    console.log("Calling slow function")
    // for(let i = 0; i <= 1000000000; i++){}
    return num * 2;
}



function CountComponent(){
    const [count, setCount] = useState(0)
    const [todos, setTodos] = useState([])
    const calculation = useMemo(() => expensiveCalculation(count), [count]) // This function will run everytime the count variable changes and will stop if it doesnot run

    const increment = () => {
        setCount((c) => c + 1); // add a count 
    };
    const addTodo = () => {
        setTodos((t) => [...t, "New Todo"]); // add the new todos text in the array after spreading the array 
    };

    return (
        <>
            <div>
                <div>
                    <h2>My Todos</h2>
                    {todos.map((todo, index) => <p key={index}>{todo}</p>)}
                    <button onClick={addTodo} style={{padding: '10px', backgroundColor: 'green'}}>Add Todo</button>
                </div>
                <hr />
                <div>
                    Count: {count}
                    <button onClick={increment}>+</button>
                     <h2>Expensive Calculation</h2>
                     {calculation}
                </div>
            </div>
        </>
    )
}

const expensiveCalculation = (num) => {
    console.log('calculating...')
    for(let i = 0; i <= 1000000000; i++){
        num += 1;
    }
    return num;
}


export {MemoComponent, CountComponent}