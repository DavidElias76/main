import Confetti from "react-confetti"
import type { JSX } from "react"

type ConfettiContainer = {
    isGameWon: boolean
}

// Challenge: Add a type prop to the component 
export default function ConfettiContainer({ isGameWon }: {isGameWon: boolean}): JSX.Element | null {
    if (!isGameWon) {
        return null
    }
    else {
        return (
            <Confetti
                recycle={false}
                numberOfPieces={1000}
            />
        )
    }

}

// Typing the react components