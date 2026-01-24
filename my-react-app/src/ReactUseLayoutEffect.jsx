
// useLayoutEffect - it runs synchronous effect - it runs when react calculates the DOM and when it actually paints it on the screen 
// They are perfcet when you want to add something on the screen based on the layout of the DOM
// it is used when manipulating the DOM 

import { useState, useRef, useLayoutEffect } from "react";
// import {useEffect}

export default function LayoutEffectComponent(){ 
    const [show, setShow] = useState(false)
    const popup = useRef()
    const button = useRef()

    // When using the useEffect is shows a flash of position shift due to its asynchronous in nature - it will run after the DOM has been rendered 

    // useEffect(() => {
    //     if(popup.current === null || button.current === null) return
    //     const {button}  = button.current.getBoundingClientRect()
    //     popup.current.style.top = `${button + 25}px`
    // }, [show])

    // The useLayoutEffect runs before the DOM has been rendered 

    useLayoutEffect(() => {
        if(popup.current === null || button.current === null) return
        const {button}  = button.current.getBoundingClientRect()
        popup.current.style.top = `${button + 25}px`
    }, [show])

    return (
        <>
            <button ref={button} onClick={() => setShow(prev => !prev)}>Click Here</button>
            {show && (<div style={{position: 'absolute'}} ref={popup}>This is a popup</div>)}
        </>
    )
}