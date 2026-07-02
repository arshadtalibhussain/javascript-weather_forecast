const apiKey = "3c82c00bbb19f03519060dcbcf1f389b";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search-container input");
const searchBtn = document.getElementById("search-btn"); // fixed
const weatherIcon = document.querySelector(".weather img");
// const weatherIcon = document.querySelector(".weather img");
// console.log(weatherIcon); // Should now work

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  const data = await response.json();
  console.log(data);

  document.querySelector(".city-name").innerHTML = data.name;
  document.querySelector(".temperature").innerHTML =
    Math.round(data.main.temp) + "°C";
  document.querySelector(".wind-speed").innerHTML = data.wind.speed + " KM/H";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

  if (data.weather[0].main === "Clear") {
    weatherIcon.src = "images/clear-sky.png";
  } else if (data.weather[0].main === "Clouds") {
    weatherIcon.src = "images/cloudy.png";
  } else if (data.weather[0].main === "Rain") {
    weatherIcon.src = "images/raining.png";
  } else {
    // Optional fallback
    weatherIcon.src = "images/default.png";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
//  const apiKey="863242cfb2b1d357e6093d9a4df19a4b";
//  const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";

// const apiKey = "3c82c00bbb19f03519060dcbcf1f389b";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";

// async function checkWeather() {
//   const response = await fetch(apiUrl + `&appid=${apiKey}`);
//   var data = await response.json();

//   console.log(data);
// }

// checkWeather();

// const apiKey="3c82c00bbb19f03519060dcbcf1f389b";
// const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="

// const searchBox=document.querySelector(".search-container input");
// const searchBtn=document.querySelector(".search-container button");

// async function checkWeather(city){
// const response=await fetch(apiUrl + city+ `&appid=${apiKey}`);

// const data=await response.json();
// console.log(data);

// document.querySelector(".city-name").innerHTML=data.name
// document.querySelector(".temperature").innerHTML=Math.round(data.main.temp) + "°c";
// document.querySelector(".wind-speed").innerHTML=data.wind.speed + " KM/H";
// document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
// }

// searchBtn.addEventListener( "click",()=>{

//   checkWeather(searchBox.value);
// })

// const apiKey = "863242cfb2b1d357e6093d9a4df19a4b"; // Replace with your API key
// const searchBtn = document.getElementById("search-btn");
// const cityInput = document.getElementById("city-input");

// searchBtn.addEventListener("click", () => {
//   const city = cityInput.value.trim();
//   if (city !== "") {
//     getWeather(city);
//   } else {
//     alert("Please enter a city name");
//   }
// });

// async function getWeather(city) {
//   const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

//   try {
//     const response = await fetch(apiURL);
//     if (!response.ok) throw new Error("City not found");

//     const data = await response.json();

//     // Update the data on your webpage
//     document.getElementById("city-name").textContent = data.name;
//     document.getElementById("temperature").textContent = `${Math.round(data.main.temp)}°C`;
//     document.getElementById("wind-speed").textContent = `${data.wind.speed} km/h`;
//     document.getElementById("humidity").textContent = `${data.main.humidity}%`;

//     const iconCode = data.weather[0].icon;
//     document.getElementById("weather-icon").src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
//   } catch (error) {
//     alert(error.message);
//   }
// }
