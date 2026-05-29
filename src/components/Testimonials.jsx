import Reveal from './Reveal';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section className="section" id="testimonials-section">
      <div className="container">
        <Reveal className="section-header">
          <span className="tag">Voices of Distinction</span>
          <div className="section-num" style={{ marginTop:8 }}>★★★★★</div>
          <h2 className="section-title" style={{ marginTop:-10 }}>Those Who <span className="gs">Know</span></h2>
        </Reveal>
        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.id} delay={(i+1)*0.1}>
              <div className="testimonial-card">
                <div className="testimonial-quote-mark">"</div>
                <div className="testimonial-stars">★★★★★</div>
                <p className="testimonial-text">{t.text}</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{t.initials}</div>
                  <div>
                    <div className="author-name">{t.name}</div>
                    <div className="author-loc">{t.location}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
