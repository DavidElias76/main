// React Higher Order Components
// A Higher Order Component (HOC) is like a wrapper that adds extra features to your React components. 
// Think of it like putting a case on your phone - the case adds new features (like water protection) without changing the phone itself.

import Greetings from "./App";

// Note: HOCs are functions that take a component and return an enhanced version of that component.- they take the components and add some new features to give new high order functions

// exmaple of a function without a component

// function with a HOC function  - it will take a component as an argument 

function WithBoarder(WrappedComponent){
    const divStyles = {
        border: '2px solid blue', 
        padding: '10px',
        backgroundColor: "grey",
        color: "white" 
    }
    return function (props){
        return (
            <>
                <div style={divStyles}> <WrappedComponent { ...props}/> </div>
            </>
        )
    }
}

// a simple component without border
function GreetingWithoutBorder({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// create a component with border
const GreetingWithBorder = WithBoarder(GreetingWithoutBorder) // pass the component GreetingWithoutBorder as an argument to the high order functions

export {GreetingWithoutBorder, GreetingWithBorder};
