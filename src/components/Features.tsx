const features = [
  { title: 'Text Moderation', desc: 'Automatically identify offensive, harmful, or non-compliant content.' },
  { title: 'Image Moderation', desc: 'Detect inappropriate or explicit visuals to maintain platform safety.' },
  { title: 'Custom Rules', desc: 'Define global standards or tenant-specific moderation policies.' },
  { title: 'Human-in-the-Loop', desc: 'Review flagged content combining AI efficiency with human judgment.' },
  { title: 'Multi-Tenant Support', desc: 'Designed for SaaS platforms and enterprises with configurable tenant rules.' },
];

const Features = () => (
  <section id="features" className="py-20 max-w-7xl mx-auto px-6">
    <h2 className="text-4xl font-extrabold text-center mb-10">Features</h2>
    <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">Powerful moderation tools that combine automated detection with human oversight — built for scale and safety.</p>

    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
      {features.map(f => (
        <article key={f.title} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transform hover:-translate-y-1 transition">
          <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-50 text-indigo-600 mb-4">
            {/* simple icon: initials */}
            <span className="font-bold">{f.title.split(' ').map(s => s[0]).slice(0,2).join('')}</span>
          </div>
          <h4 className="text-lg font-semibold text-gray-800">{f.title}</h4>
          <p className="mt-2 text-gray-600 text-sm">{f.desc}</p>
        </article>
      ))}
    </div>
  </section>
);

export default Features;
