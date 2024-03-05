import React from 'react'

function SearchBar({label, value, onChange}) {

    return (
        <>
        <div id="search-bar">
        <input type="text" id="cityInput" placeholder="Enter City"/>
        <button onclick="searchWeather()">Search</button>
    </div>

    <div id="weather-container">
        <h2 id="temperature">Temperature: </h2>
        <p id="humidity">Humidity: </p>
        <p id="pressure">Pressure: </p>
        <p id="minTemp">Min Temperature: </p>
        <p id="maxTemp">Max Temperature: </p>

        <img id="weather-image" src="https://your-image-url.jpg" alt="Weather Image"/>
    </div>
   </>
    );
}

export default SearchBar
