import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Weather from './components/Weather';
import Home from './pages/Home';
import FiveDay from './pages/5Day';
import TenDay from './pages/10Day';
import AppNavbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <AppNavbar />
      <Routes>
        <Route
        path='/'
        element={<Home />}
        />
        <Route
        path='/weather'
        element={<Weather />}
        />
        <Route
        path='5day'
        element={<FiveDay />}
        />
        <Route
        path='10day'
        element={<TenDay />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
