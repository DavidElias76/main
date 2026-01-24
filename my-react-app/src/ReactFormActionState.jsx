
// pass the age and the usernae of a user to chck if the user age is greater than 18 and the username is more than 3 charactes 


'use client'
import {  useActionState } from "react";

const divStyles = {
    display: "flex", flexDirection: "column", alignItems: "center", border: '1px solid black', justifyContent: "center", backgroundColor: "#f3f4f6", padding: "24px"
}

const formStyles = {
    backgroundColor: "#ffffff",
    padding: "14px",
    borderRadius: "16px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "400px"
}

// const h1Style = {
//     fontSize: "24px", textAlign: "center", fontWeight: "600", color: "#374151", marginBottom: "16px"
// }

const inputStyles = {
    width: "100%", padding: "12px", border: "1px solid #d1d5db", borderRadius: "8px", outline: "none", marginBottom: "16px"
}

const buttonStyles = {
    width: "100%",
    padding: "12px",
    backgroundColor: "#22c55e",
    // backgroundColor: isPending ? "#9ca3af" : "#22c55e",
    color: "#ffffff",
    fontWeight: "600",
    borderRadius: "8px",
    border: "none",
    // cursor: isPending ? "not-allowed" : "pointer",
    cursor: "pointer",

    transition: "background-color 0.3s"
}

const pStyles = {
    marginTop: "16px",
    color: "#16a34a",
    textAlign: "center",
    fontWeight: "500"
}

import checkForm from "./ReactFormSever"; // the data returned from the server after validation or authentication

// The initial state - you can declare it outside the component or inside the useActionState()
const initialState = {
  success: null,
  message: "",
  messageAge: ""
}

function FormComponent() {
  const [data, action, isPending] = useActionState(checkForm, initialState) // this will take the function that is imported and the initial state of the object that iwll be returned 

//   The initial object is declared inside the Hook
//  const [data, action, isPending] = useActionState(checkForm, {
//         success: null,
//         message: "",
//         messageAge: ""
//   })


  return (
    <>
    <div style={divStyles}>
        <form action={action} style={formStyles}>
            <label>Enter username:</label>
            <input type="text" name="name"  style={inputStyles}/>

            <label>Enter your age:</label>
            <input type="number" name="number"  style={inputStyles}/>

            <button type="submit" style={buttonStyles} disabled={isPending}>{isPending ? "Checking..." : "Check Value"}</button> {/* isPending is true when the action function is running*/}

            {/* Show messages only after submit - when the data.success is true */}
            {data.success === true && (<p style={pStyles } >{data.message} and {data.messageAge}</p>)}

            {/* when the data is not true - */}
            {data.success === false && (<p style={{ color: "red" }}>{data.message || data.messageAge}</p>)}
        </form>
    </div>
    </>

  )
}


export {FormComponent}