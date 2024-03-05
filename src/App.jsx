import { useState, useEffect } from 'react';
import useWeather from './customhooks/useWeather';

function App() {
  const [temperature, setTemperature] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [pressure, setPressure] = useState(0);
  const [minTemp, setMinTemp] = useState(0);
  const [maxTemp, setMaxTemp] = useState(0);
  const [photoUrl, setPhotoUrl] = useState('');
  const [cityName, setCityName] = useState('lahore');
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    // Update state only when weatherData changes
    setTemperature(weatherData.temp || 0);
    setHumidity(weatherData.humidity|| 0);
    setPressure(weatherData.pressure || 0);
    setMinTemp(weatherData.temp_min || 0);
    setMaxTemp(weatherData.temp_max || 0);
  }, [weatherData]);

  const handleGetWeather = () => {
    try {
      const data = useWeather(cityName);
      setWeatherData(data);
    } catch (err) {
      window.alert('City not found');
    }
  };

  return (
    <>
      <div className="fixed top-0 right-0 m-6 p-4 bg-blue-500 text-white shadow-lg rounded-lg">
        <input
          type="text"
          placeholder="Enter City Name"
          className="border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white p-2 rounded-lg ml-2"
          onClick={handleGetWeather}
        >
          Get Weather
        </button>
      </div>
      <div className="flex flex-col items-center mt-8">
        <h1 className="text-4xl font-bold">{temperature}°C</h1>
        {/* Humidity, Pressure, Min Temp, Max Temp */}
        <div className="flex justify-between w-1/2 mt-4">
          <p>Humidity: {humidity}%</p>
          <p>Pressure: {pressure} hPa</p>
        </div>
        <div className="flex justify-between w-1/2 mt-2">
          <p>Min Temp: {minTemp}°C</p>
          <p>Max Temp: {maxTemp}°C</p>
        </div>
        {/* Photo */}
         <img src={photoUrl} alt="Weather" className="mt-4" />
      </div>
    </>
  );
}

export default App;
