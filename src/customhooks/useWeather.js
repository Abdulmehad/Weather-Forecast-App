import { useEffect, useState } from 'react';

function useWeather(cityName) {
    const [data, setData] = useState({});

    useEffect(() => {
        async function fetchWeather() {
           try{
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=0b87f35973531b26533f637e0794c8b9`);
                const weatherData = await response.json();
                const newData = {
                    mainTemp: weatherData.main.temp,
                    humidity: weatherData.main.humidity,
                    pressure: weatherData.main.pressure,
                    minTemp: weatherData.main.temp_min,
                    maxTemp: weatherData.main.temp_max,
                    weatherIcon: weatherData.weather[0].icon,
                };
                setData(newData);
            }catch(err){
                setData({});
            }
         }

        if (cityName) {
            fetchWeather();
        }
    }, [cityName]);

    return data;
}

export default useWeather;