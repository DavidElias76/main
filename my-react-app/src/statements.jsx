
import './App.css'

// Use the Ternary Operator instead using the if else statements

function Fruit({isLogedIn}){
    const x = 5;
    let y = "Apples";

    if(x < 10){
        y = "Bananas";
    }else{
        {y};
    }

    if(isLogedIn){
        return (
            <h1 className='text'>Welcome back, user!</h1>
        )
    }else{
        return(
            <h1 className='text'>Please sign in to continue.</h1>
        )
    }


    // return (
    //     <>
    //         <h1 className='text'>The fruit is {y}</h1>
    //     </>
    // )
}

export default Fruit;