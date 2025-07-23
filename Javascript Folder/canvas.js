const canvas = document.getElementById("my-canvas");
// canvas.style.width = 400 + "px";
// canvas.style.height = 400 + "px";
const ctx = canvas.getContext('2d'); // draw the canvas in 2d
// set the background color
ctx.fillStyle = 'crimson';
// draw a rectangle
ctx.fillRect(1, 1, 150, 100);// represents the x-axis, y-axis, width, height

// draw a text

const textCanvas = document.getElementById("my-text-canvas");

const textCanvasCtx = textCanvas.getContext('2d');

// set the font family and size
textCanvasCtx.font = "30px Arial";

// set the text color
textCanvasCtx.fillStyle = 'crimson';

// draw the text
textCanvasCtx.fillText("Hello HTML Canvas!", 1, 50); // text, x-axis, y-axis
