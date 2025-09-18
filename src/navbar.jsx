import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { IoApps } from "react-icons/io5";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {!isOpen && (
        <button onClick={toggleSidebar} className="toggle-button open-button">
          <IoApps />
        </button>
      )}

      <div className={`sidebar right-sidebar ${isOpen ? "open" : "closed"}`}>
        {isOpen && (
          <button
            onClick={toggleSidebar}
            className="toggle-button close-button"
          >
            <IoClose />
          </button>
        )}

        {/* Use Link components for navigation */}
        <nav className="sidebar-links">
          <Link to="/" className="ho" onClick={toggleSidebar}>
            HOME
          </Link>
          <Link to="/story" className="ho" onClick={toggleSidebar}>
            STORY
          </Link>
          <Link to="/photo" className="ho" onClick={toggleSidebar}>
            PHOTOS
          </Link>
          <Link to="/gift" className="ho" onClick={toggleSidebar}>
            GIFTS
          </Link>
          <Link to="/rsvp" className="ho" onClick={toggleSidebar}>
            RSVP
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
