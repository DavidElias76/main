

'use server'
// The state data from the ReactFormActionState will be passed in the function and get updated

function checkForm(prevState, formData) {

  const name = formData.get('name') || '' // get the name 
  const age = Number(formData.get('number')) // convert the value to number

  // Name validation
  if (name.length < 5) {
    return {
      success: false,
      message: 'Name must be at least 5 characters long',
      messageAge: ''
    }
  }

  // Age validation
  if (age <= 18) {
    return {
      success: false,
      message: '',
      messageAge: 'Age must be greater than 18'
    }
  }

  // If everything is valid
  return {
    success: true,
    message: 'Valid name',
    messageAge: 'Valid age'
  }
}

export default checkForm

// the function will return the upaated state which will be used in the ReactFormActionState component