
// roll dice program

// get the button element

const rollBtn = document.getElementById("rollBtn");

rollBtn.addEventListener("click", ()=> {
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    let values = [];
    let images = [];

    for(let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        // push the values to the array
        values.push(value);
        // push image to the image array
        images.push(`<img src = "C:/Users/elias/Desktop/main/Javascript Folder/diceRoller/images/dice-six-faces-${value}.png" alt ="Dice - ${value}">`)
    }
    // display imaes and content
    diceResult.textContent = `Dice: ${values.join('')}`
    diceImages.innerHTML = images.join('');
})

// NB IMAGE PATH NOT DISPLAYING BUT I UNDERSTOOD THE CONCEPT