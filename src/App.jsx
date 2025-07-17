import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Photo from './components/photos';
import Story from './components/story';
import Gift from './components/gift';
import Header from './header';
import Sidebar from './navbar';
import Rsvp from './components/Rsvp';
import './index.css';


function App() {
  return (
    <Router>
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Photo" element={<Photo />} /> {/* Renamed route */}
        <Route path="/Story" element={<Story />} />
        <Route path="/Gift" element={<Gift />} />
        <Route path="/Rsvp" element={<Rsvp />} />
      </Routes>
    </Router>
  );
}

export default App;
