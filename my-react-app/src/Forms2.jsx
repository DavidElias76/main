
// form inputs handling with multiple inputs using a single state object

// writing the OnChange function on the same line as the input element
import { useState } from "react";

const formStyles = {
        display: "flex",
        flexDirection: "column",
        width: "500px",
        height: "200px",
        justifyContent: "space-around",
        margin: "10px auto",
        backgroundColor: "#5c5959ff",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        padding: "20px",
        borderRadius: "5px"
    }

function FormInputs(){

    const [inputs, setInputs] = useState({
        firstName: "",
        lastName: "",
        password: ""
    }); // this part is used to handle multiple inputs in a form using a single state object and remember everything by default the state is an empty object

    const formStyles = {
        display: "flex",
        flexDirection: "column",
        width: "500px",
        height: "200px",
        justifyContent: "space-around",
        margin: "10px auto",
        backgroundColor: "#5c5959ff",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        padding: "20px",
        borderRadius: "5px"
    }

    // the spread operator is used to take what is already in the inputs object and only update the value that is being changed
    // take whatever is in the name state and add content to it without removing the existing content
    // does not require a name attribute on the input element
    return (
        <>
        <br />
            <h2 style={{color: "red", fontSize: '20px'}}>Handling the multiple inputs</h2>
            <br />

            <form action="" onSubmit={(e) => {e.preventDefault(); alert('The form is submitted')}} style={formStyles}>
                <label htmlFor="firstName">First Name:
                    <input type="text" id="firstName" value={inputs.firstName}  onChange={(e) => setInputs({ ...inputs, firstName: e.target.value})}/>
                </label>

                <label htmlFor="lastName">Last Name:
                    <input type="text" id="lastName" value={inputs.lastName} onChange={(e) => setInputs({ ...inputs, lastName: e.target.value})} />
                </label>
                <button type="submit" style={{backgroundColor: "blue", color: "white", border: "none", padding: "20px", borderRadius: "5px", width: "100px"}}>Submit</button>

            </form>
            <h2 style={{fontSize: "20px"}}>The Names are: {inputs.firstName} {inputs.lastName}</h2>
        </>
    )
}

// using the spread operator only once in the onChange function to update the state object

function FormInputs2(){
    const [inputs, setInputs] = useState({
        firstName: "",
        lastName: "",
        password: ""
    }
    )

    // write the one function that will change get all the input values and update the state object
    function handleChange(e){
        const name = e.target.name // get the name attribute of the input element
        const value = e.target.value // get the value of the input element

        // When any input changes, get its name and value, then update only that field in the state
        setInputs({ ...inputs, [name]: value }) // use the spread operator to update the state object . this function copies eveything in the inputs object and only updates the value that has changed
    }

    const formStyles = {
        display: "flex",
        flexDirection: "column",
        width: "500px",
        height: "200px",
        justifyContent: "space-around",
        margin: "10px auto",
        backgroundColor: "#5c5959ff",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        padding: "20px",
        borderRadius: "5px"
    }

    return (
        <>
        <br />
            <h2 style={{color: "red", fontSize: '20px'}}>Handling the multiple inputs Part 2</h2>
            <br />

            <form action="" onSubmit={(e) => {e.preventDefault(); alert('The form is submitted')}} style={formStyles}>
                <label htmlFor="firstName">First Name:
                    <input type="text" name="firstName" value={inputs.firstName} onChange={handleChange}/>
                </label>

                <label htmlFor="lastName">Last Name:
                    <input type="text" name="lastName" value={inputs.lastName} onChange={handleChange} />
                </label>
                <button type="submit" style={{backgroundColor: "blue", color: "white", border: "none", padding: "20px", borderRadius: "5px", width: "100px"}}>Submit</button>

            </form>
            <h2 style={{fontSize: "20px"}}>The Names are: {inputs.firstName} {inputs.lastName}</h2>
        </>
    )
}
// NOTE: the square brackets around name in [name]: value are used to dynamically set the property name in the object based on the value of the name variable. This is known as computed property names in JavaScript.
// without using the spread operator in the onChange function to update the state object

