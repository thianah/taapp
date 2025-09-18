import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Photo from './components/Photos';
import Story from './components/Story';
import Gift from './components/Gift';
import Header from './header';
import Sidebar from './navbar';
import Rsvp from './components/Rsvp';
import './index.css';


function App() {
  return (
    <Router basename="/">
      <div className="min-h-screen flex flex-col bg-black">
        <Header />
        <Sidebar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/photo" element={<Photo />} />
            <Route path="/story" element={<Story />} />
            <Route path="/gift" element={<Gift />} />
            <Route path="/rsvp" element={<Rsvp />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
