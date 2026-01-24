import Greetings from "./App";
import './App.css'

// using the object destructuring to access the prop directly
function Name({ name }){

    console.log(name)

    return <h1 className="text">Hello {name}</h1>
}

// using without the object destructuring and aceessing the prop directly

// it is Useful when the component receives many props and you don’t want to list them all.

function NameWithout(prop){

    return (
        <>
            <h1 className="text">Hello {prop.name}</h1>
            <h2>I am driving a {prop.brand} {prop.model} and the color is {prop.color}</h2>
        
        </>
    )
}

// the car which is an onject and years which is an array will be passed as props to the NameVariable component
function NameVariable(prop){
    return (
        <>
            <h2>My favorite car is a {prop.car.name} {prop.car.model}!</h2>
            <p>But it has to from {prop.years[0]}, {prop.years[1]}, or {prop.years[2]}.</p>
        </>
    )

}

// react destructuring with props 

function NameObject(props){
    const {brand , model, color} = props

    return (
        <>
            <h2 className="text">I love my {brand} {model} which is {color} in Color</h2>
        </>
    )
}

function ObjectRestParameters({color, brand, ...rest}) {
    // the rest print out the remaining properties of the object except color and brand
    return (
        <>
            <h2 className="text">I have a {color} {brand}</h2>
            <p className="text">The model is {rest.model}</p>
            {/* print the object */}
            <p>Other details: {JSON.stringify(rest)}</p>
        </>
    )
}

// WRAPPER COMPONENTS - they are used to display wrapper components that contain other components as children(used instead of dissplaying many components separately)

// wrapper components with children props(props.children property )

function Son(props){
    return (
        <>
            <div style={{background: 'lightgreen', padding: '20px 40px', marginTop: '10px', borderRadius: '5px'}}>
                <h2>Son</h2>
                <div>{props.children}</div>
            </div>
        </>
    )
}

function Daughter(props){
    return (
        <>
            <div style={{background: 'lightpink', padding: '20px 40px', marginTop: '10px', borderRadius: '5px'}}>
                <h2>Daughter</h2>
                <div>{props.children}</div>
            </div>
        </>
    )
}

// the son and daughter components are wrapped inside the parent component
function Parent(){

    return (
        <>
            <div className="card-show">
                <h2>My Two Chidren</h2>       
                <Son>
                    <p>This is written in the parent component but it is displayed as part of the son component</p>
                </Son>         

                <Daughter>
                    <p>This is written in the parent component but it is displayed as part of the daughter component</p>
                </Daughter>
            </div>
        </>
    )

}

// Example 2: wrapper component using children props with object destructuring
// “Render whatever is placed **between <HeadComponent> and </HeadComponent> here.”

function HeadComponent({children}){
    return (
        <>
            <div className="card-show" style={{border: "2px solid red"}}>
                <h2>Hello World</h2>
                <div className="card">{children}</div>
            </div>
        </>
    )
}


function ChildrenComponent(){
    return (
        <>
        {/* can be used as many times as you want */}
            <HeadComponent>
                <p>This is a child component passed to the HeadComponent</p>
                <button>Click me</button>
                <h2>Do it Again</h2>
            </HeadComponent>

            <HeadComponent>
                <p>This is a child component passed to the HeadComponent</p>
                <button>Click me</button>
                <h2>Do it Again</h2>
            </HeadComponent>
        </>
    )
}

// The component treats objects like objects, and you can use the dot notation to access the properties.

// Example of passing an object as a prop to a component

function CarInfo(props){
    return (
        <>
            <h2>My {props.carInfo.name} {props.carInfo.model}!</h2>
            <p>It is {props.carInfo.color} and it is from {props.carInfo.year}!</p>
        </>
    )
}




// create a wrapper component to practice react props children skills 

export { Name, NameWithout, NameVariable, NameObject, ObjectRestParameters, Son, Daughter, Parent, ChildrenComponent, HeadComponent, CarInfo };