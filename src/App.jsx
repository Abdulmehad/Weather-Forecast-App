import { useState, useEffect } from 'react';
import useWeather from './customhooks/useWeather';

function App() {
  const [temperature, setTemperature] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [pressure, setPressure] = useState(0);
  const [minTemp, setMinTemp] = useState(0);
  const [maxTemp, setMaxTemp] = useState(0);
  const [photoUrl, setPhotoUrl] = useState('');
  const [cityName, setCityName] = useState('');

  // Remove weatherData state, we'll manage weather data with useWeather hook

  const weatherData = useWeather(cityName);

  /*useEffect(() => {
    // Update state only when weatherData changes     // it will update the weather without pressing button 
    setTemperature(weatherData.mainTemp || 0);
    setHumidity(weatherData.humidity || 0);
    setPressure(weatherData.pressure || 0);
    setMinTemp(weatherData.minTemp || 0);
    setMaxTemp(weatherData.maxTemp || 0);
    setPhotoUrl(
      `http://openweathermap.org/img/wn/${weatherData.weatherIcon}.png`
    );
  
}, [weatherData]);*/

  const handleGetWeather = () => {
    // Update state only when weatherData changes

    setTemperature(weatherData.mainTemp || 0);
    setHumidity(weatherData.humidity || 0);
    setPressure(weatherData.pressure || 0);
    setMinTemp(weatherData.minTemp || 0);
    setMaxTemp(weatherData.maxTemp || 0);
    setPhotoUrl(
      `http://openweathermap.org/img/wn/${weatherData.weatherIcon}.png`
    );

  };
return(
  <div
   className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
   style={{
    backgroundImage: `url(https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
}}
   >
  <div className="w-full">
    <div className="w-full max-w-xl mx-auto border border-gray-60 rounded-lg p-4 backdrop-blur-md bg-white/30">
      <div className="flex items-center justify-center h-full">
        <input className="bg-white hover:bg-white text-black font-bold py-2 px-4 rounded mr-2"
          type="text"
          placeholder="Enter City Name"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
  
          <button

            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
            onClick={handleGetWeather}
            onSubmit={handleGetWeather}
          >
            Get Weather
          </button>

      </div>
      <div className="flex" style={{ backgroundImage: `url(${photoUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' ,paddingTop:'16px'}}>
        <div className='w-1/2 p-4 flex flex-col items-center justify-center h-full pt-9 mr-5'>
        <h1 className="text-center font-bold text-6xl">{temperature}°C</h1>
        </div>
        <div className="w-1/2 p-4  flex flex-col items-center justify-center h-full font-semibold">
          <p>Humidity: {humidity}%</p>
          <p>Pressure: {pressure} hPa</p>
          <br />
          <p>Min Temp: {minTemp}°C</p>
          <p>Max Temp: {maxTemp}°C</p>
        </div>
       
      </div>
    </div>
  </div>
</div>
);

}
export default App;
