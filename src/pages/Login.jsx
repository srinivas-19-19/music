import { Link } from 'react-router-dom';
import { Music, Mail, Lock } from 'lucide-react';
import './Auth.css';

export default function Login() {
  return (
    <div className="auth-page">
      <div className="auth-container glass-card animate-fade-in">
        <div className="auth-header">
          <Music className="logo-icon mx-auto" size={40} />
          <h2>Welcome Back</h2>
          <p>Sign in to continue your musical journey</p>
        </div>
        
        <form className="auth-form">
          <div className="input-group">
            <Mail className="input-icon" size={20} />
            <input type="email" placeholder="Email Address" required />
          </div>
          <div className="input-group">
            <Lock className="input-icon" size={20} />
            <input type="password" placeholder="Password" required />
          </div>
          
          <div className="auth-options">
            <label className="remember-me">
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className="forgot-password">Forgot Password?</a>
          </div>
          
          <button type="submit" className="btn btn-primary full-width">Sign In</button>
        </form>
        
        <div className="auth-divider">
          <span>OR</span>
        </div>
        
        <button className="btn btn-outline full-width google-btn">
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" width="20" />
          Sign in with Google
        </button>
        
        <div className="auth-footer">
          <p>Don't have an account? <Link to="/signup">Sign up for free</Link></p>
        </div>
      </div>
    </div>
  );
}