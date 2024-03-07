import { useEffect, useState } from 'react';

function useWeather(cityname) {
    console.log(cityname);
    const [Data, setData] = useState({});
   

    useEffect(() => {
        fetchWeather(cityname);
    }, [cityname]);


    async function fetchWeather(cityname) {
let headersList = {
    "Accept": "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)"
   }
   
   let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=0b87f35973531b26533f637e0794c8b9`, { 
     method: "GET",
     headers: headersList
   });
   
   let data1 = await response.json();
   let data = {
    mainTemp: data1.main.temp,
    humidity: data1.main.humidity,
    pressure: data1.main.pressure,
    minTemp: data1.main.temp_min,
    maxTemp: data1.main.temp_max,
    weatherIcon: data1.weather[0].icon,
   }    
    }
setData(data);
return Data;

}

export default useWeather;