function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#temp-description");
  let highElement = document.querySelector("#hightemp");
  let lowElement = document.querySelector("#lowtemp");
  let sunriseElement = document.querySelector("#sunrise");
  let sunsetElement = document.querySelector("#sunset");

  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  highElement.innerHTML = Math.round(response.data.main.temp_max);
  lowElement.innerHTML = Math.round(response.data.main.temp_min);
  sunriseElement.innerHTML = response.data.sys.sunrise;
  sunsetElement.innerHTML = response.data.sys.sunset;
}

let apiKey = "bdd263b59088bdadbee5570c95e7c44e";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&APPID=${apiKey}&units=imperial`;

axios.get(apiUrl).then(displayTemperature);
