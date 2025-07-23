// Get the elements (not their values yet)
const firstNameInput = document.getElementById("fname");
const lastNameInput = document.getElementById("lname");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

passwordInput.addEventListener("focus", () => {
    // Check values at the time of focus
    if(firstNameInput.value && lastNameInput.value && emailInput.value) {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
        let passwordValue = "";
        
        for(let i = 0; i < 8; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            passwordValue += chars[randomIndex];
        }
        // Set the generated password value
        passwordInput.value = passwordValue;
    } else {
        alert("Please fill in all the fields before generating a password.");
        if (!firstNameInput.value) {
            firstNameInput.focus();
        } else if (!lastNameInput.value) {
            lastNameInput.focus();
        } else {
            emailInput.focus();
        }
    }
});

// Instead of alert, you could use a temporary status message:
const statusMessage = document.createElement('div');
statusMessage.style.color = 'green';
statusMessage.textContent = 'Password generated successfully!';
passwordInput.parentNode.appendChild(statusMessage);

// Remove after 3 seconds
setTimeout(() => {
    statusMessage.remove();
}, 3000);