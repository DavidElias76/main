
const getButtonWeather = document.getElementById("get-weather-btn");
const weatherIcon = document.getElementById("weather-icon");
const mainTemperature = document.getElementById("main-temperature");
const feelsLikeElement = document.getElementById("feels-like");
const humidityElement = document.getElementById("humidity");
const windSpeed = document.getElementById("wind");
const windGust = document.getElementById("wind-gust");
const mainWeather = document.getElementById("weather-main");
const locationElement = document.getElementById("location");

// Button click
getButtonWeather.addEventListener("click", () => {
  // Grab all option elements
  const optionSelected = document.querySelectorAll("select option");

  // Loop through each option
  optionSelected.forEach(option => {
    // Check if the option is selected and has a value
    if (option.selected && option.value !== "") {
      console.log(`Selected option value: ${option.value}`); // Debugging
      getWeather(option.value); // Fetch weather for this value
    }
  });
});

// Show weather
function showWeather(city) {
  const {
    weather: [{ icon, main: weatherCondition }],
    main: { temp, feels_like, humidity },
    wind: { speed, gust },
    name: cityArea
  } = city;

    weatherIcon.src = icon;
    mainTemperature.textContent = `${temp.toFixed(1)} °C`;
    feelsLikeElement.textContent = `${feels_like.toFixed(1)} °C`;
    humidityElement.textContent = `${humidity}%`;
    windSpeed.textContent = `${speed} m/s`;
    windGust.textContent = `${gust ?? "Not available"} m/s`;
    mainWeather.textContent = weatherCondition;
    locationElement.textContent = cityArea;
}

// Fetch weather data
async function getWeather(city) {
    try {
    const response = await fetch(
      `https://weather-proxy.freecodecamp.rocks/api/city/${city}`
    );
    const weatherData = await response.json(); // await here!
    console.log(weatherData);
    showWeather(weatherData);
  } catch (error) {
    alert("Something went wrong, please try again later");
    console.error(error);
  }
}
