import { BookOpen, Award, TrendingUp, PlayCircle } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="container" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
      <div className="section-header animate-fade-in">
        <h1 className="hero-title">Student <span className="text-gradient-gold">Dashboard</span></h1>
        <p>Welcome back! Pick up where you left off.</p>
      </div>

      <div className="grid-3 animate-fade-in delay-100" style={{ marginBottom: '3rem' }}>
        <div className="glass-card" style={{ padding: '2rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ padding: '1rem', background: 'rgba(212,175,55,0.1)', borderRadius: '50%' }}>
            <BookOpen size={32} color="var(--color-primary)" />
          </div>
          <div>
            <h3 style={{ fontSize: '2rem', color: '#fff', marginBottom: '0.25rem' }}>3</h3>
            <p style={{ color: 'var(--color-text-muted)' }}>Active Courses</p>
          </div>
        </div>
        
        <div className="glass-card" style={{ padding: '2rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ padding: '1rem', background: 'rgba(107, 70, 193, 0.2)', borderRadius: '50%' }}>
            <TrendingUp size={32} color="#9f7aea" />
          </div>
          <div>
            <h3 style={{ fontSize: '2rem', color: '#fff', marginBottom: '0.25rem' }}>14</h3>
            <p style={{ color: 'var(--color-text-muted)' }}>Hours Completed</p>
          </div>
        </div>

        <div className="glass-card" style={{ padding: '2rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ padding: '1rem', background: 'rgba(212,175,55,0.1)', borderRadius: '50%' }}>
            <Award size={32} color="var(--color-primary)" />
          </div>
          <div>
            <h3 style={{ fontSize: '2rem', color: '#fff', marginBottom: '0.25rem' }}>1</h3>
            <p style={{ color: 'var(--color-text-muted)' }}>Certificates Earned</p>
          </div>
        </div>
      </div>

      <div className="grid-2 animate-fade-in delay-200">
        <div className="glass-card" style={{ padding: '2rem' }}>
          <h2 style={{ marginBottom: '1.5rem', color: '#fff' }}>Continue Learning</h2>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: 'var(--radius-sm)' }}>
            <div style={{ width: '80px', height: '80px', background: 'linear-gradient(135deg, rgba(107, 70, 193, 0.4), rgba(10, 15, 26, 0.8))', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <PlayCircle color="var(--color-primary)" size={32} />
            </div>
            <div style={{ flex: 1 }}>
              <h4 style={{ color: '#fff', marginBottom: '0.25rem' }}>Classical Piano Mastery</h4>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Module 4: Advanced Scales</p>
              <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ width: '45%', height: '100%', background: 'var(--color-primary)' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card" style={{ padding: '2rem' }}>
           <h2 style={{ marginBottom: '1.5rem', color: '#fff' }}>Recent Achievements</h2>
           <div style={{ textAlign: 'center', padding: '2rem 0' }}>
             <Award size={64} color="var(--color-text-muted)" style={{ margin: '0 auto 1rem', opacity: 0.5 }} />
             <p style={{ color: 'var(--color-text-muted)' }}>Complete a course to earn your next certificate.</p>
             <button className="btn btn-outline" style={{ marginTop: '1rem' }}>Browse Courses</button>
           </div>
        </div>
      </div>
    </div>
  );
}