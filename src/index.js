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
  event.preventDefault();
  console.log(response.data);

  let tempElement = document.querySelector("#temperature");
  let city = document.querySelector("#search-text-input");
  let displayCity = document.querySelector("#display-city");
  let humidityElement = document.querySelector("#humidity");
  let windspeedElement = document.querySelector("#windspeed");
  let pressureElement = document.querySelector("#pressure");
  let descriptionElement = document.querySelector("#temp-description");
  let iconElement = document.querySelector("#description-icon");

  tempElement.innerHTML = Math.round(response.data.main.temp);
  city.innerHTML = response.data.name;
  displayCity.innerHTML = `${city.value}`;
  humidityElement.innerHTML = response.data.main.humidity;
  windspeedElement.innerHTML = Math.round(response.data.wind.speed);
  pressureElement.innerHTML = response.data.main.pressure;
  descriptionElement.innerHTML = response.data.weather[0].description;
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
}

let apiKey = `bdd263b59088bdadbee5570c95e7c44e`;
let city = "Kingston";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial
  `;

axios.get(apiUrl).then(showTemperature);
