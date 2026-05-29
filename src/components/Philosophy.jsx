import Reveal from './Reveal';

const PILLARS = [
  { icon: '♦', name: 'Rarity',       desc: 'Ingredients so rare they exist in handfuls across the earth. RAAFÉN sources only what others cannot. That is our uncompromising standard.' },
  { icon: '✦', name: 'Artistry',     desc: 'Every RAAFÉN composition is a symphony — each note deliberate, each accord irreplaceable, orchestrated by the world\'s most gifted noses.' },
  { icon: '∞', name: 'Timelessness', desc: 'RAAFÉN does not follow trends. We create legacies. Fragrances that endure decades and become part of your mythology.' },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="section philosophy-section">
      <div className="container">
        <Reveal direction="scale" className="philosophy-quote-wrap">
          <div className="quote-mark">"</div>
          <blockquote className="philosophy-quote">
            A fragrance should not merely <em className="gs gs-slow">exist</em> — it should <em className="gs gs-slow">announce</em> you before you enter the room.
          </blockquote>
          <div className="gd" style={{ width:80, margin:'0 auto 16px' }}/>
          <cite className="philosophy-attribution">— The RAAFÉN Philosophy</cite>
        </Reveal>
      </div>
      <div className="pillars-grid">
        {PILLARS.map((p, i) => (
          <Reveal key={p.name} delay={(i+1)*0.1}>
            <div className="pillar">
              <div className="pillar-icon">{p.icon}</div>
              <div className="pillar-name">{p.name}</div>
              <p className="pillar-desc">{p.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
