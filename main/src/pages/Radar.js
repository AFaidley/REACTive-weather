// const Radar = () => {
//     return (
//         <div>Welcome to Radar</div>
//     )
// }

// export default Radar;

import React from 'react';
import { Card } from 'react-bootstrap';

const WeatherCard = ({ weatherData }) => (
  <div>
    <Card>
      <Card.Header className='header'>{weatherData.name}</Card.Header>
      {/* <Card.Header className='header'>{weatherData.weather[0].description}</Card.Header> */}
    </Card>
  </div>
);

export default WeatherCard;