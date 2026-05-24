// import { useState } from 'react'

import './App.css'
import { Greetings } from './Greetings'
import AppFunction from './Functions'

let name: string = "jane Doe"
let age: number = 4
let isStudent: boolean = true
let numbers: string[] = ["name", "age"]

type User = {
  name: string,
  age?: number // optional 
}

let person: User = {
  name: 'John doe',
  age: 20
}

// Interface

interface newPerson {
  name: string,
  age: number,
}

const newPersonObject: newPerson = {
  name: 'Jane',
  age: 20
}


// type X = {
//   a: string,
//   b: string
// }

// type Y = X & {
//   c: string,
//   d: string
// }

// const values: Y = {
//   a: "value A",
//   b: "Value B",
//   c: "Value C",
//   d: "Value D"
// }


// function printName(name: string) {
//   console.log(name)
// }

// let nameDoe: unknown; // This checks the type anyways before being used

// assign a function name
// let printName: Function

// let printName: (name: string) => void // declare the function name and return nothing

// let printName: () => never; // This never return a value 


// // interfaces extends
// interface Guy {
//   proffession: string
// }

// interface newGuy extends Guy {
//   name: string,
//   age: number
// }

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Greetings name = "John doe" age = {20}/>
      <div>
        <h2>Hello {name} the age is {age} and is student {isStudent}</h2>
        {numbers.map(s => {
          return s
        })}

        <p>The name is {person.name} and the age {person.age}</p>

        <p>The new person name: {newPersonObject.name} and the age is: {newPersonObject.age}</p>

        {/* {values.map(val => {
          return val
        })} */}

<br /> <br />
        <AppFunction/>
      </div>
    </>
  )
}

export default App
