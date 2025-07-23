 // get the reference of the rectangle
const rectangle = document.getElementById("rect");
// start at position 0
let position = 0;

function update(){
    // move the rectangle 2px to the right 
    rectangle.style.left = position + "px";
    position += 2;

    // resets the position when the rectangle reaches the right side of the screen
    if(position > window.innerWidth){
        position = 0;
    }

    // this makes the element bounce back to the starting position
    // if(position > window.innerWidth - rectangle.offsetWidth){
    //     position = 0;
    // }

}
function animate(){
    // update the position
    update();
    // request the next frame
    requestAnimationFrame(animate);
}
// start the animation 
requestAnimationFrame(animate);// it will run until you stop it

// event bubbliing or propagation

const p =document.querySelector('p');
const span = document.querySelector('span');
// the span element received the initial click
p.addEventListener("click", (event)=>{
    console.log("P listener: ")
    console.log(event.target);
});
span.addEventListener("click", (event) => {
    console.log("span Listener: ");
    console.log(event.target);
    event.stopPropagation(); // the method will stop the propagation and will not be fired
});

// event deleagtion
// - process of capturing a captured event and delegating it to another element

span.addEventListener("click", (event) => {
    event.target.style.color = "red";
});



