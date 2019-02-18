const { Weather } = require("./weather");
const { Ui } = require("./ui");
const { Store } = require("./store");

const ui = new Ui();
const store = new Store();
const { city, countryCode } = store.getLocationData();
const weather = new Weather(city, countryCode);

require("./index.css");

async function fetchWeather() {
  const data = await weather.getWeather();
  console.log(data);
  ui.render(data);
}

document.getElementById("w-change-btn").addEventListener("click", e => {
  const city = document.getElementById("city").value;
  const countryCode = document.getElementById("countryCode").value;
  weather.changeLocation(city, countryCode);
  store.setLocationsData(city, countryCode);
  fetchWeather();
  e.preventDefault();
});

document.addEventListener("DOMContentLoaded", fetchWeather);
