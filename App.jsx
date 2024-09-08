import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Design from './Design';
import WeatherApp from './WeatherApp';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/design" element={<Design />} />
        <Route path="/weather" element={<WeatherApp />} /> {/* New Weather Route */}
      </Routes>
    </>
  );
}

export default App;