import React from 'react';

const WeatherCard = ({ weatherData }) => (
  <div className='flex-container'>

  <div className='card bg-info'>
    <div className='card-header text-center placeName'>{weatherData.name}</div>
    <ul className='list-group list-group-flush'>
      <li className='list-group-item'>
        Temperature: {weatherData.main.temp}°F
      </li>
      <li className='list-group-item'>
        Feels Like: {weatherData.main.feels_like}°F
      </li>
      <li className='list-group-item'>
        Humidity: {weatherData.main.humidity}%
      </li>
      <li className='list-group-item'>
        Pressure: {weatherData.main.pressure} hPa
      </li>
    </ul>
  </div>
  </div>
);

export default WeatherCard;
