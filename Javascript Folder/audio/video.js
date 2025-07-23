// // get the reference
// const videoAudio = document.getElementById("playVideo");
// const videoElement = document.getElementById("videoElement");

// try{
//     videoAudio.addEventListener("click", ()=> {
//           navigator.mediaDevices.getUserMedia({
//     audio: true,
//     video: {
//       width: {
//         min: 1280,
//         ideal: 1920,
//         max: 3840
//       },
//       height: {
//         min: 720,
//         ideal: 1080,
//         max: 2160
//       }
//     }
//   }).then(stream => {
//     // Set the stream to the video element
//     videoElement.srcObject = stream;
//   })
//     })

// }catch(err){
//     console.error("Error accessing camera/microphone:", err);
// }

// min and max - resolution of the video
// ideal - specifies the resoltion you most likely to have / prefered resolution
//  stream - the stream of the video closes to the ideal

// getUserMedia()-  returns a promise which means that you will need to callback the function

// EXAMPLE: REDERS USERS WEBCAM TO THE PAGE

const video = document.querySelector("video");
const stream = await navigator.mediaDevices.getUserMedia({ video: true });
video.srcObject = stream;
await video.play();

getUserMedia() // - returns a promise which means that you will need to callback the function 
// - to get access to users devices