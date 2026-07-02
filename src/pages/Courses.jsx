import { Link } from 'react-router-dom';
import { Search, Filter, Clock, ArrowRight } from 'lucide-react';
import '../pages/Home.css'; // Reusing home styles for cards

export default function Courses() {
  const courses = [
    { title: 'Classical Piano Mastery', instructor: 'Elena Rostova', level: 'Advanced', price: '$199', tag: 'Piano' },
    { title: 'Modern Vocal Techniques', instructor: 'Marcus Chen', level: 'Intermediate', price: '$149', tag: 'Vocal' },
    { title: 'Acoustic Guitar Fundamentals', instructor: 'Sarah Jenkins', level: 'Beginner', price: '$99', tag: 'Guitar' },
    { title: 'Jazz Keyboard Basics', instructor: 'David Wright', level: 'Beginner', price: '$120', tag: 'Keyboard' },
    { title: 'Violin Concertos', instructor: 'Anna Smith', level: 'Advanced', price: '$250', tag: 'Violin' },
    { title: 'Kids Music Foundation', instructor: 'Emily Davis', level: 'Beginner', price: '$80', tag: 'Kids' }
  ];

  return (
    <div className="container" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
      <div className="section-header text-center animate-fade-in">
        <h1 className="hero-title">Our <span className="text-gradient-gold">Courses</span></h1>
        <p>Explore our premium collection of masterclasses and courses.</p>
      </div>

      <div className="glass-card animate-fade-in delay-100" style={{ padding: '1.5rem', marginBottom: '3rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, position: 'relative' }}>
          <Search style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} size={20} />
          <input type="text" placeholder="Search courses..." style={{ width: '100%', padding: '0.8rem 1rem 0.8rem 3rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', color: '#fff' }} />
        </div>
        <button className="btn btn-outline"><Filter size={18} /> Filters</button>
      </div>

      <div className="grid-3 animate-fade-in delay-200">
        {courses.map((course, idx) => (
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
    </div>
  );
}