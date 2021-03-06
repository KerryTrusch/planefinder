import Header from "./components/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Map from "./components/Home/map";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Map />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
