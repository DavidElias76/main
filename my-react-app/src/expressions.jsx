import './App.css'


// note: you use curly braces to write expression 

function kwtohp(kw){
    return kw * 1.34102;
}
    
// expressions component to demonstrate react expressions

function Expressions({isActive}){

    const horseP = 300 * 2.18;

    const myObj = {
        name: "Ferrari",
        model: "2022",
        color: "Red"
    }

    const buttonStyles = {
        backgroundColor: isActive ? "green" : "red",
        color: "white",
        padding: "10px 15px",
        border: "none",
        cursor: "pointer",
    };
            

    return(

        <>

        {/* Expressions */}
        {/* function calls allow you to embed the function as a variable  */}
        <h2 style={{color: "red", fontSize: "20px"}}>Expressions section in React</h2>
        
            <h2 className='text'>My Car HorsePower</h2>
            <p className='text'>It has {218 * 1.36} horsepower.</p>
            <p className='text'>It has the horsepower of a {horseP} horse.</p>
            <p className='text'>It has the horsepower of a {kwtohp(horseP)} kilowatt.</p>

            <h2 className='text'>Car Details</h2>
            <p className='text'>Name: {myObj.name}</p>
            <p className='text'>Model: {myObj.model}</p>
            <p className='text'>Color: {myObj.color}</p>

            {/* calculations in react */}
            <h1>React is {5 + 5} times better with JSX</h1>;

            {/* inline styles in react */}

            <button style={buttonStyles}>Click Me</button>


            {/* using double AND(&&) for conditional rendering */}

            {isActive && <p className='text'>The button is Active</p>}
            {!isActive && <p className='text'>The button is Inactive</p>}


            {/* using the ternary operator for conditional rendering */}
            {isActive ? <p className='text'>The button is Active</p> : <p className='text'>The button is Inactive</p>}
        </>
    )
}


function MissedGoal() {
  return <h1>MISSED!</h1>;
}

function MadeGoal() {
  return <h1>Goal!</h1>;
}

// returning different components based on the props value

function Goal(props){
    const isGoal = props.isGoal;

    if(isGoal){
        return <MadeGoal />
    } else {
        return <MissedGoal />
    }
}


function Car(props) {
  return (
    <>
      {props.brand && <h1 className='text'>My car is a {props.brand}</h1>}
    </>
  );
}

function GoalNew(props) {
    const isGoal = props.isGoal;
    return (
        <>
        { isGoal ? <MadeGoal/> : <MissedGoal/> }
        </>
    );
}


export { Expressions, Goal, Car, GoalNew };