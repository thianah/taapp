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
        <Link to="/" className="ho" onClick={toggleSidebar}>
          Home
        </Link>
        <br />
        <Link to="/Story" className="ho" onClick={toggleSidebar}>
          Story
        </Link>
        <br />
        <Link to="/Photo" className="ho" onClick={toggleSidebar}>
          Photo
        </Link>
        <br />
        <Link to="/Gift" className="ho" onClick={toggleSidebar}>
       Gifts
        </Link>
        <br />
        <Link to="/Rsvp" className="ho" onClick={toggleSidebar}>
          RSVP
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
