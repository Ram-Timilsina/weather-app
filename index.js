const temperature = document.querySelector("#temps");
const winds = document.querySelector("#wind");
const weathers = document.querySelector("#weathe");
const mi = document.querySelector("#mins");
const ma = document.querySelector("#maxs");
const pressuree = document.querySelector("#pressur");
const feellike = document.querySelector("#feel");
const iconer = document.querySelector("#icons");
const locate = document.querySelector("#locatio");
const coder = document.querySelector("#code");
const inputs = document.querySelector("#inputt");
const butto = document.querySelector("#btn");

// Function to convert Kelvin to Celsius
const kelvinToCelsius = (kelvin) => {
  return (kelvin - 273.15).toFixed(1);
};

// Function to fetch weather data
const fetchWeatherData = async (value) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=0da276badcf89829f3cd9de5ca943c76`;
  console.log("Getting data...");
  try {
    let response = await fetch(URL);

    if (!response.ok) {
      throw new Error("Location not found");
    }

    let data = await response.json();
    console.log(data);

    // Update UI with the fetched data
    temperature.textContent = kelvinToCelsius(data.main.temp) + " °C"; // Convert and display temperature
    winds.textContent = data.wind.speed + " km/h"; // Display wind speed
    weathers.textContent = data.weather[0].description; // Weather description
    ma.textContent = kelvinToCelsius(data.main.temp_max) + " °C"; // Max temp
    mi.textContent = kelvinToCelsius(data.main.temp_min) + " °C"; // Min temp
    pressuree.textContent = data.main.pressure + " hPa"; // Pressure
    feellike.textContent = kelvinToCelsius(data.main.feels_like) + " °C"; // Feels like
    locate.textContent = data.name; // Location name
    coder.textContent = data.sys.country; // Country code

    iconer.setAttribute(
      "src",
      `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    );
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};

butto.addEventListener("click", function () {
  const value = inputs.value;
  if (value) {
    fetchWeatherData(value);
  } else {
    alert("Please enter a location.");
  }
});

inputs.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const value = inputs.value;
    if (value) {
      fetchWeatherData(value);
    } else {
      alert("Please enter a location.");
    }
  }
});
