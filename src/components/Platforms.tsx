import React from 'react';

const platforms = [
  {
    title: 'WordPress Plugin',
    desc: 'Integrate SENTRAIQ directly into your WordPress site. Automatically moderate posts, comments, and media uploads.',
    link: 'https://github.com/isaac-rnd/sentraiq-wordpress-plugin'
  },
  {
    title: 'Chrome Extension',
    desc: 'Real-time content scanning on the web. Detect offensive or inappropriate content on any webpage.',
    link: 'https://github.com/isaac-rnd/sentraiq-content-moderation-browser-plugin'
  },
  {
    title: 'Python Package',
    desc: 'For developers and enterprises. Integrate SENTRAIQ AI moderation into your applications or pipelines.',
    link: 'https://github.com/isaac-rnd/sentraiq-python-package'
  },
];

const Platforms = () => (
  <section id="platforms" className="platforms">
    <h2>Our Component Offering</h2>
    <p className="lead">Plug into the tools you already use — simple integrations and enterprise-ready SDKs.</p>

    <div className="platforms-grid">
      {platforms.map((p, idx) => (
        <article key={p.title} className="platform-card" aria-labelledby={`plat-${idx}-title`}>
          <div className="platform-avatar" aria-hidden>{p.title.split(' ')[0][0]}</div>

          <h3 id={`plat-${idx}-title`} className="feature-title">{p.title}</h3>
          <div className="feature-desc" style={{fontSize: '0.95rem', color: 'var(--muted)'}}>
            {/* short subtitle based on title */}
            {p.title.includes('WordPress') ? 'CMS integration' : p.title.includes('Chrome') ? 'Browser extension' : 'Developer SDK'}
          </div>

          <ul style={{textAlign: 'left', margin: '0.6rem 0 0.25rem', paddingLeft: '1.1rem', color: '#6b7280', fontSize: '0.95rem'}}>
            {p.title.includes('WordPress') && (
              <>
                <li>Moderates posts, comments and media uploads</li>
                <li>One-click install + API-based enforcement</li>
              </>
            )}

            {p.title.includes('Chrome') && (
              <>
                <li>Real-time page scanning & highlights</li>
                <li>Privacy-first, runs locally in the browser</li>
              </>
            )}

            {p.title.includes('Python') && (
              <>
                <li>pip installable SDK for servers & pipelines</li>
                <li>Batch scanning + async support</li>
              </>
            )}
          </ul>

          <a href={p.link} target="_blank" rel="noreferrer" className="platform-cta" style={{marginTop: '0.6rem'}}>View on GitHub</a>
        </article>
      ))}
    </div>
  </section>
);

export default Platforms;
