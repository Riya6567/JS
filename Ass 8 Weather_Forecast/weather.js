const apiKey = 'dacc45eaeb7bd38ce20866ae334a1612'; 
const cityForm = document.getElementById('cityForm');
const cityInput = document.getElementById('cityInput');
const weatherContainer = document.getElementById('weatherContainer');
const currentWeather = document.getElementById('currentWeather');
const forecast = document.getElementById('forecast');
const cityName = document.getElementById('cityName');
const currentTemp = document.getElementById('currentTemp');
const currentDesc = document.getElementById('currentDesc');
const forecastCards = document.getElementById('forecastCards');
cityForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const city = cityInput.value.trim();
    if (city) {
        await getWeather(city);
        cityInput.value = '';
    }
});
async function getWeather(city) {
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;
    try {
        const [currentResponse, forecastResponse] = await Promise.all([
            fetch(currentWeatherUrl),
            fetch(forecastUrl),
        ]);
        if (!currentResponse.ok || !forecastResponse.ok) {
            throw new Error('City not found');
        }
        const currentData = await currentResponse.json();
        const forecastData = await forecastResponse.json();
        displayCurrentWeather(currentData);
        displayForecast(forecastData.list);
    } catch (error) {
        alert('Error fetching weather data: ' + error.message);
    }
}
function displayCurrentWeather(data) {
    currentWeather.classList.remove('d-none');
    cityName.textContent = `${data.name}, ${data.sys.country}`;
    currentTemp.textContent = `Temperature: ${data.main.temp}°C`;
    currentDesc.textContent = `Weather: ${data.weather[0].description}`;
}
function displayForecast(forecastList) {
    forecast.classList.remove('d-none');
    forecastCards.innerHTML = '';
    const dailyForecasts = forecastList.filter((entry) => entry.dt_txt.includes('12:00:00'));
    dailyForecasts.forEach((day) => {
        const card = document.createElement('div');
        card.classList.add('forecast-card');
        const date = new Date(day.dt_txt).toLocaleDateString(undefined, {
            weekday: 'short',
            day: 'numeric',
            month: 'short',
        });
        const temp = `${day.main.temp}°C`;
        const desc = day.weather[0].description;
        card.innerHTML = `
        <h5>${date}</h5>
        <p>${temp}</p>
        <p>${desc}</p>
        `;
        forecastCards.appendChild(card);
    });
}