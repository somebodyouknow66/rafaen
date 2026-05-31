import { useEffect, useRef } from 'react';
import styles from '../modules/Hero.module.css';

export default function Hero() {
  const titleRef = useRef(null);

  useEffect(() => {
    if (!titleRef.current) return;
    titleRef.current.innerHTML = '';
    
    'THRONE'.split('').forEach((l, i) => {
      const s = document.createElement('span');
      s.className = styles.letter;
      s.textContent = l;
      
      const delay = 1.2 + i * 0.1;
      // Pass the delay cleanly as a variable token so the locally-scoped 
      // module animation rule handles it natively
      s.style.setProperty('--delay', `${delay}s`);
      titleRef.current.appendChild(s);
    });
  }, []);

  const scrollTo = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="hero" className={styles.hero}>
      {/* ── Background image wrapper ── */}
      <div className={styles.bg}>
        <img src="/throne.png" alt="" aria-hidden="true" />
      </div>

      {/* ── Base dark overlay & vignettes ── */}
      <div className={styles.bgOverlay} />

      {/* ── Centered content ── */}
      <div className={styles.content}>
        <div className={styles.eyebrow}>
          Throning &nbsp;·&nbsp; Mirpurkhas &nbsp;·&nbsp; Est. 2026
        </div>

        {/* THRONE title container */}
        <h1 ref={titleRef} className={styles.title} />

        {/* Divider line */}
        <div className={styles.line} />

        {/* Subtitle */}
        <p className={styles.tagline}>
          Dark oud · smoked amber · velvety rose
        </p>

        {/* Buttons (Uses shared structural classes from global.css natively) */}
        <div className={styles.btns}>
          <button className="btn-primary" style={{ cursor: 'none' }}>
            Add to Collection · $340
          </button>
          <a
            href="#collections"
            className="btn-secondary"
            onClick={(e) => scrollTo(e, '#collections')}
          >
            Full Collection
          </a>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className={styles.scrollIndicator}>
        <span>Scroll</span>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel} />
        </div>
      </div>
    </section>
  );
};