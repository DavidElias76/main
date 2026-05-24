
import type { JSX } from "react"

interface NewGameButtonProps {
    isGameOver: boolean
    startNewGame: () => void // SYNTAX: prop: (parameters) => returnType
}

export default function NewGameButton({ isGameOver, startNewGame }: NewGameButtonProps): JSX.Element  | null{
    if (!isGameOver) {
        return null
    } else {
        return (
            <button className="new-game" onClick={startNewGame}>
                New Game
            </button>
        )
    }
}