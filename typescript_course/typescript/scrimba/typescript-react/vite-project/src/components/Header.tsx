export default function Header() {
    return (
        <header>
            <h1>Assembly: Endgame</h1>
            <p>Guess the word within 8 attempts to keep the
                programming world safe from Assembly!</p>
        </header>
    )
}

/*
TYPING USING REACT.FC

const Header: React.FC<props> = () => {
    return (
        <header>
            <h1>Assembly: Endgame</h1>
            <p>Guess the word within 8 attempts to keep the
                programming world safe from Assembly!</p>
        </header>
    );
};

export default Header;

*/

// method 3
// import type { JSX } from "react"
// // This can be done this way adn tell react that the component is returning a jsx element
// export default function Header (): JSX.Element {
//     return (
//         <header>
//             <h1>Assembly: Endgame</h1>
//             <p>Guess the word within 8 attempts to keep the
//                 programming world safe from Assembly!</p>
//         </header>
//     )
// }