import { clsx } from "clsx"
import type { JSX } from "react"

interface KeyboardProps {
    alphabet: string,
    guessedLetters: string[],
    currentWord: string ,
    isGameOver: boolean,
    addGuessedLetter: (letter: string) => void // add type when declairing a paramter in the interface or the type 
}

export default function Keyboard(
    {alphabet, guessedLetters, currentWord, isGameOver, addGuessedLetter}: KeyboardProps): JSX.Element {
        // The map method return an array of element that is why we are using the jsx element[]
    const keyboardElements: JSX.Element[] = alphabet.split("").map((letter: string): JSX.Element => {
        const isGuessed: boolean = guessedLetters.includes(letter)
        const isCorrect: boolean = isGuessed && currentWord.includes(letter)
        const isWrong: boolean = isGuessed && !currentWord.includes(letter)
        const className = clsx({
            correct: isCorrect,
            wrong: isWrong
        })

        return (
            <button
                className={className}
                key={letter}
                disabled={isGameOver}
                aria-disabled={isGuessed}
                aria-label={`Letter ${letter}`}
                onClick={() => addGuessedLetter(letter)}
            >
                {letter.toUpperCase()}
            </button>
        )
    })

    return (
        <section className="keyboard">
            {keyboardElements}
        </section>
    )
}