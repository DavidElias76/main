
// it is mostly used in next.js

'use server' // Tell the react that this code is a server action 
// A server action (runs on the server) - it receiver two arguments

// NOTE:  _ / state / previousState- determines the previous state - "This value exists, but I’m intentionally not using it.” - its is needed
// formData - is the data that is sent from the form input

export async function submitForm(_, formData) {
  const name = formData.get("name"); // this retrieves the name attribute value 'name' from the input element

  const hour = new Date().getHours();
  let greeting;

  if (hour < 12) {
    greeting = "Good morning";
  } else if (hour < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  return { message: `${greeting}, ${name}` }; // Returning data to the client
}