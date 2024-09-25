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
const URL =
  "https://api.openweathermap.org/data/2.5/weather?q=Nepal&appid=0da276badcf89829f3cd9de5ca943c76";
const main = async () => {
  console.log("getting data .....");
  let response = await fetch(URL);
  let data = await response.json();
  console.log(data);
  temperature.textContent = data.main.temp;
  winds.textContent = data.wind.speed;
  weathers.textContent = data.weather[0].description;
  ma.textContent = data.main.temp_max;
  mi.textContent = data.main.temp_min;
  pressuree.textContent = data.main.pressure;
  feellike.textContent = data.main.feels_like;
  locate.textContent = data.name;
  coder.textContent = data.sys.country;

  console.log(data.weather[0].icon);
  iconer.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  );
};
main();
