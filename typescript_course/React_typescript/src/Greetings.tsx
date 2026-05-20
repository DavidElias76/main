type GreetingsProps = {
    name: string,
     age?: number;
}

// This gets the name and the age of the value
export function Greetings({name, age}: GreetingsProps) {
    return (
        <>
        <h2 style={{color: "red", fontSize: "20px"}}>This is the first component with typescript</h2>
            <div style={{width: "200px", height: "100px", border: "2px solid black", display: "flex", alignItems: "center"}}>
                <h2 style={{color: "black", fontSize: '20px', }}>Hello ${name}</h2>
                 {age !== undefined && <p style={{color: "green", fontSize: "20px"}}>You are {age} years old</p>}
            </div>
        </>
    )
}