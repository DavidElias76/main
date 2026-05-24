import { clsx } from "clsx" // npm package manager is used to condition and construct classes and returns the class name 
import type { JSX } from "react"
import type { Language } from "../languages"

interface LanguageChipsProps {
    languages: Language[] // an array of objects
    wrongGuessCount: number
}

export default function LanguageChips({ languages, wrongGuessCount }: LanguageChipsProps): JSX.Element {
    // we are returning jsx element which is an array and the return type is a jsx element from the span element below
    const languageElements: JSX.Element[] = languages.map((lang: Language, index: number): JSX.Element => {

        const isLanguageLost: boolean = index < wrongGuessCount
        // Take the language type and omit the name 
        const styles: Omit<Language, "name"> = {
            backgroundColor: lang.backgroundColor,
            color: lang.color
        }
        const className: string = clsx("chip", isLanguageLost && "lost")
        return (
            <span
                className={className}
                style={styles}
                key={lang.name}
            >
        {lang.name}
      </span>
        )
    })

    return <section className="language-chips">{languageElements}</section>
}