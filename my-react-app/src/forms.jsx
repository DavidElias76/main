 import "./App.css"
 import { useState } from "react";

//  take a look at component state management for more complex form handling
// any chages made in the input field will be reflected in the state variable name

function MyForm(){

    return (
        <>
            <h2 className="text">My Form Component</h2>
            <form>
                <label htmlFor="fname">First name:</label><br />
                <input type="text" id="fname" name="fname" /><br />
                <label htmlFor="lname">Last name:</label><br />
                <input type="text" id="lname" name="lname" /><br /><br />
                <input type="submit" value="Submit" />
            </form> 
        </>
    )
}

function MyFormValue(){

    // the name variable is used to store the value of the input field
    // the userName function is used to update the value of the name variable
    const [name, userName] = useState("");

    // const [name, setName] = useState("John"); the name variable is initialized with "John"

    function handleChange(e){
        userName(e.target.value); // targts the input element 
    }

    // the onchange event listerner listens to any change in the input element

    return (
        <>
            <h2 className="text">My Form Component with Value - Enter the value in the input field</h2>
            <form>
                <label>Enter the name:
                    <input type="text" value={name} onChange={handleChange}/>
                    {/* <input type="text"  value={name} onChange={(e) => userName(e.target.value)}/>  - it can also be written as this way*/}
                </label>
                <p>Current Name is: {name}</p>
            </form>
        </>
    )
    
}

// react form submit

// Name is variable used to store the input value while the setName function is used to update the input value and store it back to the name variable 

function MyFormSubmit(){
    
    const [name, setName] = useState("");

    function handleChange(e){
        setName(e.target.value); // target the input element and set the name with the value of the input element
    }

    // target the whole form element
    function handleSubmit(e){
        e.preventDefault();
        alert(`The name you entered was: ${name}`);
    }

    // the onSubmit function is used when the form is being submitted 
    return(
        <>
            <h2 className="text">React Form Submit Example</h2>
            <form onSubmit={handleSubmit}>
                <label>Enter the name:
                    <input type="text" value={name} onChange={handleChange} />
                </label>
                <input type="submit" value="Submit" style={{backgroundColor: "green", padding: "10px 35px", fontSize: "16px", border: "1px solid black", color: "white", cursor: "pointer"}}/>
            </form>
        </>
    )
}

// React form using The Arrow Function instead of a separate function for handling the form submit and value change

function MyFormSubmit2(){
    const [name, setName] = useState("")

    return (
        <>
            <h2 className="text">The Arrow Function Form</h2>
            <form action="" onSubmit={(e) => {e.preventDefault(); alert(`The form is submitted, The name entered is ${name}`)}}>
                <label htmlFor="">Enter the name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </label>
            </form>
        </>
    )
}

