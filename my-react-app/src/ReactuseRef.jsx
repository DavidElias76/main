
// ReactuseRef - The useRef Hook allows you to persist values between renders.
// It can be used to store a mutable value that does not cause a re-render when updated.
// useRef lets you read  the updated value without waiting for a re-render 

import { useEffect, useRef, useState } from "react";  // import the useref from react to use it

const divStyles = {
    backgroundColor: "grey", 
    width: '500px', 
    height: "200px", 
    display: 'flex', 
    justifyContent: "space-between", 
    alignItems: 'center', 
    flexDirection: 'column'
}

const buttonStyles= {backgroundColor: 'green', padding: '20px', color: 'white', marginLeft: '20px'}

function UseRefComponent(){

    const [inputValue, setInputValue] = useState(''); 

    // count.current persists between renders - Updating count.current does NOT trigger a re-render
    const count = useRef(0); // useRef(0) creates a mutable object - it returns { current: 0 } 

    useEffect(() => {

        count.current = count.current + 1; // count the values and retaun them - increments the render count
    }) // there is no dependacy which means it runs in every render 

    return (
        <>
        <div style={divStyles}>
            <p>Type in the input field:</p>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <h1>Render Count: {count.current}</h1>
        </div>
        </>
    )
}

// Acessing the DOM elements

// The useRef Hook is often used to access DOM elements directly.
// First, we create a ref using the useRef Hook: const inputElement = useRef();.
// Then, we attach the ref to a DOM element using the ref attribute in JSX: <input type="text" ref={inputElement} />.
// Finally, we can access the DOM element using the current property: inputElement.current.

function UserRefComponent2(){
    
    const inputElement = useRef(); // this creates an ref object with the current property set to undefined - { current: undefined } 

    // when the button in clicked the cursor focuses on the input field automatically 
    const focusInput = () => {
        inputElement.current.focus() // this focuses on the current object 
    }
    //  the input field gets focus when the button is clicked, because the onClick function calls inputElement.current.focus().

    return (
        <>
            <div style={divStyles}>
                <h2>Accessing the DOM elements</h2>
                <input type="text" ref={inputElement} /> {/*the ref attribute is used to link / connects btw the real DOM element(input) and the ref object */}
                <button onClick={focusInput} style={buttonStyles}>Focus Input</button>
            </div>
        </>
  );
}

// Tracking the state changes - useref is used to keep track of the previous state changes

function UserComponent3(){
    const [inputValue, setInputValue] = useState("")
    const previousInputValue = useRef("") // creates the ref object (previousInputValue) and the value of the current property is empty  

    useEffect(() => {
        previousInputValue.current = inputValue; // add the current property the value of input value and the value is stored
    }, [inputValue]) // This will only render when the input value changes

    function HandleChange(e){
        setInputValue(e.target.value)
    }

     return (
        <>
        <div>
            <input type="text" value={inputValue} onChange={HandleChange} />
            <h2>Current Value: {inputValue}</h2>
            <h2>Previous Value: {previousInputValue.current}</h2>
        </div>
        </>
  );
}

// this uses the useRef to focus on the dom element 
function UncontrolledForm() {
  const nameRef = useRef();

  const handleSubmit = () => {
    alert(`The value ${nameRef.current.value} was submitted`);
  };

  return (
    <>
      <input type="text" ref={nameRef} />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}

// the difference btw the usestate and useref in rendering 
function Example() {
  const [count, setCount] = useState(0);
  const refCount = useRef(0);

  //   refCount.current++; // increment it by 1 in order to read the value 

  console.log(`The RefCount: ${refCount.current}`)
  console.log(`The Count: ${count}`)

  return (
    <>
    <br /> <br />
    <h2>The difference btw the useState and the useRef Hooks</h2>
      <p>State Count: {count}</p>
      {/* the value will not be updated */}
      <p>Ref Count: {refCount.current}</p> {/* we only get the updated value when using the usestate hook and useRef doesnot wait for  a render */}

      <button style={buttonStyles} onClick={() => setCount(count + 1)}>Increase State</button>

      <button style={buttonStyles} onClick={() => refCount.current++}>Increase Ref</button>
    </>
  );
}


export { UseRefComponent, UserRefComponent2, UserComponent3, UncontrolledForm, Example }