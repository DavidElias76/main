
// server componenst and serer actions
// Server Actions - are function that run on the server to allow form handling on the server without the need of an API 
// They remove the need for client side javascript

// React UseActionState() - allows you to update state based on the result of a form action.

// syntax: 
// const [state, ation, isPending] = useActionState(actionFunction, initialstate, premalink)

// state is the current state the action returns.
// action is the function that triggers the server action.
// isPending is a boolean that indicates whether the action is currently running or not.
// The actionFunction parameter is the server action itself.
// initialState is the parameter that represents the starting point for the state before the action runs.
// permalink is an optional string that contains the unique page URL the form modifies.


"use client";

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

const h1Style = {
    fontSize: "24px", textAlign: "center", fontWeight: "600", color: "#374151", marginBottom: "16px"
}

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

import { useActionState } from "react";
import { submitForm } from "./ReactActionStateHook"; // importing the submit function - A server action (runs on the server)

function ActionComponent () {
  const [state, submit, isPending] = useActionState(submitForm, {
    message: "",
  }); // This connects your form to the server action.

  return (
  <div style={divStyles}>
    <form action={submit} style={formStyles}>
      <h2 style={h1Style}>Greet Someone</h2>

      <input type="text" name="name" placeholder="Enter your name" required style={inputStyles} />

      <button type="submit" disabled={isPending} style={buttonStyles}>{isPending ? "Greeting..." : "Greet"}</button>

      {state.message && ( <p style={pStyles}>{state.message}</p>)}
    </form>
  </div>
); 
};

// explanation : 

// when the button is clicked the name attribute value gets sent to the submitForm function
// the form submits and the server which is the function runs
// the server generates the greeting message and retuns the message
// the UI updates automatically and the buttton disables when loading

// create a function and a Hook that checks the username and the age if greater than 18

export {ActionComponent};