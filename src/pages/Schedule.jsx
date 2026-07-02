import { Calendar, Clock, Video } from 'lucide-react';

export default function Schedule() {
  const sessions = [
    { title: 'Live 1-on-1 Piano Coaching', time: '10:00 AM - 11:00 AM EST', instructor: 'Elena Rostova', date: 'Oct 15, 2026', status: 'Upcoming' },
    { title: 'Vocal Warmups Workshop', time: '2:00 PM - 3:30 PM EST', instructor: 'Marcus Chen', date: 'Oct 16, 2026', status: 'Upcoming' },
    { title: 'Guitar Theory Q&A', time: '11:00 AM - 12:00 PM EST', instructor: 'Sarah Jenkins', date: 'Oct 18, 2026', status: 'Upcoming' },
  ];

  return (
    <div className="container" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
      <div className="section-header animate-fade-in">
        <h1 className="hero-title">Class <span className="text-gradient-gold">Schedule</span></h1>
        <p>Manage your upcoming live sessions and workshops.</p>
      </div>

      <div className="grid-2 animate-fade-in delay-100">
        <div className="glass-card" style={{ padding: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <Calendar size={24} color="var(--color-primary)" />
            <h2>Upcoming Sessions</h2>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {sessions.map((session, idx) => (
              <div key={idx} style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '0.25rem' }}>{session.title}</h3>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>with {session.instructor}</p>
                  </div>
                  <span style={{ padding: '0.25rem 0.75rem', background: 'rgba(212,175,55,0.2)', color: 'var(--color-primary)', borderRadius: '20px', fontSize: '0.8rem' }}>
                    {session.status}
                  </span>
                </div>
                
                <div style={{ display: 'flex', gap: '1.5rem', color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Calendar size={16} /> {session.date}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Clock size={16} /> {session.time}</span>
                </div>
                
                <button className="btn btn-outline" style={{ width: '100%' }}>
                  <Video size={16} /> Join Meeting Room
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card" style={{ padding: '2rem', height: 'fit-content' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <Clock size={24} color="var(--color-primary)" />
            <h2>Timezone Settings</h2>
          </div>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>Your schedule is currently displayed in <strong>Eastern Standard Time (EST)</strong>.</p>
          <button className="btn btn-outline">Change Timezone</button>
        </div>
      </div>
    </div>
  );
}