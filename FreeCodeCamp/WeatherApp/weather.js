
const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".userInput")
const card = document.querySelector(".card-container");
const apikey = "" ; // digits wit the apikey 

weatherForm.addEventListener("submit", async (event) => {

  event.preventDefault(); // prevent default behaviour of a form

  const city = cityInput.value

  if(city){

    try{

      const weatherData = await getWeatherDate(city);
      displayWeatherInfo(weatherData);

    }
    catch(error){

      console.error(error);
      displayError(error);

    }

  }else{

    displayError("Please enter a city");

  }
})

// getWeather function  

async function getWeatherDate(city) {
  
  const apiUrl = ``; // get the api call and replace the api key and the city name in the url. use the string concatenation to chnage the url to string

  const response = await fetch(apiUrl);

  if(!response.ok){

    throw new Error("Could not fetch weather data");
    
  }

  return response.json();

}

// displayWeather function 
function displayWeatherInfo(data) {
  
  console.log(data);

  const {name: city, main: {temp, humidity}, weather: [{description, id}]} = data 

  // reset the card container
  card.textContent= "";
  card.style.display = "flex";

  // create elements inside the card container
  const cityDisplay = document.createElement("h1");
  const tempDisplay = document.createElement("p");
  const humidityDisplay = document.createElement("p");
  const descDisplay = document.createElement("p");
  const weatherEmoji = document.createElement("p");

  // change the text content 
  cityDisplay.textContent = city;
  tempDisplay.textContent = `${(temp - 273.15).toFixed(2)}`;
  humidityDisplay.textContent = `Humidity: ${humidity}%`;
  descDisplay.textContent = description;
  weatherEmoji.textContent = getWeatherEmoji(id);

  // add a class list used in the css style 
  cityDisplay.classList.add("cityDisplay");
  tempDisplay.classList.add("tempDisplay");
  humidityDisplay.classList.add("humidityDisplay");
  descDisplay.classList.add("descDisplay");
  weatherEmoji.classList.add("weatherDisplay");

  // add the elements created inside the card container
  card.appendChild(cityDisplay);
  card.appendChild(tempDisplay);
  card.appendChild(humidityDisplay);
  card.appendChild(descDisplay);
  card.appendChild(weatherEmoji);

}

// weather emoji function
function getWeatherEmoji(weatherId){
  switch(true){
    case (weatherId >= 200 && weatherId < 300):
      return "⛈";
    case (weatherId >= 300 && weatherId < 400):
      return "🌧";
    case (weatherId >= 400 && weatherId <= 500):
      return "☔";
    case (weatherId >= 600 && weatherId >= 700):
      return "❄️";
    case (weatherId >= 700 && weatherId < 800):
      return "♒︎";
    case (weatherId === 800):
      return "☀️";  
    default:
      return "?"
  }
}

// display error function
function displayError(message){

  const errorDisplay  = document.createElement("p")
  errorDisplay.textContent = message;
  errorDisplay.classList.add("errorDisplay")

  card.textContent= ""
  card.style.display = "flex";
  card.appendChild(errorDisplay)

}






























































// // Weather API

// // {
// //   "weather": [
// //     {
// //       "main": "Clear",
// //       "description": "clear sky",
// //       "icon": "https://cdn.freecodecamp.org/weather-icons/01n.png" // icon representing the weather
// //     }
// //   ],

// //   "main": {
// //     "temp": 2.62, // temperature in C
// //     "feels_like": 0.84, // temperature in C
// //     "temp_min": 1.72, // min temperature of the day in C
// //     "temp_max": 3.49, // max temperature of the day in C
// //     "pressure": 1010, // atmospheric pressure in hPa
// //     "humidity": 81 // humidity in %
// //   },

// //   "visibility": 10000, // distance in meters
// //   "wind": {
// //     "speed": 1.79, // speed of the wind in m/s
// //     "deg": 285, // orientation of the wind in degrees
// //     "gust": 3.13 // gust speed in m/s
// //   },
// //   "name": "London"
// // }
// // const optionArray = [...selectContainer]; //convert the nodelist into an array


// const getWeatherButton = document.getElementById("get-weather-btn");
// const optionsArray = document.querySelectorAll("select option");

// // create a weather container to display the weather information
// const weatherContainer = document.createElement("div");
// weatherContainer.id = "weather-container";
// document.body.appendChild(weatherContainer); 

// // Run only when the button is clicked
// getWeatherButton.addEventListener("click", () => {

//   // Clear previous weather data
//   weatherContainer.innerHTML = "";

//   optionsArray.forEach(option => {
//     // Check if the current <option> is selected
//     if (!option.selected || option.value === "") {
//       return; // skip unselected or empty options
//     }
//   });
// });

// async function getWeather(city) {
//   try {
//     const response = await fetch(`https://weather-proxy.freecodecamp.rocks/api/city/${city}`);
//     const data = await response.json();
//     console.log(data); // Just for debugging
//     return data;       // Return the data to be used by showWeather
//   } catch (err) {
//     console.log("Error fetching weather data:", err);
//     return null; // Return null so the caller knows there was an error
//   }
// }

// get