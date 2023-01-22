import React from 'react';
import moment from 'moment';
const aqiResult = document.getElementById('aqiResult');

const AirQualityCard = ({ airData }) => {
  let airQuality = airData.data.current.pollution.aqius;
  if (airQuality <= 50) {
    aqiResult.setAttribute('id', 'good');
  } else if (airQuality > 50 && airQuality <= 100) {
    aqiResult.setAttribute('id', 'moderate');
  } else if (airQuality > 100 && airQuality <= 150) {
    aqiResult.setAttribute('id', 'sensitive');
  } else if (airQuality > 150 && airQuality <= 200) {
    aqiResult.setAttribute('id', 'unhealthy');
  } else {
    aqiResult.setAttribute('id', 'very-unhealthy');
  }
  return (
    <div className='flex-container'>
      <div className='card bg-info'>
        <div className='card-header text-center placeName'>
          {airData.data.city}, {airData.data.country}
        </div>
        <div className='card-header text-center placeName'>
          Date: {moment().format('dddd')}, {moment().format('LL')}
        </div>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            Air Quality: <span id='good'>{airData.data.current.pollution.aqius}</span>
          </li>
          <li className='list-group-item'>
            Air Quality Index:
            <br></br>
            <span id='good'>0-50</span> = Good
            <br></br>
            <span id='moderate'>51-100</span> = Moderate
            <br></br>
            <span id='sensitive'>101-150</span> = Unhealthy for sensitive groups
            <br></br>
            <span id='unhealthy'>151-200</span> = Unhealthy
            <br></br>
            <span id='very-unhealthy'>201-300</span> = Very Unhealthy
            <br></br>
            <span id='hazardous'>301+</span> = Hazardous
          </li>
        </ul>
      </div>
    </div>
  );
  //  return <div>Testerific</div>;
};

export default AirQualityCard;
