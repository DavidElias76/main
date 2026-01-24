
// Use the react Hook file and the reac Usestate to know more about the usestate hook
// THE EXAMPLE FROM FRREECODECAMP 

// NOTE: Remember to differentiate btw spreading an object and array 
// NOTE: React doesnot use the push, splice and pop method when modifying the array 

import { useState } from "react";

function ProfileComponent(){

    const [user, setUser] = useState({
        name: "John Doe",
        age: 31,
        city: "LA"
    })

    // // this only updates the age property
    // const handleAgeChange = (e) => {
    //     setUser(prevUser => {
    //         return {...prevUser, age: e.target.value} // target the input value cnad change it when using the setUser
    //     })  
    // }

    // update every property you can combine them into a single setter function like this:
    const handleChange = (e) => {

        const { name, value } = e.target;

        setUser(prevUser => {
            return {...prevUser, [name]: value}
        })
    }

    return (
        <>
            <div style={{ margin: '10px',  gap: '20px', flexDirection: "column", backgroundColor: 'black', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <h1>User Profile</h1>
                <p>Name: {user.name}</p>
                <p>Age: {user.age}</p>
                <p>City: {user.city}</p>

                <h2>Update User Age </h2>
                <input type="number" name="age" value={user.age} onChange={handleChange} />

                <h2>Update User Name </h2>
                <input type="text" name="name" value={user.name} onChange={handleChange} />

                <h2>Update User City </h2>
                <input type="text" name="city" value={user.city} onChange={handleChange} />                
            </div>
        </>
    )
}

// Updating the array using the spread operator

function ItemListComponent(){
    const [items, setItems] = useState([
        { id: 0, name: "Item 1" },
        { id: 1, name: "Item 2" },
        { id: 2, name: "Item 3" },
    ])

    // add item in the array and update it
    function updateArray(){
        const newItem = { id: items.length + 1, name: `Item ${items.length + 1}` };

        setItems((itemObj) => {
            return [...itemObj, newItem]
        })
    }

    // remove the item in the array using the filter method - it is the only method used to remove the item in the array 
    function removeItem(id){
        setItems(prevItems => {
           prevItems.filter(item => item.id !== id)
        })
    }

    return(
        <>
            <button onClick={updateArray}>Add Item</button>
            <ul>
                {items.map(item => ( 
                <>
                    <li key = {item.id}>{item.name} {" "}</li>
                    <button onClick={removeItem}>Remove Button</button>  
                </>
                ))}
            </ul>
        </>
    )
}


export {ProfileComponent, ItemListComponent}
