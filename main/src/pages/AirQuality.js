// const airQualityAPIkey = '4929c896-1465-4dd5-927c-6506a0034f03';
import React from 'react';
import moment from 'moment';


const AirQuality = ({airData}) => {
  <div className='flex-container'>
    <div className='card bg-info'>
      <div className='card-header text-center placeName'>
        {airData.city}
      </div>
      <div className='card-header text-center placeName'>
        Date: {moment().format('dddd')}, {moment().format('LL')}
      </div>
      {/* <ul className='list-group list-group-flush'>
        <li className='list-group-item'>
          Temperature: {airData.main.temp}°F
        </li>
       </ul> */}
    </div>
  </div>
};

export default AirQuality;

// const getGeolocation = () => {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(function(position){
//             lat1 = position.coords.latitude;
//             lon1 = position.coords.longitude;
//         });
//     }
// };

// getGeolocation();

// export const getAirQuality = (cityName, stateInput, airQualityAPIkey) => {
//     return fetch(`https://api.airvisual.com/v2/city?city=${cityName}&state=${stateInput}&country=USA&key=${airQualityAPIkey}`);
//   };
