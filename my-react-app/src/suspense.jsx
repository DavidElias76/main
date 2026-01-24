// the suspense lets you display alternative text when the web page or data or code is being loaded

import "./App.css"

// start by importing the suspense component
import { lazy, Suspense } from "react"

// import the component to be displayed when the component is being loaded 
import Cat from './cat'

// the image gets displayed for 
function SuspenseApp(){
    return (
        <>
            <div>
                <Suspense fallback={<div>Image Loading...</div>}>
                    <Cat />
                </Suspense>
            </div>
        </>
    )
}

// the Lazy() method lets you diplay the loading image when a component is being loaded

// using multiple lazy component
const NavBarComponentFile = lazy(() => import('./navbar') )
const CatComponentFile = lazy(() => import("./cat"))

function SuspenseComponent(){
    return (
        <>
            <div>
                <Suspense fallback = {<div>The NavBar and Image is Loading...</div>}>
                    <NavBarComponentFile />
                    <CatComponentFile />
                </Suspense>
            </div>
        </>
    )
}

// // another exmaple from w3schools - no files imported
// const Header = lazy(() => import('./Header'));
// const Content = lazy(() => import('./Content'));
// const Sidebar = lazy(() => import('./Sidebar'));

// function App() {
//   return (
//     <div>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Header />
//         <div style={{ display: 'flex' }}>
//           <Sidebar />
//           <Content />
//         </div>
//       </Suspense>
//     </div>
//   );
// }

export {SuspenseApp, SuspenseComponent}