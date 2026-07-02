import { Link } from 'react-router-dom';
import { Music, Share2 } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <Music className="logo-icon" size={28} />
            <span className="logo-text">Aria Academy</span>
          </Link>
          <p className="footer-desc">
            Empowering the next generation of global musicians with world-class online instruction.
          </p>
          <div className="social-links">
            <a href="#"><Share2 size={20} /></a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Explore</h4>
          <Link to="/courses">All Courses</Link>
          <Link to="/schedule">Schedule</Link>
          <Link to="/instructors">Instructors</Link>
          <Link to="/pricing">Pricing</Link>
        </div>

        <div className="footer-links">
          <h4>Support</h4>
          <Link to="/faq">FAQ</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </div>

        <div className="footer-newsletter">
          <h4>Stay Updated</h4>
          <p>Subscribe to our newsletter for masterclass announcements.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email address" required />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Aria Music Academy. All rights reserved.</p>
      </div>
    </footer>
  );
}
