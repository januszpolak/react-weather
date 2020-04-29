import React from 'react';
import './Result.css'

const Result = (props) => {

    const { city, temp, wind, pressure, sunset, sunrise, date, err } = props.weather;
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();

    return (
        <>
            <div className="weather">
                <p>Dane z dnia i godziny: {date}</p>
                <p>Miasto: {city}</p>
                <p>Temperatura: {temp}°C</p>
                <p>Ciśnienie: {pressure} hPa</p>
                <p>Prędkość wiatru: {wind} kph</p>
                <p>Wschód słońca: {sunriseTime}</p>
                <p>Zachód słońca: {sunsetTime}</p>
            </div>
        </>
    );
}

export default Result;