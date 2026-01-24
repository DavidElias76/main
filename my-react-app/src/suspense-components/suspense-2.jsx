// import { Suspense, lazy } from "react";

// Suspense - lets you display alternative text when the componenet is being loaded or data is loaded


// export default function SuspenseApp(){
    
//     const Header = lazy(() => import('./Header')); // there is an in this line of code but understood the concept
//     const Content = lazy(() => import('./Content'));
//     const Sidebar = lazy(() => import('./Sidebar'));
    
//     return (
//         <>
//             <div>
//                 <Suspense fallback = {<div>Loding...</div>}>
//                     <Header />
//                     <div style={{ display: 'flex' }}>
//                         <Sidebar />
//                         <Content />
//                     </div>
//                 </Suspense>
//             </div>
//         </>
//     )
// }
