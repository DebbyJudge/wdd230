const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
const city = 'YOUR_CITY'; // Replace with your city
const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

async function getWeather() {
    const response = await fetch(weatherURL);
    const data = await response.json();
    displayWeather(data);
}

function displayWeather(data) {
    const temp = data.main.temp;
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;

    document.getElementById('temp').textContent = `Temperature: ${temp}°C`;
    document.getElementById('description').textContent = `Description: ${description}`;
    document.getElementById('weather-icon').src = `https://openweathermap.org/img/w/${icon}.png`;
    document.getElementById('weather-icon').alt = description;
}

getWeather();
