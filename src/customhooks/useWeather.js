import { useEffect, useState } from 'react';

function useWeather(cityname) {
    const [Data, setData] = useState({});
    useEffect(() => {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=0b87f35973531b26533f637e0794c8b9`
        )
            .then((res) => 
             res.json()
            )
            .then((res) => {
                setData({
                    mainTemp: res.main.temp,
                    humidity: res.main.humidity,
                    pressure: res.main.pressure,
                    minTemp: res.main.temp_min,
                    maxTemp: res.main.temp_max,
                    weatherIcon: res.weather[0].icon,
                })})
    }, [cityname]);
    return Data;
}

export default useWeather;