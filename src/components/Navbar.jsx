import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Music, Menu, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar glass">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <Music className="logo-icon" size={28} />
          <span className="logo-text">Aria Academy</span>
        </Link>
        
        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/courses" onClick={() => setIsOpen(false)}>Courses</Link>
          <Link to="/schedule" onClick={() => setIsOpen(false)}>Schedule</Link>
          <Link to="/student-dashboard" onClick={() => setIsOpen(false)}>Dashboard</Link>
          <Link to="/login" className="btn btn-outline" onClick={() => setIsOpen(false)}>Log In</Link>
          <Link to="/signup" className="btn btn-primary" onClick={() => setIsOpen(false)}>Free Trial</Link>
        </div>

        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}
