
import { useState } from "react";
import { createPortal } from "react-dom";

const divStyles = {
    position: 'fixed', 
    top: 0, 
    left: 0,
    right: 0, 
    bottom: 0, 
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center'
}

const divStyles2 = {
    background: 'white', 
    padding: '20px', 
    borderRadius: '8px'
}

// this is the modal component that will be displayed
function ModalComponent({ isOpen, onClose, children}){
    if(!isOpen) return null; // if isOpen is true, do not render the modal

    // this create a modal that will be displayed on top of the existing DOM hierarchy / or outside the root div
    return createPortal(
        
            <div style={divStyles}>
                <div style={divStyles2}>
                    {children}
                    <button style={{backgroundColor: "green", padding: "10px", borderRadius: "5px"}} onClick={onClose}>Close</button>
                </div>
            </div>, 
            document.body
    )
}

// the main app component
function AppComponent(){
    const [isOpen, setIsOpen] = useState(false) // the isopen variable is declared false initially

    return (
        <>
            <h2>My App</h2>
            {/*  when the button is clicked, set isOpen to true */}
            <button onClick={() => setIsOpen(true)} style={{backgroundColor: "green", padding: "20px", borderRadius: "5px"}}>Open Modal</button>
            {/* passing the isOpen and onClose props to the modal component */}
            <ModalComponent isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <h2>Modal Content</h2>
                <p>This content is rendered outside the App component!</p>
            </ModalComponent>
        </>
    )
}

// function to showcase the event bubling with portals

function PortalAppButton({onClick, children}){
    return createPortal(
        // the text of the children is going to be the floating Button
        <button style={{position: 'fixed', bottom: '20px', right: '20px', padding: '10px', background: 'blue', color: 'white'}} onClick={onClick}>{children}</button>, document.body
    )
}

function AppButton(){
    // count 1 and count2 is declared as state variables
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0)

    return (
        // the c is he same as the count1 and count2 variables
        <div onClick={() => setCount1((c) => c + 1)} style={{padding: '20px', border: '2px solid black'}}>
            <p>Div Click Count: {count1}</p>
            <p>Button Click Count: {count2}</p>
            <p>The floating button is rendered outside this box using a portal, but its clicks still bubble up to this parent div!</p>
            <p>Try to click the div element as well, to see the count increase</p>
            <PortalAppButton onClick={() => 
                // e.stopPropagation() // to stop the bubbling up of the parent compoenents
                setCount2((c) => c + 1) // the c is the same as the count2
            }>
                Floating Button
            </PortalAppButton>
            
        </div>
    )
}
export {ModalComponent, AppComponent, AppButton}