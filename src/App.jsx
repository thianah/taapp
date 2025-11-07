import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Photo from "./components/photos";
import Story from "./components/story";
import Gift from "./components/gift";
import Header from "./header";
import Sidebar from "./navbar";
import Rsvp from "./components/Rsvp";
import Travel from "./components/travel";
import ErrorBoundary from "./components/ErrorBoundary";
import "./index.css";

function App() {
  return (
    <ErrorBoundary>
      <Router basename="/">
        <div className="min-h-screen flex flex-col bg-black">
          <Header />
          <Sidebar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/photo" element={<Photo />} />
              <Route path="/story" element={<Story />} />
              <Route path="/travel" element={<Travel />} />
              <Route path="/gift" element={<Gift />} />
              <Route path="/rsvp" element={<Rsvp />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
