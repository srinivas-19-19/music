import { Link } from 'react-router-dom';
import { Play, ArrowRight, Star, Users, Globe, BookOpen, Clock, CheckCircle } from 'lucide-react';
import './Home.css';

export default function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container grid-2">
          <div className="hero-content animate-fade-in">
            <h1 className="hero-title">
              Learn Music from <span className="text-gradient-gold">Anywhere</span> in the World
            </h1>
            <p className="hero-subtitle delay-100">
              Master your favorite instruments with world-class instructors. 
              Join thousands of students in our premium online academy.
            </p>
            <div className="hero-cta delay-200">
              <Link to="/signup" className="btn btn-primary">
                Book a Free Trial
              </Link>
              <Link to="/courses" className="btn btn-outline">
                <Play size={18} /> Explore Courses
              </Link>
            </div>
          </div>
          <div className="hero-image animate-fade-in delay-300">
            {/* We use a placeholder that feels premium with glass effect */}
            <div className="hero-image-wrapper glass">
              <div className="floating-note note-1">🎵</div>
              <div className="floating-note note-2">🎶</div>
              <div className="image-placeholder">
                <MusicHeroPlaceholder />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats container">
        <div className="stats-grid glass-card animate-fade-in">
          <div className="stat-item">
            <Users size={32} className="stat-icon" />
            <h3>50,000+</h3>
            <p>Active Students</p>
          </div>
          <div className="stat-item">
            <Globe size={32} className="stat-icon" />
            <h3>120+</h3>
            <p>Countries</p>
          </div>
          <div className="stat-item">
            <BookOpen size={32} className="stat-icon" />
            <h3>300+</h3>
            <p>Premium Courses</p>
          </div>
          <div className="stat-item">
            <Star size={32} className="stat-icon" />
            <h3>15+</h3>
            <p>Years Experience</p>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="featured-courses container">
        <div className="section-header text-center">
          <h2>Featured Masterclasses</h2>
          <p>Learn from the world's best musicians</p>
        </div>
        
        <div className="grid-3">
          {[
            { title: 'Classical Piano Mastery', instructor: 'Elena Rostova', level: 'Advanced', price: '$199', tag: 'Piano' },
            { title: 'Modern Vocal Techniques', instructor: 'Marcus Chen', level: 'Intermediate', price: '$149', tag: 'Vocal' },
            { title: 'Acoustic Guitar Fundamentals', instructor: 'Sarah Jenkins', level: 'Beginner', price: '$99', tag: 'Guitar' }
          ].map((course, idx) => (
            <div key={idx} className="course-card glass-card">
              <div className="course-image-placeholder"></div>
              <div className="course-content">
                <span className="course-tag">{course.tag}</span>
                <h3 className="course-title">{course.title}</h3>
                <p className="course-instructor">by {course.instructor}</p>
                <div className="course-meta">
                  <span><Clock size={16}/> 12 Weeks</span>
                  <span>{course.level}</span>
                </div>
                <div className="course-footer">
                  <span className="course-price">{course.price}</span>
                  <Link to={`/courses/${idx}`} className="btn-link">View Course <ArrowRight size={16}/></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <Link to="/courses" className="btn btn-outline">View All Courses</Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us">
        <div className="container">
          <div className="section-header text-center">
            <h2>Why Choose Aria Academy</h2>
          </div>
          <div className="grid-3">
            {[
              { title: 'World-Class Instructors', desc: 'Learn directly from Grammy-winning artists and conservatory professors.' },
              { title: 'Flexible Schedule', desc: 'Access pre-recorded masterclasses or book live 1-on-1 sessions at your timezone.' },
              { title: 'Global Certification', desc: 'Earn internationally recognized certificates upon course completion.' }
            ].map((feature, idx) => (
              <div key={idx} className="feature-card">
                <CheckCircle size={32} className="feature-icon" />
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="testimonials container">
        <div className="section-header text-center">
          <h2>What Our Students Say</h2>
        </div>
        <div className="grid-2">
          {[
            { text: "The quality of instruction is unmatched. It feels like you're in the room with the masters. My piano skills improved drastically in just 3 months.", name: "James L.", country: "UK" },
            { text: "I love the flexibility. Being able to watch the lessons and then get personalized feedback during live sessions is the perfect combination.", name: "Maria S.", country: "Spain" }
          ].map((review, idx) => (
            <div key={idx} className="testimonial-card glass-card">
              <div className="stars">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#D4AF37" color="#D4AF37" />)}
              </div>
              <p className="testimonial-text">"{review.text}"</p>
              <div className="testimonial-author">
                <div className="avatar"></div>
                <div>
                  <h4>{review.name}</h4>
                  <span>{review.country}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq container">
        <div className="section-header text-center">
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="faq-list">
          {[
            { q: "Do I need prior musical experience?", a: "Not at all. We have courses tailored for complete beginners up to advanced professionals." },
            { q: "How do live 1-on-1 sessions work?", a: "You can book sessions directly through the student dashboard based on your timezone and the instructor's availability." },
            { q: "Are the certificates globally recognized?", a: "Yes, our certification programs are accredited by leading international music boards." }
          ].map((faq, idx) => (
            <div key={idx} className="faq-item glass">
              <h4>{faq.q}</h4>
              <p>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

// A simple SVG placeholder for the hero image to give a premium feel without needing an actual image file
function MusicHeroPlaceholder() {
  return (
    <svg viewBox="0 0 400 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: '#6b46c1', stopOpacity: 0.8}} />
          <stop offset="100%" style={{stopColor: '#0A0F1A', stopOpacity: 1}} />
        </linearGradient>
      </defs>
      <rect width="400" height="400" fill="url(#grad1)" rx="24" />
      <circle cx="200" cy="200" r="120" fill="none" stroke="rgba(212, 175, 55, 0.3)" strokeWidth="2" />
      <circle cx="200" cy="200" r="140" fill="none" stroke="rgba(212, 175, 55, 0.1)" strokeWidth="1" />
      <path d="M185 150 L185 250 L250 200 Z" fill="#D4AF37" />
    </svg>
  );
}
