const apiKey = "4ef697664b62e95c5cf37645e05593cf";

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const weatherDescription = document.getElementById("weatherDescription");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const weatherIcon = document.getElementById("weatherIcon");

async function getWeather(city) {

    try {

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        const response = await fetch(url);

       const data = await response.json();

if (data.cod != 200) {

    alert("City not found!");

    return;

}

        cityName.innerText = data.name;

temperature.innerText = `${Math.round(data.main.temp)}°C`;

weatherDescription.innerText = data.weather[0].description;

humidity.innerText = `Humidity : ${data.main.humidity}%`;

wind.innerText = `Wind Speed : ${data.wind.speed} m/s`;

weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

weatherIcon.style.display = "block";
localStorage.setItem("lastCity", city);

    } catch (error) {

        console.log(error);

    }

}
searchBtn.addEventListener("click", () => {

    const city = cityInput.value.trim();

    if (city === "") {

        alert("Please enter a city name!");

        return;

    }

    getWeather(city);

});
cityInput.addEventListener("keypress", (e) => {

    if (e.key === "Enter") {

        searchBtn.click();

    }

});
const lastCity = localStorage.getItem("lastCity");

if (lastCity) {

    cityInput.value = lastCity;

    getWeather(lastCity);

}