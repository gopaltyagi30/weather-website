// script.js

// Your WeatherAPI Key (replace with your actual API key)
const API_KEY = 'YOUR_API_KEY';

// Select DOM elements
const cityInput = document.getElementById('city-input');
const searchButton = document.getElementById('search-button');
const cityName = document.getElementById('city-name');
const temperature = document.getElementById('temperature');
const condition = document.getElementById('condition');
const conditionIcon = document.getElementById('condition-icon');

// Function to fetch weather data
async function fetchWeather(city) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=c880957db2f3405987875312240912&q=${city}&aqi=no`
    );
    if (!response.ok) throw new Error('City not found');
    const data = await response.json();

    // Update the DOM with weather info
    cityName.textContent = `${data.location.name}, ${data.location.country}`;
    temperature.textContent = `Temperature: ${data.current.temp_c}°C`;
    condition.textContent = `Condition: ${data.current.condition.text}`;
    conditionIcon.src = data.current.condition.icon;
  } catch (error) {
    alert(error.message);
  }
}

// Add event listener to search button
searchButton.addEventListener('click', () => {
  const city = cityInput.value.trim();
  if (city) {
    fetchWeather(city);
  } else {
    alert('Please enter a city name!');
  }
});
