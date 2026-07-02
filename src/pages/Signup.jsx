import { Link } from 'react-router-dom';
import { Music, Mail, Lock, User } from 'lucide-react';
import './Auth.css';

export default function Signup() {
  return (
    <div className="auth-page">
      <div className="auth-container glass-card animate-fade-in">
        <div className="auth-header">
          <Music className="logo-icon mx-auto" size={40} />
          <h2>Join Aria Academy</h2>
          <p>Start your premium musical education today</p>
        </div>
        
        <form className="auth-form">
          <div className="input-group">
            <User className="input-icon" size={20} />
            <input type="text" placeholder="Full Name" required />
          </div>
          <div className="input-group">
            <Mail className="input-icon" size={20} />
            <input type="email" placeholder="Email Address" required />
          </div>
          <div className="input-group">
            <Lock className="input-icon" size={20} />
            <input type="password" placeholder="Password" required />
          </div>
          
          <button type="submit" className="btn btn-primary full-width">Create Account</button>
        </form>
        
        <div className="auth-divider">
          <span>OR</span>
        </div>
        
        <button className="btn btn-outline full-width google-btn">
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" width="20" />
          Sign up with Google
        </button>
        
        <div className="auth-footer">
          <p>Already have an account? <Link to="/login">Sign in</Link></p>
        </div>
      </div>
    </div>
  );
}