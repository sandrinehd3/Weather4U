function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
}

let apiKey = "bdd263b59088bdadbee5570c95e7c44e";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Tokyo&APPID=${apiKey}&units=imperial`;

axios.get(apiUrl).then(displayTemperature);
