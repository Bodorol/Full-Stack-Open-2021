import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Weather = ({capital}) => {
    const [weather, setWeather] = useState({});
    useEffect(() => {
        axios.get("http://api.weatherstack.com/current?access_key=" + "&query=" + capital) // I took out the access key here
              .then(response => setWeather(response.data));
        return () => setWeather({});
      }, [capital]);
      console.log(weather.current);

    if ('current' in weather) {
        return (
            <div>
                <h2>Weather in {capital}</h2>
                <p><strong>Temperature: </strong> {weather.current.temperature} Degrees Celsius</p>
                <img src={weather.current.weather_icons[0]}/>
                <p><strong>Wind: </strong> {weather.current.wind_speed} mph
                <strong> | Direction: </strong> {weather.current.wind_dir}</p>

            </div>
        );
    } else {
        return null;
    }
}

export default Weather;