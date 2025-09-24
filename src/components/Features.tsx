const features = [
  { title: 'Text Moderation', desc: 'Automatically identify offensive, harmful, or non-compliant content.' },
  { title: 'Image Moderation', desc: 'Detect inappropriate or explicit visuals to maintain platform safety.' },
  { title: 'Custom Rules', desc: 'Define global standards or tenant-specific moderation policies.' },
  { title: 'Human-in-the-Loop', desc: 'Review flagged content combining AI efficiency with human judgment.' },
  { title: 'Multi-Tenant Support', desc: 'Designed for SaaS platforms and enterprises with configurable tenant rules.' },
];

const Features = () => (
  <section id="features" className="py-20 max-w-7xl mx-auto px-6">
    <h2 style={{ fontSize: '2.25rem', fontWeight: 800, textAlign: 'center', marginBottom: '2.5rem', color: 'var(--text-on-dark)' }}>Features</h2>
    <p style={{ textAlign: 'center', color: 'var(--muted)', maxWidth: '32rem', margin: '0 auto 3rem' }}>
      Powerful moderation tools that combine automated detection with human oversight — built for scale and safety.
    </p>

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
      {features.map(f => (
        <article
          key={f.title}
          style={{
            background: 'var(--card)',
            borderRadius: '1rem',
            padding: '1.5rem',
            boxShadow: '0 10px 25px rgba(2,6,23,0.06)',
            transition: 'transform .14s ease, box-shadow .14s ease',
            color: 'var(--text-on-dark)'
          }}
          onMouseOver={e => {
            (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
            (e.currentTarget as HTMLElement).style.boxShadow = '0 18px 40px rgba(2,6,23,0.09)';
          }}
          onMouseOut={e => {
            (e.currentTarget as HTMLElement).style.transform = '';
            (e.currentTarget as HTMLElement).style.boxShadow = '0 10px 25px rgba(2,6,23,0.06)';
          }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: '3rem', width: '3rem', borderRadius: '0.75rem', background: '#eef2ff', color: 'var(--accent)', marginBottom: '1rem', fontWeight: 700 }}>
            <span>{f.title.split(' ').map(s => s[0]).slice(0,2).join('')}</span>
          </div>
          <h4 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#0f1724' }}>{f.title}</h4>
          <p style={{ marginTop: '0.5rem', color: 'var(--muted)', fontSize: '0.95rem' }}>{f.desc}</p>
        </article>
      ))}
    </div>
  </section>
);

export default Features;
