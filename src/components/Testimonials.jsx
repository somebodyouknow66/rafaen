import Reveal from './Reveal';
import { TESTIMONIALS } from '../data';
import styles from '../modules/Testimonials.module.css';

export default function Testimonials() {
  return (
    <section className="section" id="testimonials-section">
      <div className="container">
        
        {/* Section Header Utility Blocks */}
        <Reveal className="section-header">
          <span className="tag">Voices of Distinction</span>
          <div className="section-num" style={{ marginTop: 8 }}>★★★★★</div>
          <h2 className="section-title" style={{ marginTop: -10 }}>
            Those Who <span className="gs">Know</span>
          </h2>
        </Reveal>

        {/* 3-Column Testimonials Layout Grid */}
        <div className={styles.grid}>
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.id} delay={(i + 1) * 0.1}>
              <div className={styles.card}>
                <div className={styles.quoteMark}>"</div>
                <div className={styles.stars}>★★★★★</div>
                <p className={styles.text}>{t.text}</p>
                
                {/* Author Metadata Frame */}
                <div className={styles.author}>
                  <div className={styles.avatar}>{t.initials}</div>
                  <div>
                    <div className={styles.name}>{t.name}</div>
                    <div className={styles.loc}>{t.location}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};