import { useState } from 'react';
import Reveal from './Reveal';
import { SCENT_MAP } from '../data';

export default function ScentFinder() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="section finder-section" id="scent-finder-section">
      <div className="container">
        <Reveal className="finder-inner">
          <span className="tag">Personalized for You</span>
          <h2 className="section-title gs" style={{ marginTop:12, marginBottom:8 }}>Find Your Scent</h2>
          <p className="section-sub">What draws you?</p>
          <div className="finder-cards" id="finder-cards">
            {Object.entries(SCENT_MAP).map(([key, s]) => (
              <div
                key={key}
                className={`finder-card${selected === key ? ' selected' : ''}`}
                onClick={() => setSelected(key)}
              >
                <div className="finder-icon">{s.emoji}</div>
                <div className="finder-label">{s.label}</div>
              </div>
            ))}
          </div>
          {selected && (
            <div className="finder-result show">
              <div className="tag">Your RAAFÉN Match</div>
              <div className="finder-result-name">{SCENT_MAP[selected].name}</div>
              <div className="finder-result-desc">{SCENT_MAP[selected].desc}</div>
              <div className="finder-btn">
                <a href="#collections" className="btn-primary" style={{ marginTop:20, display:'inline-block' }}
                  onClick={e => { e.preventDefault(); document.querySelector('#collections')?.scrollIntoView({ behavior:'smooth' }); }}>
                  Discover It
                </a>
              </div>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