// setting the initial value of the form input 
function MyFormInitialValue(){
    const [name, setName] = useState("John Doe"); // initial value is set to "John Doe" that has been entered in the input field

    function handleChange(e){
        setName(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        alert(`The name you entered was: ${name}`);
    }   

    return (
        <>
            <h2 className="text">React Form with Initial Value</h2>
            <form onSubmit={handleSubmit}>
                <label>Enter the name:
                    <input type="text" value={name} onChange={handleChange} />
                </label>
                <input type="submit" value="Submit" style={{backgroundColor: "green", padding: "10px 35px", fontSize: "16px", border: "1px solid black", color: "white", cursor: "pointer"}}/>
            </form>
        </>
    )
}

// react textarea form

function MyTextAreaForm(){
    const [message, setMessage] = useState("");

    function handleChange(e){
        setMessage(e.target.value);
    }
    
    return (
        <>
            <h2 className="text">React TextArea Form Example</h2>
            <form>
                <label>Enter your message:
                    <textarea value={message} onChange={handleChange}  style={{padding: "20px"}}/>
                </label>
            </form>
        </>
    )
}

// react form select dropdown

function MySelectForm(){
    const [car, selectCar] = useState("Volvo");

    function handleChange(event){
        selectCar(event.target.value)
    }

    return (
        <>
            <form>
                <label>Select a Car:</label>
                <select name="cars" id="cars" value={car} onChange={handleChange} style={{width: "200px", padding: "10px"}}>
                    <option value= "ford">Ford</option>
                    <option value= "volvo">Volvo</option>
                    <option value= "bmw">BMW</option>
                    <option value= "audi">Audi</option>
                </select>
            </form>

            <p>The selected car is: {car}</p>
        </>
    )
}

// React handling multiple form elements in one component

function MultipleForms(){

    const [inputs, setInputs] = useState({})

    function handleChange(event){

        // the field and the value to be stored in the state object 
        const name = event.target.name; // reads the name attribute of the input field "firstname" or "lastname"
        const value = event.target.value; // reads the value entered in the input field

        setInputs(values => ({...values, [name]: value})) // spread operator to copy the existing values and update the specific field
    }

    return (

        <>
            <form>
                <label>
                    First Name:
                    <input type="text" name="firstname" value={inputs.firstname || ""} onChange={handleChange} />
                </label>

                <label>
                    Last Name:
                    <input type="text" name="lastname" value={inputs.lastname || ""} onChange={handleChange} />
                </label>
            </form>

            <p>The first name and the last name are: {inputs.firstname} {inputs.lastname}</p>
        </>
    )
}

// The Object is already defined above in MultipleForms function

function MyFormSelectObject(){

    const [inputs, setInputs] = useState({
        firstName: "John",
        lastName: "Doe",
    })

    function handleChange(event){
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    <form>
      <label>First name:
        <input 
            type="text" 
            name="firstName" 
            value={inputs.firstName} 
            onChange={handleChange}
        />
      </label>
      <label>Last name:
            <input 
            type="text" 
            name="lastName" 
            value={inputs.lastName} 
            onChange={handleChange}
            />
        </label>
        <p>Current values: {inputs.firstName} {inputs.lastName}</p>
    </form>
}

// the youtube video used to explain this form handling is available at https://www.youtube.com/watch?v=5FDDoHI173g

function MultipleFormsObject(){
    const [names, setNames] = useState({   
        // declare object to store multiple values
        firstName: "",
        lastName: ""
    }) // names is an object to store multiple values

    return (
        <div>
            <form action="">
                <label htmlFor="#firstName">FirstName: 
                    <input type="text" onChange={(e) => setNames({firstName: e.target.value})} value={names.firstName}/>
                </label>

                <label htmlFor="">LastName: 
                    <input type="text"  value={names.lastName} onChange={(e) => setNames({lastName: e.target.value})}/>
                </label>
            </form>
        </div>
    )

}

//  React Checkboxes
function CheckBoxesInputs() {
    const [inputs, setInputs] = useState({
        firstName: "",
        tomato: false, // checkboxes initial value set to boolean value
        onion: false
    });

    const handleChange = (e) => {
        const target = e.target;// this is the input element
        const value = target.type === 'checkbox' ? target.checked : target.value; // check if the type attribute is a checkbox and check the box and if not it return the value 
        const name = e.target.name; // get the Name attribute of the input element
        setInputs(values => ({...values, [name]: value})) // values is a parameter that represents the current state(inputs) and the spread operator is used to copy the existing values in the inputs object and only update the specific field that has changed
    }

    const handleSubmit = (event) => {
        let fillings = '';
        // check if the checkboxes are checked and add the value to the fillings string
        if (inputs.tomato) fillings += 'tomato';
        if (inputs.onion) {
        if (inputs.tomato) fillings += ' and ';
        fillings += 'onion';
        }
        if (fillings == '') fillings = 'no fillings';
        alert(`${inputs.firstName} wants a burger with ${fillings}`);
        event.preventDefault(); // prevent the default form submission behavior
  };

  return (
        <form onSubmit={handleSubmit} style={{width: "200px", height: "200px", backgroundColor: "grey", border: "1px solid black", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
        <label>My name is:
        <input 
            type="text" 
            name="firstName" 
            value={inputs.firstName} // // bind the checked attribute to the state variable  
            onChange={handleChange}
        />
        </label>

        <p>I want a burger with:</p>
        <label>Tomato:
        <input 
            type="checkbox" 
            name="tomato" 
            checked={inputs.tomato} // bind the checked attribute to the state variable 
            onChange={handleChange}
        />
        </label>
        <label>Onion:
            <input 
            type="checkbox" 
            name="onion" 
            checked={inputs.onion} // // bind the checked attribute to the state variable 
            onChange={handleChange}
            />
            </label>
            <button type="submit">Submit</button>
        </form>
  )
}

// initial values
function CheckBoxesInputsValues(){

    // adding the initial values to the 

    const [inputs, setInputs] = useState({
        firstName: "John",
        lastName: "Doe"
    })

    function handleChange(e){
        const target = e.target
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        let fillings = '';
        if (inputs.tomato) fillings += 'tomato';
        if (inputs.onion) {
        if (inputs.tomato) fillings += ' and ';
        fillings += 'onion';
        }
        if (fillings == '') fillings = 'no fillings';
        alert(`${inputs.firstName} wants a burger with ${fillings}`);
        event.preventDefault();
    };

    return (
    <form onSubmit={handleSubmit}>
      <label>My name is:
      <input 
        type="text" 
        name="firstname" 
        value={inputs.firstName} 
        onChange={handleChange}
      />
      </label>

      <p>I want a burger with:</p>
      <label>Tomato:
      <input 
        type="checkbox" 
        name="tomato" 
        checked={inputs.tomato} 
        onChange={handleChange}
      />
      </label>
      <label>Onion:
        <input 
          type="checkbox" 
          name="onion" 
          checked={inputs.onion} 
          onChange={handleChange}
        />
        </label>
        <button type="submit">Submit</button>
    </form>
  )
}

// React radio

function RadioCheckedForms(){

    const formStyles = {
        backgroundColor: 'grey',
         width: "200px",
        height: "100px",   
    }

    const [selectedFruit, setSelectedFruit] = useState('banana') // the default value of he selected fruit "banana"

    const handleChange = (event) => {
        setSelectedFruit(event.target.value) // target the value of the selected radio button
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`You're favourite fruit is ${selectedFruit}`)
    }

    return (
        <>
            <form action="" style={formStyles} onSubmit={handleSubmit}>
                <p>Select your favourite fruit</p>
                <label htmlFor="">Apples
                    <input type="radio" name="fruit" id="fruit" value= "apples" onChange={handleChange} checked = {selectedFruit === 'apples'} />
                </label>
                <br />

                <label htmlFor="">Banana
                    <input type="radio" name="fruit" id="fruit" value= "banana" onChange={handleChange} checked = {selectedFruit === 'apples'} />
                </label>
                <br />

                <label htmlFor="">Cherry
                    <input type="radio" name="fruit" id="fruit" value= "orange" onChange={handleChange} checked = {selectedFruit === 'apples'}/>
                </label>
            </form>
        </>
    )

}



export { MyForm, MyFormValue, MyFormSubmit, MyTextAreaForm, MySelectForm, MultipleForms, MyFormSelectObject, CheckBoxesInputs, RadioCheckedForms };