// // crearts a element of the audio object 
// const audio = new Audio();
// console.log(audio);
// console.log(audio.currentTime); // gets the current Time of the audio property currentTime

// get the referrences
const playList = document.getElementById("playlist-songs");
const playButton = document.getElementById("play");
const pauseButton =  document.getElementById("pause");;
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");

// create an array of all songs
const allSongs = [
    {
    id: 0,
    title: "Scratching The Surface",
    artist: "Quincy Larson",
    duration: "4:25",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/scratching-the-surface.mp3",
  },
  {
    id: 1,
    title: "Can't Stay Down",
    artist: "Quincy Larson",
    duration: "4:15",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/can't-stay-down.mp3",
  },
  {
    id: 2,
    title: "Still Learning",
    artist: "Quincy Larson",
    duration: "3:51",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/still-learning.mp3",
  },
  {
    id: 3,
    title: "Cruising for a Musing",
    artist: "Quincy Larson",
    duration: "3:34",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/cruising-for-a-musing.mp3",
  },
  {
    id: 4,
    title: "Never Not Favored",
    artist: "Quincy Larson",
    duration: "3:35",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/never-not-favored.mp3",
  },
  {
    id: 5,
    title: "From the Ground Up",
    artist: "Quincy Larson",
    duration: "3:12",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/from-the-ground-up.mp3",
  },
  {
    id: 6,
    title: "Walking on Air",
    artist: "Quincy Larson",
    duration: "3:25",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/walking-on-air.mp3",
  },
  {
    id: 7,
    title: "Can't Stop Me. Can't Even Slow Me Down.",
    artist: "Quincy Larson",
    duration: "3:52",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/cant-stop-me-cant-even-slow-me-down.mp3",
  },
  {
    id: 8,
    title: "The Surest Way Out is Through",
    artist: "Quincy Larson",
    duration: "3:10",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/the-surest-way-out-is-through.mp3",
  },
  {
    id: 9,
    title: "Chasing That Feeling",
    artist: "Quincy Larson",
    duration: "2:43",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/chasing-that-feeling.mp3",
  },
]
// create audio object 
const audio = new Audio();

// holds the current song and track ist playback
const userData = {
  songs: allSongs,
  currentSongs: null,
  songCurrentTime: 0
}

// functin to play the song 
function playSong(id, start){
  const song = userData.songs.find((song) => song.id === id); // find the song with same id
  audio.src = song.src;  // update the audio source
  audio.title = song.title; // update the audio title

  userData.currentSongs = song; // update the song to the userData object
  playButton.classList.add("playing"); //  this fills the svg button play with a color
  audio.play();
}

// add event listener on the playButton
playButton.addEventListener("click",()=> {
  if(userData.currentSongs === null || start){
    playSong(userData.songs[0].id);// get the id of the first index of the array and play the song
  }else{
    playSong(userData.currentSongs.id, false); // ensures that the song keeps playing
  }
});

// get all playlist songs
const songs = document.querySelectorAll(".playlist-songs");
// loop through the nodelist of songs
songs.forEach((song) =>  {
  const id = document.getAttribute("id").slice(5); // get the attribute with and id and slice to get the value: example id= "song-0
  const songBtn = song.querySelector("button"); // gets the buttons 
  // apply event listener on the buttons
  songBtn.addEventListener("click", ()=> {
    playSong(Number(id)) ; // the number method converts the id from a string to a number

  });
});

// function pause song
function pauseSong(){
  // set the songCurrentTime to the audio object current time
  userData.songCurrentTime = audio.currenTime
  playButton.classList.remove("playing"); // removes the classList from the play button which is te svg color
  audio.pause(); // pauses the audio
}
// add event listener for the pause button
pauseButton.addEventListener("click", ()=> {
  pauseSong();
})

// function getCurrentSongIndex that get the current index of the song
function getCurrentSongIndex(){
  return userData.songs.indexOf(userData.currentSongs); // get the index of the current song being played by searching by object
  // it returns the object of the specific index being played
}
// this function is the same as the one below but it searches the index by id

// function getCurrentSongIndex() {
//   return userData.songs.findIndex(song => song.id === userData.currentSong.id);
// }

//function get next song
function getNextSong(){
  return userData.songs[getCurrentSongIndex() + 1]; // get the return value and add 1 to get to the next song
  // it returns an object with the next song
}

// function to play the next song
function playNextSong(){
  //check for the current song
  if(userData.currentSongs === null){
    playSong(userData.songs[0].id)
  }

  const nextSong = getNextSong();
  if(nextSong){
    playSong(nextSong.id) // access the id of the next song and pass it as a parameter to the playSong function
  } else{
    userData.currentSongs == null;
    userData.songCurrentTime = 0;
    highlightCurrentSong() // callback the function to highlight the song played
    setPlayerDisplay(); // callback the function tos display the song title and artits
    setPlayButtonAccessibleText(); // 
    pauseSong(); // if false the pauseSong function will be called
  }
}
// add event listener the next button
nextButton.addEventListener("click",playNextSong)

// get previous function 
function getPreviousSong(){
  userData.songs[getCurrentSongIndex() -1]; // get the current index of the song being played and  minus 1
}

// function play Previous song
function playPreviousSong(){
  if(userData.currentSongs === null){
    return;
  }
  const previousSong = getPreviousSong();
  if(previousSong){
    playSong(previousSong.id) // get the id of the previous song and pass to playSong function
  }else{
    playSong(userData.songs[0].id) // play the first song index of the array with object
  }
}
// add event listener
previousButton.addEventListener("click", playPreviousSong);

// function highlightCurrent the svg buttons 
function highlightCurrentSong(){
  // get the query selector with the element arial current true
  const previousCurrentSong = document.querySelector(".playlist-song[aria-current='true']");
  previousCurrentSong ?.removeAttribute("aria-current"); // use of optinal chaining to make sure the code doesnot throw an error

  // check if the element is not null or undefined and returns true and gets the id
  const songToHighlight = document.getElementById(
    `song-${userData.currentSongs?.id}`
  );
  // also it check if the element is not null or undefined and returns true and sets a attribute
  songToHighlight?.setAttribute("aria-current", "true");
}

// function to setDisplay to display current song and title
function setPlayerDisplay(){
  const playingSongTitle = document.getElementById("playlist-song-title"); // 
  const playingSongArtist = document.getElementById("playlist-song-artist"); //

  // get the current song title and artist in the userData that stores the current song object
  const currentTitle = userData.currentSongs?.title;
  const currentArtist = userData.currentSongs?.artist;

  // change the text content in the html and set the current title and current artist
  playingSongTitle.textContent = currentTitle ? currentTitle : "";
  playingSongArtist.textContent = currentArtist ? currentArtist : "";

}
// fuunction to set the arial label fo playButton to play followed by space and current song title
function setPlayButtonAccessibleText() {
  const song = userData.currentSongs;
  playButton.setAttribute("aria-label", userData.currentSongs ? `Play ${song.title}` : "Play");
};

// add event listener on the audio element
audio.addEventListener("ended", playNextSong)

