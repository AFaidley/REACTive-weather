import React from 'react';
import moment from 'moment';

const refresh = () => {
  window.location.reload();
};

const WeatherCard = ({ weatherData }) => (
  //   <div className='App'>
  //   {typeof data.main != 'undefined' ? (
  //     <WeatherPage weatherData={data} />
  //   ) : (
  //     <div></div>
  //   )}
  // </div>
  <div className='flex-container'>
    <div className='card bg-info'>
      <div className='card-header text-center placeName'>
        {weatherData.name}
      </div>
      <div className='card-header text-center placeName'>
        Date: {moment().format('dddd')}, {moment().format('LL')}
      </div>
      <ul className='list-group list-group-flush'>
        <div className='btn-container'>
          <button className='button refresh bg-info' onClick={refresh}>
            🔄{' '}
          </button>
        </div>
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
        <li className='list-group-item'>
          Sunrise:{' '}
          {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-US')}
        </li>
        <li className='list-group-item'>
          Sunset:{' '}
          {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-US')}
        </li>
      </ul>
    </div>
  </div>
);

export default WeatherCard;
