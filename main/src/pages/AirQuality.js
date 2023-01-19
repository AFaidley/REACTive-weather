const airQualityAPIkey = '4929c896-1465-4dd5-927c-6506a0034f03';
let lat1;
let lon1;

const AirQuality = () => {
  return <div>Air Quality</div>;
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
