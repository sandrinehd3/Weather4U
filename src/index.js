let now = new Date();
let h2 = document.querySelector("h2");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let day = days[now.getDay()];
let month = months[now.getMonth()];
let date = now.getDate();
let year = now.getFullYear();
let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}

let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

h2.innerHTML = `${day},  ${month} ${date}, ${year}  <br> ${hour}:${minutes}`;

// temp and city

function showTemperature(response) {
  document.querySelector("#search-text-input").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
}

function showCity(event) {
  event.preventDefault();
  let city = document.querySelector("#search-text-input");
  let displaycity = document.querySelector("#display-city");
  let apiKey = `bdd263b59088bdadbee5570c95e7c44e`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=imperial
  `;
  displaycity.innerHTML = `${city.value}`;
  axios.get(apiUrl).then(showTemperature);
}

let showWeather = document.querySelector("#search-form");
showWeather.addEventListener("submit", showCity);
