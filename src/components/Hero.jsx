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
        background: linear-gradient(105deg,#9a7820 0%,#f6e4a8 25%,#d4af72 50%,#f6e4a8 75%,#9a7820 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
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

      {/* ── Full overlay — darkens entire image evenly ── */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'rgba(5,4,10,0.62)',
      }} />

      {/* ── Extra vignette to push center text further ── */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2,
        background: 'radial-gradient(ellipse at center, transparent 30%, rgba(5,4,10,0.55) 100%)',
      }} />

      {/* ── Centered content ── */}
      <div style={{
        position: 'relative', zIndex: 3,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        textAlign: 'center',
        padding: '0 24px',
        width: '100%',
      }}>

        <div style={{
          fontFamily: 'var(--font-sans)', fontSize: 10, fontWeight: 300,
          letterSpacing: '0.5em', textTransform: 'uppercase',
          color: 'rgba(196,169,110,0.8)', marginBottom: 24,
          opacity: 0, animation: 'fadeUp 0.8s var(--ease-expo) 0.6s forwards',
        }}>
          Maison de Parfum &nbsp;·&nbsp; Paris &nbsp;·&nbsp; Est. 2019
        </div>

        <h1 ref={titleRef} className="hero-title" style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(56px, 10vw, 100px)',
          letterSpacing: '0.35em', lineHeight: 1,
          margin: 0,
          textShadow: '0 2px 40px rgba(0,0,0,0.8)',
        }} />

        <div style={{
          width: 100, height: 1,
          background: 'linear-gradient(90deg, transparent, var(--gold-mid), transparent)',
          margin: '20px auto',
          opacity: 0, animation: 'fadeUp 0.8s var(--ease-expo) 2s forwards',
        }} />

        <p style={{
          fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 300,
          letterSpacing: '0.25em', textTransform: 'uppercase',
          color: 'rgba(220,210,195,0.85)',
          marginBottom: 40,
          textShadow: '0 1px 12px rgba(0,0,0,0.9)',
          opacity: 0, animation: 'fadeUp 0.8s var(--ease-expo) 2.2s forwards',
        }}>
          Dark oud · smoked amber · velvety rose
        </p>

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
        left: '50%', transform: 'translateX(-50%)', zIndex: 4,
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