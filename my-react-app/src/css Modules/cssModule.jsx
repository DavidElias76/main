
// the react css modlue lets you write css that is scoped locally to the specific component 

// using the css module 

import styles from './Button.module.css';

function CssModules(){
    return (
        <>
            <h2 style={{fontSize: "30px", color: "red"}}>Css Modules</h2>
            <button className = {styles.mybutton}>My Button</button>

            <div style={{width: "300px",height: "200px", backgroundColor: "grey", display: "flex", alignItems: 'center', flexDirection: 'column', justifyContent: "center"}}>
                <button className={`${styles.mybutton} ${styles.primary}`}>My Primary Button</button>
                <button className={`${styles.mybutton} ${styles.secondary}`}>My Secondary Button</button>
            </div>

        </>
    )
}

// composing classes 
/* composing classes - the composes is not supported with the latest react version-  so not recommended */
function ComposingClasses(){
    return (
        <>
            {/* Composing Classes - allow ypu to compose classes using the keyword: 'compose */}

            <h2 style={{fontSize: "30px", color: "red"}}>This is using the composes keyword to combine classes</h2>
            <div style={{width: "300px",height: "200px", backgroundColor: "grey", display: "flex", alignItems: 'center', flexDirection: 'column', justifyContent: "center"}}>
                <button className={`${styles.mybutton} ${styles.primary}`}>My Primary Button</button>
                <button className={`${styles.mybutton} ${styles.secondary}`}>My Secondary Button</button>
            </div>
        </>
    )
}

// the global syntax - it makes the css style be used by everyone in the component
// You can use it in your components like this:
function GlobalStyle(){
    return (
        <h2 className='myheader'>This is a global styling</h2>
    )
}


// Combine Global and Local Classes
function Combined(){
    return (
        <>
            <h2 className='myheader'>This is a global style - classes</h2>
            <h2 className={`${styles.mybutton} ${styles.primary}`}>This is a local style - classes</h2>
        </>
    )
}
export {CssModules}
