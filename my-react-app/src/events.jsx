
import "./App.css";

// put the fuction inside the component to access it on button click

// events are used to perform specific actions when something happens
function Football(){

    function shoot (){
        alert("Great Shot!");
    }

    return (
        <>
        <p className="text">The Event Section</p>
            <h2 className="text">Football Component</h2>
            <button onClick={shoot} style={{backgroundColor: "green", padding: "15px 10px"}}>Take the shot!</button>
        </>
    )
}

// using parameters and passing arguments to the event function 
function FootballPitch(){
    function shoot (a){
        alert(a)
    }

    // passing argument to the shoot function when the button is clicked
    return (
        <>
            <h2 className="text">Football Component</h2>
            <button onClick={() => shoot("Great Shot!")} style={{backgroundColor: "green", padding: "15px 10px"}}>Take the shot!</button>
        </>
    )
}

function HandleClick(){

    function shoot(a, b){
        alert(b.type)
        // b represents the react event that is triggered the function is case "click" event
    } 

    return (
        <>
            <h2 className="text">Football Component</h2>
            <button onClick={(event) => shoot("Goal!", event)} style={{backgroundColor: "green", padding: "15px 10px"}}>Take the shot!</button>
        </>
    )
}

export { Football, FootballPitch, HandleClick };    