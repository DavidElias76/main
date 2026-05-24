// import React from 'react'
import React from "react"
import "./inputStyle.css"

interface Props {
    todo: string
    setTodo: React.Dispatch<React.SetStateAction<string>>  // A functon that is used to update the state of a usestate hook
    handleAdd: (e: React.FormEvent) => void // The handle submit function return nothing and assigned void
}

const InputField: React.FC<Props> = ({todo, setTodo, handleAdd}) => {

     // This is how you define the type of string
  return (
    <form className='input'>
        <input type="text" value={todo} placeholder='Enter a task' className='input_box'
        onChange={(e) => {
            setTodo(e.target.value)
        }}/>
        <button type='submit' className='input_submit' onSubmit={handleAdd}>Submit</button>

    </form>
  )
}

export default InputField