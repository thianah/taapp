import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { IoApps } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Close sidebar on Escape key
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  const navLinks = [
    // { to: "/", label: "HOME" }, // Home navigation handled via header logo
    { to: "/story", label: "STORY" },
    { to: "/photo", label: "GALLERY" },
    { to: "/travel", label: "VENUE" },
    { to: "/gift", label: "GIFTS" },
    { to: "/rsvp", label: "RSVP" },
  ];

  return (
    <div>
      {!isOpen && (
        <button
          onClick={toggleSidebar}
          className="toggle-button open-button"
          aria-label="Open navigation menu"
          aria-expanded="false"
        >
          <IoApps />
        </button>
      )}

      <div
        className={`sidebar right-sidebar ${isOpen ? "open" : "closed"}`}
        role="navigation"
        aria-label="Main navigation"
      >
        {isOpen && (
          <button
            onClick={toggleSidebar}
            className="toggle-button close-button"
            aria-label="Close navigation menu"
            aria-expanded="true"
          >
            <IoClose />
          </button>
        )}

        {/* Use Link components for navigation */}
        <nav className="sidebar-links">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`ho ${isActive(link.to) ? "active" : ""}`}
              onClick={toggleSidebar}
              aria-current={isActive(link.to) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
