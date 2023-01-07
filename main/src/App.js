import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WeatherPage from './pages/WeatherPage';
import Home from './pages/Home';
import FiveDay from './pages/5Day';
import TenDay from './pages/10Day';
import Radar from './pages/Radar';
import AirQuality from './pages/AirQuality';
import AppNavbar from './components/Navbar';
import Footer from './components/Footer';
import React, { useEffect, useState } from 'react';

function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);
  const [lat1, setLat1] = useState([]);
  const [long1, setLong1] = useState([]);
  const [data1, setData1] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(
        `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=imperial&APPID=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log(result);
        });
    };
    fetchData();
  }, [lat, long]);

  useEffect(() => {
    const fetchData1 = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat1(position.coords.latitude);
        setLong1(position.coords.longitude);
      });

      await fetch(
        `${process.env.REACT_APP_AIR_URL}/nearest_city?key=${process.env.REACT_APP_AIR_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData1(result);
          console.log(result);
        });
    };
    fetchData1();
  }, [lat1, long1]);

  return (
    <Router>
  {/* <div className='App'>
    {typeof data.main != 'undefined' ? (
      <Weather weatherData={data} />
    ) : (
      <div></div>
    )}
  </div> */}
      <AppNavbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/weather' element={<WeatherPage  weatherData={data}/>} />
        <Route path='5day' element={<FiveDay />} />
        <Route path='10day' element={<TenDay />} />
        <Route path='radar' element={<Radar/>} />
        <Route path='airquality' element={<AirQuality airData={data1}/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
