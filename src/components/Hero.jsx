import { useEffect, useRef } from 'react';

export default function Hero() {
  const bgRef    = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    if (!titleRef.current) return;
    titleRef.current.innerHTML = '';
    'THRONE'.split('').forEach((l, i) => {
      const s = document.createElement('span');
      s.className = 'letter';
      s.textContent = l;
      const delay = 1.2 + i * 0.1;
      s.style.cssText = `
        background: linear-gradient(105deg,#fff 0%,#f6e4a8 30%,#d4af72 55%,#f6e4a8 80%,#e8d5a0 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        filter: drop-shadow(0 2px 12px rgba(0,0,0,0.9)) drop-shadow(0 0 40px rgba(0,0,0,0.7));
        animation: letterFall 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s forwards;
      `;
      titleRef.current.appendChild(s);
    });
  }, []);

  const scrollTo = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="hero" style={{ 
      position: 'relative',
      overflow: 'hidden',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>

      {/* ── Background image ── */}
      <img
        ref={bgRef}
        src="/throne.png"
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          width: '100%', height: '100%',
          objectFit: 'cover',
          objectPosition: 'center center',
          zIndex: 0,
        }}
      />

      {/* ── Base dark overlay ── */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'rgba(5,4,10,0.58)',
      }} />

      {/* ── Radial vignette — edges darker ── */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2,
        background: 'radial-gradient(ellipse 70% 70% at center, transparent 20%, rgba(5,4,10,0.65) 100%)',
      }} />

      {/* ── Focused dark pool directly behind the text block ── */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 3,
        background: 'radial-gradient(ellipse 55% 45% at 50% 48%, rgba(5,4,10,0.55) 0%, transparent 100%)',
      }} />

      {/* ── Centered content ── */}
      <div style={{
        position: 'relative', zIndex: 4,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        textAlign: 'center',
        padding: '0 24px',
        width: '100%',
      }}>

        {/* Eyebrow — white tint for legibility */}
        <div style={{
          fontFamily: 'var(--font-sans)', fontSize: 10, fontWeight: 400,
          letterSpacing: '0.5em', textTransform: 'uppercase',
          color: 'rgba(255,245,225,0.82)',
          marginBottom: 24,
          textShadow: '0 1px 8px rgba(0,0,0,0.9)',
          opacity: 0, animation: 'fadeUp 0.8s var(--ease-expo) 0.6s forwards',
        }}>
          Maison de Parfum &nbsp;·&nbsp; Paris &nbsp;·&nbsp; Est. 2019
        </div>

        {/* THRONE title */}
        <h1 ref={titleRef} className="hero-title" style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(56px, 10vw, 100px)',
          letterSpacing: '0.35em', lineHeight: 1,
          margin: 0,
        }} />

        {/* Divider line */}
        <div style={{
          width: 100, height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(255,235,180,0.6), transparent)',
          margin: '22px auto',
          opacity: 0, animation: 'fadeUp 0.8s var(--ease-expo) 2s forwards',
        }} />

        {/* Subtitle — white-leaning for contrast */}
        <p style={{
          fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 400,
          letterSpacing: '0.3em', textTransform: 'uppercase',
          color: 'rgba(255,245,225,0.78)',
          marginBottom: 44,
          textShadow: '0 1px 10px rgba(0,0,0,0.95)',
          opacity: 0, animation: 'fadeUp 0.8s var(--ease-expo) 2.2s forwards',
        }}>
          Dark oud · smoked amber · velvety rose
        </p>

        {/* Buttons */}
        <div style={{
          display: 'flex', gap: 16, justifyContent: 'center',
          alignItems: 'center', flexWrap: 'wrap',
          opacity: 0, animation: 'fadeUp 0.8s var(--ease-expo) 2.5s forwards',
        }}>
          <button className="btn-primary" style={{ cursor: 'none' }}>
            Add to Collection · $340
          </button>
          <a href="#collections" className="btn-secondary"
            onClick={e => scrollTo(e, '#collections')}>
            Full Collection
          </a>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="scroll-indicator" style={{
        position: 'absolute', bottom: 32,
        left: '50%', transform: 'translateX(-50%)', zIndex: 5,
      }}>
        <span>Scroll</span>
        <div className="scroll-mouse"><div className="scroll-wheel" /></div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}