import React from 'react';
import { Card } from 'react-bootstrap';

const WeatherCard = ({weatherData}) => (
    <div>
  <Card>
        <Card.Header className="header">{weatherData.name}</Card.Header>
  </Card>
  </div>
)

export default WeatherCard;