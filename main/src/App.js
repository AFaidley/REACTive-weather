import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Weather from './components/Weather';
import Home from './pages/Home';

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