// checkBoxes and Radio Buttons can also be handled using the same approach as above by adding a type check in the handleChange function to determine if the input is a checkbox or radio button and then updating the state accordingly.

// React Checkboxes - method 1 writing the function outside the input element
function CheckBoxesInputs1(){
    const [name, setName] = useState({
        firstName: "",
        tomato: false,
        onion: false
    });

    function handleChange(e){
        const input = e.target // this target is the input element
        const value = input.type === 'checkbox' ? input.checked : input.value; // check the type of the element is a checkbox or not
        setName({ ...name, [input.name]: value }) // get the name attribute and set the value accordingly
    }

    function handleSubmit(e){
        let fillings = '';
        if(name.tomato) fillings += 'tomato'; 
        if(name.onion) {
            if(name.tomato) fillings += ' and ';
            fillings += 'onion';
        }
        if(fillings == '') fillings = 'no fillings';
        alert(`${name.firstName} wants a burger with ${fillings}`);
        e.preventDefault();
    }

    return (
        <>
        <br />
            <h2 style={{color: "red", fontSize: '20px'}}>Handling Checkboxes Inputs</h2>
            <br />  
            <form action="" onSubmit={handleSubmit} style={formStyles}>
                <label htmlFor="firstName">First Name:
                    <input type="text" name="firstName" value={name.firstName} onChange={handleChange}/>
                </label>
                <label htmlFor="tomato">Tomato:
                    <input type="checkbox" name="tomato" checked={name.tomato} onChange={handleChange}/>
                </label>
                <label htmlFor="onion">Onion:
                    <input type="checkbox" name="onion" checked={name.onion} onChange={handleChange}/>
                </label>

                <button type="submit">Submit</button>
            </form>
        </>
    )
}
// needs a bit of recap to undestand fully

function CheckBoxesInputs2(){
    const [name, selectName] = useState({
        firstName: "",
        tomato: false,
        onion: false
    })

    return (
        <>
            <br />
            <h2 style={{color: "red", fontSize: '20px'}}>Handling Checkboxes Inputs - Method 2</h2>
            <br />
            <form action="" onSubmit={(e) => {e.preventDefault(); alert(`${name.firstName} wants a burger with ${name.tomato ? 'tomato' : ''} and ${name.onion ? 'onion' : ''}`)}} style={formStyles}>
                <label htmlFor="firstName">First Name:
                    <input type="text" name="firstName" value={name.firstName} onChange={(e) => selectName({ ...name, firstName: e.target.value})}/>
                </label>
                <label htmlFor="tomato">Tomato:
                    <input type="checkbox" name="tomato" checked={name.tomato} onChange={(e) => selectName({ ...name, tomato: e.target.checked})}/>
                </label>
                <label htmlFor="onion">Onion:
                    <input type="checkbox" name="onion" checked={name.onion} onChange={(e) => selectName({ ...name, onion: e.target.checked})}/>
                </label>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

// Radio Buttons handling using a single state object - only 1 single selection is allowed

function RadioButtonsInputs(){
    const [radio, setRadio] = useState('banana');

    function handleChange(e){
        setRadio(e.target.value) // get the value of the input element selected
    }

    function handleSubmit(e){
        alert(`Your favorite fruit is: ${radio}`);
        e.preventDefault();
    }   

    return (
            <form onSubmit={handleSubmit}>
                <p>Select your favorite fruit:</p>
            <label>
                <input type="radio" name="fruit" value="apple" checked={radio === 'apple'} onChange={handleChange} /> Apple
            </label>
            <br />
            <label>
                <input type="radio" name="fruit" value="banana" checked={radio === 'banana'} onChange={handleChange} /> Banana
            </label>
            <br />
            <label>
                <input type="radio" name="fruit" value="cherry" checked={radio === 'cherry'} onChange={handleChange} /> Cherry
            </label>
            <br />
            <button type="submit">Submit</button>
            </form>
  );
}
export { FormInputs, FormInputs2, CheckBoxesInputs1, CheckBoxesInputs2, RadioButtonsInputs };