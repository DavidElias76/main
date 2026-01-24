import './App.css'

function MyList(){

    const fruitlist = ['apple', 'banana', 'cherry'];

    const users = [
        { id: 1, name: 'John', age: 30 },
        { id: 2, name: 'Jane', age: 25 },
        { id: 3, name: 'Bob', age: 35 }
    ];

    const usersList = [
        { id: "user-001-employee", name: "Alice", email: "alice@example.com" },
        { id: "user-002-employee", name: "Bob", email: "bob@example.com" },
        { id: "user-003-employee", name: "John", email: "john@example.com" },
    ];

    // declaration of a vehicle object and an updateVehicle object and combining the using the spread operator

    const myVehicle = {
        brand: 'Ford',
        model: 'Mustang',
        color: 'red'
    }

    const updateMyVehicle = {
        type: 'car',
        year: 2021, 
        color: 'yellow'
    }

    const mergedVehicles = { ...myVehicle, ...updateMyVehicle }; // combine the object using spread syntax

    // writing a react jsx element instead of a component used in wring small parts of the code
    const myElement = (
        <>
            <p>I am a paragraph.</p>
            <p>I am a paragraph too.</p>
        </>
    );

    console.log(mergedVehicles);

    // Javascript CSS Files Object in React- the keys are Camel- Cased and the value are string format

    const defaultStyles = {
        backgroundColor: "#007BFF",
        color: "white",
        border: "none",
        borderRadius: "4px",
        padding: "10px 20px",
        fontSize: "16px",
        fontWeight: "bold",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
  };

    const cars = [
        {id: 1001, brand: 'Ford'},
        {id: 1002, brand: 'BMW'},
        {id: 1003, brand: 'Audi'}
    ];

    // destructure the nested objects and arrays in the map function
    const personsObjects = {
        firstName: "John",
        lastName: "Doe",
        age: 50,
        car: {
            brand: 'Ford',
            model: 'Mustang',
        }
    };


    // Add the key attribute to let react identify which items have changed, are added, or are removed
    return (

        <>
            <ol className='user-items'>
                {fruitlist.map(fruit => {
                    return <li key={fruit} className='list-items'>{fruit}</li>
                })}
            </ol>

            <ul className='user-items'>
                {users.map(user => {
                    return <li key={user.id} className='user-item'>{user.name} - {user.age} years old</li>;
                })}
            </ul>

            <ul>
                {fruitlist.map((fruit, index, array) => {
                    return (
                    <li key={fruit}>
                        Number: {fruit}, Index: {index}, Array: {array}
                    </li>
                    );
                })}
            </ul>

            {/* using the array index as keys */}
            {/* Object.entries converts the object to arrays and displays only the value unless the key is specified */}

            <ul className='user-items'>
                {Object.entries(mergedVehicles).map(([key, value]) => {
                    return <li key={key} className='list-items'>{key}: {value}</li>
                })}
            </ul>

            {myElement} 

            <ul>
                <li className='text'> The user's names are:{usersList.map(user => user.name)}</li>
            </ul>

            {/* the userlist object */}

            <ul>
                {usersList.map(user => {
                    return <li className='text' key={user.id}>{user.id} - {user.name} - {user.email}</li>
                })}
            </ul>

            {/* javascript object css file - applying the style to the style attribute */}

            <button style={defaultStyles}>Click Me</button>;


            <ul className='card'>
                {cars.map(car => {
                    return <li key={car.id} className='text'>Car Brand: {car.brand}</li>
                })}
            </ul>


            {/* using the Array Index as keys */}
            <ul className='card'>
                {fruitlist.map((fruit, index) => {
                    return <li key={index}>{fruit}</li>;
                })}
            </ul>

            {/* Destructuring nested Objects and Arrays */}
            {/* Object entries converts the object to arrays and displays only the value unless the key is specified */}
            <ul className= 'card'>
                {Object.entries(personsObjects).map(([key, value]) => {
                    return <li key={key} className='text'>{key}: {typeof value === 'object' ? JSON.stringify(value) : value}</li>
                })}
            </ul>

            {/* Destructuring the nested Objects and value pairs */}
            <ul>
                {Object.entries(personsObjects).map(([key, value]) => {
                    return <li>{key} : {typeof value === 'object' ? (<ul>
                        {Object.entries(value).map(([nestedKey, nestedValue]) => {
                            return <li key = {nestedKey}>{nestedKey}: {nestedValue}</li>
                        })}
                    </ul>) : value}</li>
                })}
            </ul>

        </>
    )
}
export default MyList;