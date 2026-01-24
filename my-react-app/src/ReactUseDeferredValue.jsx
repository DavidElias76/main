
// React useDeferredValue - it waits some secods before rendering the component 
// it is the same as the ReactTransition which determines the high priority value from the low priority values
// it runs the high priority first before rendering the low priority 

import { useMemo, useState, useDeferredValue } from "react";

function DeferredValueComponent(){
    const [input, setInput] = useState('')

    return (
        <>
            <h2>UseDeferredValue Hook</h2>
            <form action="">
                <label htmlFor="">Enter text:</label>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
            </form>
            <ListComponent input={input}/>
        </>
    )
}

function ListComponent({input}){
    const LIST_SIZE = 2000;
    const deferredInput = useDeferredValue(input) // it runs after the high priority function is completed
    const list = useMemo(() => {
        const l = []
        for(let i  = 0; i < LIST_SIZE; i++){
            l.push(<div key={i}>{deferredInput}</div>)
        }
        return l
    }, [deferredInput])

    return list
}

export {ListComponent, DeferredValueComponent}