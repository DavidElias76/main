import clsx from "clsx" // npm package that is used to conditionally construct and returns a class name
import {getFarewellText} from "../utils";
import {languages} from "../languages";
import type { JSX } from "react/jsx-runtime";

// Option A
export default function GameStatus(
    {isGameWon, isGameLost, isGameOver, isLastGuessIncorrect, wrongGuessCount} :
    {isGameWon: boolean, isGameLost: boolean, isGameOver: boolean, isLastGuessIncorrect: boolean | "", wrongGuessCount: number}): JSX.Element {

        // The clsx is used to construct a class name and its properties 
    const gameStatusClass: string = clsx("game-status", {
        won: isGameWon,
        lost: isGameLost,
        farewell: !isGameOver && isLastGuessIncorrect
    })

    return (
        <section
            aria-live="polite"
            role="status"
            className={gameStatusClass}
        >
            { !isGameOver && isLastGuessIncorrect && (
                <p className="farewell-message">
                    {getFarewellText(languages[wrongGuessCount - 1].name)}
                </p>
            )
            }

            {isGameWon && (
                <>
                    <h2>You win!</h2>
                    <p>Well done! 🎉</p>
                </>
            )}

            {isGameLost && (
                <>
                    <h2>Game over!</h2>
                    <p>You lose! Better start learning Assembly 😭</p>
                </>
            )}

            {/* If none of the above conditions met, render nothing inside but keep the section */}
        </section>
    )
}

// Option B - using a interface or a type - RECOMMENDED METHOD - PREVENTS MESSY CODE
interface GameStatusProps {isGameWon: boolean, isGameLost: boolean, isGameOver: boolean, isLastGuessIncorrect: boolean | "", wrongGuessCount: number}
// type GameStatusProps = {isGameWon: boolean, isGameLost: boolean, isGameOver: boolean, isLastGuessIncorrect: boolean | "", wrongGuessCount: number}

export function GameStatus_2(
    {isGameWon, isGameLost, isGameOver, isLastGuessIncorrect, wrongGuessCount} : GameStatusProps): JSX.Element {
    const gameStatusClass = clsx("game-status", {
        won: isGameWon,
        lost: isGameLost,
        farewell: !isGameOver && isLastGuessIncorrect
    })

    return (
        <section
            aria-live="polite"
            role="status"
            className={gameStatusClass}
        >
            { !isGameOver && isLastGuessIncorrect && (
                <p className="farewell-message">
                    {getFarewellText(languages[wrongGuessCount - 1].name)}
                </p>
            )
            }

            {isGameWon && (
                <>
                    <h2>You win!</h2>
                    <p>Well done! 🎉</p>
                </>
            )}

            {isGameLost && (
                <>
                    <h2>Game over!</h2>
                    <p>You lose! Better start learning Assembly 😭</p>
                </>
            )}

            {/* If none of the above conditions met, render nothing inside but keep the section */}
        </section>
    )
}