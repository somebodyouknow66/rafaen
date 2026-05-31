import Reveal from './Reveal';
import styles from '../modules/Philosophy.module.css';

const PILLARS = [
  { icon: '♦', name: 'Rarity',       desc: 'Ingredients so rare they exist in handfuls across the earth. RAAFÉN sources only what others cannot. That is our uncompromising standard.' },
  { icon: '✦', name: 'Artistry',     desc: 'Every RAAFÉN composition is a symphony — each note deliberate, each accord irreplaceable, orchestrated by the world\'s most gifted noses.' },
  { icon: '∞', name: 'Timelessness', desc: 'RAAFÉN does not follow trends. We create legacies. Fragrances that endure decades and become part of your mythology.' },
];

export default function Philosophy() {
  return (
    /* We include 'section' globally and map the rest locally via CSS modules */
    <section id="philosophy" className={`${styles.section} section`}>
      <div className="container">
        
        {/* Quote Layout Block Wrapper */}
        <Reveal direction="scale" className={styles.quoteWrap}>
          <div className={styles.quoteMark}>"</div>
          <blockquote className={styles.quote}>
            A fragrance should not merely <em>exist</em> — it should <em>announce</em> you before you enter the room.
          </blockquote>
          <div className="gd" style={{ width: 80, margin: '0 auto 16px' }} />
          <cite className={styles.attribution}>— The RAAFÉN Philosophy</cite>
        </Reveal>

      </div>

      {/* Grid Layout Container */}
      <div className={styles.pillarsGrid}>
        {PILLARS.map((p, i) => (
          <Reveal key={p.name} delay={(i + 1) * 0.1}>
            <div className={styles.pillar}>
              <div className={styles.pillarIcon}>{p.icon}</div>
              <div className={styles.pillarName}>{p.name}</div>
              <p className={styles.pillarDesc}>{p.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}