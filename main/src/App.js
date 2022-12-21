import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Weather from './components/Weather';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
        path='/'
        element={<Home />}
        />
        <Route
        path='/weather'
        element={<Weather />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
