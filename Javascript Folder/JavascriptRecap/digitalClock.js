
// DIGITAL CLOCK PROGRAM

function updateClock () {
    const now = new Date();
    let hours = now.getHours();
    const meridium =  hours >= 12 ? "PM" : "AM";
    hours = hours %  12 || 12;
    hours = hours.toString().padStart(2, 0)
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    document.getElementById("clock").textContent  = `${hours}:${minutes}:${seconds} ${meridium}`

}
updateClock();

setInterval(updateClock, 1000); // to run after every 1000  milliseconds which makes the 1 second