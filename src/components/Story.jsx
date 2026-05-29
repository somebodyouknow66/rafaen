import Reveal from './Reveal';

export default function Story() {
  const scrollTo = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="story" className="section">
      <div className="container">
        <div className="story-grid">
          <Reveal direction="left" className="story-image-wrap">
            <div className="story-frame"/>
            <img src="https://picsum.photos/seed/raafen-atelier-2/700/900" alt="RAAFÉN Atelier" className="story-main-img"/>
            <img src="https://picsum.photos/seed/raafen-spice/300/400" alt="" className="story-accent"/>
            <div className="story-badge">
              <div className="story-badge-inner">
                <div className="story-badge-num gs">6</div>
                <div className="story-badge-text">Years of<br/>Mastery</div>
              </div>
            </div>
          </Reveal>
          <Reveal direction="right">
            <div className="story-intro">The RAAFÉN Story</div>
            <h2 className="story-heading gs gs-slow">Essence<br/>of Rare</h2>
            <div className="gd" style={{ width:80, margin:'24px 0' }}/>
            <p className="story-body">RAAFÉN was born from a singular obsession — to create fragrances that do not merely scent, but transform. To craft not what is beautiful, but what is unforgettable.</p>
            <p className="story-body">From the lavender terraces of Haute-Provence to the sacred oud forests of Borneo, our master perfumers journey across continents in pursuit of a single perfect note. Every bottle holds not just a fragrance — but a story. Your story, amplified.</p>
            <div className="story-stats">
              {[['50+','Rare Ingredients'],['12','Master Perfumers'],['6','Continents']].map(([n,l]) => (
                <div className="stat-item" key={l}>
                  <div className="stat-num gs">{n}</div>
                  <div className="stat-label">{l}</div>
                </div>
              ))}
            </div>
            <a href="#collections" className="story-cta" onClick={e => scrollTo(e,'#collections')}>
              <span className="story-cta-line"/>
              Discover the Collection
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
