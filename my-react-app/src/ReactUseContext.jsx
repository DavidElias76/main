
// react useContext - is another way of managing the state globally 

// A context is a way to share data globally in a React app without passing props manually through every component.

//  A context is like a shared storage that many components can read from (and sometimes write to).

// To do this without Context, we will need to pass the state as "props" through each nested component. This is called "prop drilling".

import { useState, createContext, useContext } from 'react';

// IMPORT THE USECONTEXT AND CREATECONTEXT 

// without using the useContext 

// function Component1() {
//   const [user, setUser] = useState("Linus");

//   return (
//     <>
//       <h1>{`Hello ${user}!`}</h1>
//       <Component2 user={user} />
//     </>
//   );
// }

// function Component2({ user }) {
//   return (
//     <>
//       <h1>Component 2</h1>
//       <Component3 user={user} />
//     </>
//   );
// }

// function Component3({ user }) {
//   return (
//     <>
//       <h1>Component 3</h1>
//       <h2>{`Hello ${user} again!`}</h2>
//     </>
//   );
// }


// THE SOLUTION:

// The solution is to create context, you must Import createContext and initialize it:

// we start by creating a context - it is a container for storing data globally 
const UserContext = createContext(); // it creates a context object and data can be stored globally 

// Next we'll use the Context Provider to wrap the tree of components that need the state Context.

function Component1(){
    const [user] = useState('linus') // the function to update the variable is not used so there is no need to be included

    return (
        <>
        {/* Provider makes user available to all child components - Any component inside this Provider tree can access user */}
        {/* The provider puts the value inside the UserContext container */}
            <UserContext.Provider value={user}>
                 <h1>{`Hello ${user}!`}</h1>
                 <Component2 />
            </UserContext.Provider>
        </>
    )
}

//  so now the userContext object isUserContext = {
//   value: "Linus"
// }

// In order to use the Context in a child component, we need to access it using the useContext Hook.
function Component2() {
  return (
    <>
    {/* component 2 passes down rendring to component 3 */}
      <h1>Component 2</h1> 
      <Component3 />
    </>
  );
}

function Component3(){

    // gets the current value from the userContext - user becomes linus 
    const user = useContext(UserContext); // useContext(UserContext) reads the value from the nearest Provider
    // it also tell react which container to be open when there are multiple containers

    return (
        <>
            <h1>Component 3</h1>
            <h2>{`Hello ${user} again!`}</h2>
        </>
  );
}

// NOTE: if the value of the provider changes, react will Update UserContext value, 
// Automatically re-render all components using useContext(UserContext) and
// Update the UI

// Example 2 - passes the user to all components

const userContextObj = createContext();

function UserComponent(){
    const [user] = useState('David')

    return (
        <userContextObj.Provider value={user}>
            <h2>The Name is: {user}</h2>
            <UserComponent2 />
        </userContextObj.Provider>
    )
}

function UserComponent2(){

    const user = useContext(userContextObj);

    return (
        <>
            <h1>Component 2</h1>
            <h2>{`Hello ${user} from Component 2!`}</h2>
            <UserComponent3 />
        </>
  );  
}

function UserComponent3(){
    const user = useContext(userContextObj);

     return (
        <>
            <h1>Component 3</h1>
            <h2>{`Hello ${user} from Component 3!`}</h2>
        </>
  );  
    
}

// there is a problem with this code - there is an infinite loop with rendering in the we page 

export {Component1, UserComponent}