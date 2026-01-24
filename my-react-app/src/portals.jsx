import "./App.css"

// modals, tooltips, and dialogs
import { createPortal } from 'react-dom'; // React Portals provide a way to render HTML outside the parent component's DOM hierarchy.
import { Children, useState } from 'react';

// SYNTAX: createPortal(children, domNode) - 
// The first argument (children) is any renderable React content, like elements, strings, or fragments.
// The second argument (domNode) is a DOM element where the portal should be inserted instead.


// function MyChild(){
//     return createPortal (
//     <>

//      <h2 className="text">This is a react portal section</h2>
//         <div>
//             Welcome
//         </div>
//         document.body    
//     </>
       
//     )
// }

function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return createPortal(
        <div style={{position: 'fixed', top: 0, left: 0,right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div style={{ background: 'white', padding: '20px', borderRadius: '8px'}}>{children}
                <button onClick={onClose}>Close</button>
            </div>
        </div>,
        document.body // add this to specify the portal 
    );
}

function MyApp() {

  const [isOpen, setIsOpen] = useState(false); // isopen is set to false by default

  return (
    <div>
      <h1>My App</h1>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      {/* this is a portal - it will be passed using the props */}
      
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Modal Content</h2>
        <p>This content is rendered outside the App component!</p>
      </Modal>
    </div>
  );
}

// event handling bubbling - if the button inside the portal is clicked the event will still bubled up to the parent component and the parent component event handler will be triggereds

function PortalButton({onClick, children}){

    const divStyles = {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        padding: '10px',
        background: 'blue',
        color: 'white'
    }
    return createPortal (
        
            <button syle={divStyles} onClick={onClick}>{children}</button>, document.body   
    )
}


// function portalAppButton(){
//     const [count1, setCount1] = useState(0); // this is going to track the div element state
//     const [count2, setCount2] = useState(0); // this is going to track the button element state

//     return (
//         <div style={{padding: '20px',border: '2px solid black',margin: '20px'}} onClick={() => {setCount1(c => c + 1);}}>
//         <h2>Div Clicked: {count1}</h2>
//         <h2>Button Clicked: {count2}</h2>      
//         <p>The floating button is rendered outside this box using a portal,
//             but its clicks still bubble up to this parent div!</p>
//         <p>Try to click the div element as well, to see the count increase</p>
        
//         <PortalButton onClick={(e) => {setCount2(c => c + 1);}}>Floating Button</PortalButton>

//         </div>  
//     )

// }

// function ModalView({isOpen, onClose, children}){
//     if(isOpen) return null;

//     return createPortal(
//         <div style={{position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
//             <div style={{background: 'white', padding: '20px', borderRadius: '8px'}}>
//                 {children}
//                 <button onClick={onClose}>Close</button>
//             </div>
//         </div>,
//         document.body
//     )
    
// }

// portalAppButton
export {Modal, MyApp, PortalButton}



// NB:The PortalAppButton is not being displayed in the web page

// function PortalAppButton(){
//     const [count1, setCount1] = useState(0) // track the div element state
//     const [count2, setCount2] = useState(0) // track the button element state

//     return (
//         <>
//         {/* when the div element is clicked it is going to count the number of clicks using the setCount 1 function  */}
//             <div onClick={() => {setCount1(c => c+ 1 )}}>
//                 <h2>Div Clicked: {count1}</h2>
//                 <p>Button Clicked : {count2}</p>
//         {/* when the button is clicked that was placed on the portalButton component, is going to count the number of clickes using the setcount2 function */}
//                 <PortalButton onClick={(e) => {setCount2 (c => c + 1)}}>Floating Button</PortalButton>
//             </div>
//         </>
//     )
// }