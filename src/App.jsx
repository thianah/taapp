import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import About from './components/AboutUs';
import Photo from './components/photos';
import Story from './components/story';
import Gift from './components/gift';
import Header from './header';
import Sidebar from './navbar';
import './index.css';
import './assets/photo1.jpg';
import './assets/photo2.jpg';
import './assets/photo3.jpg';
import './assets/photo4.jpg';
import '../src/assets/aboutvideo.mp4';


function App() {
  return (
    <Router>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={
        <>
        <Home />
        <About />
        <Story />
        <Photo />
        <Gift />
        </>
        } />
        <Route path="/" element={<Home />} />
        <Route path="/Photo" element={<Photo />} /> {/* Renamed route */}
        <Route path="/Story" element={<Story />} />
        <Route path="/About" element={<About />} />
        <Route path="/Gift" element={<Gift />} />
      </Routes>
    </Router>
  );
}

export default App;
