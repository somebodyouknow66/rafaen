import { useEffect, useRef } from 'react';

const HeroCrown = () => (
  <svg width="88" height="88" viewBox="0 0 100 100" fill="none"
    style={{ filter: 'drop-shadow(0 0 30px rgba(196,169,110,0.35))', animation: 'crownFloat 6s ease-in-out infinite' }}>
    <defs>
      <linearGradient id="hcg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%"   stopColor="#8b6914"/>
        <stop offset="30%"  stopColor="#f4dfa0"/>
        <stop offset="60%"  stopColor="#c9a96e"/>
        <stop offset="100%" stopColor="#f4dfa0"/>
      </linearGradient>
    </defs>
    <path d="M12 68L8 28 L28 48 L50 12 L72 48 L92 28 L88 68Z" fill="url(#hcg)"/>
    <rect x="10" y="70" width="80" height="9" rx="2" fill="url(#hcg)"/>
    <circle cx="8"  cy="26" r="6" fill="#f4dfa0"/>
    <circle cx="50" cy="11" r="8" fill="#f4dfa0"/>
    <circle cx="92" cy="26" r="6" fill="#f4dfa0"/>
  </svg>
);

export default function Hero() {
  const titleRef = useRef(null);

  useEffect(() => {
    if (!titleRef.current) return;
    titleRef.current.innerHTML = '';
    'RAAFÉN'.split('').forEach((l, i) => {
      const s = document.createElement('span');
      s.className = 'letter';
      s.textContent = l;
      const delay = 0.8 + i * 0.13;
      s.style.background = 'linear-gradient(105deg,#9a7820 0%,#f6e4a8 25%,#d4af72 50%,#f6e4a8 75%,#9a7820 100%)';
      s.style.backgroundSize = '300% auto';
      s.style.webkitBackgroundClip = 'text';
      s.style.webkitTextFillColor = 'transparent';
      s.style.backgroundClip = 'text';
      s.style.animation = `letterFall 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s forwards, shimmerLetter 4s linear ${delay}s infinite`;
      titleRef.current.appendChild(s);
    });
  }, []);

  const scrollTo = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="hero">
      <div className="hero-bg">
        <div style={{ width:'100%', height:'100%', background:'radial-gradient(ellipse at 30% 40%, #2a1a00 0%, #0e0b18 35%, #05040a 70%, #0a0614 100%)', position:'relative', overflow:'hidden' }}>
          <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse at 70% 60%, rgba(139,105,20,0.18) 0%, transparent 55%)' }}/>
          <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse at 20% 80%, rgba(80,20,60,0.14) 0%, transparent 45%)' }}/>
          {/* Bokeh */}
          <div style={{ position:'absolute', width:3, height:3, background:'rgba(244,223,160,0.6)', borderRadius:'50%', top:'22%', left:'18%', boxShadow:'0 0 8px rgba(244,223,160,0.8)' }}/>
          <div style={{ position:'absolute', width:2, height:2, background:'rgba(196,169,110,0.5)', borderRadius:'50%', top:'38%', left:'72%', boxShadow:'0 0 6px rgba(196,169,110,0.7)' }}/>
          <div style={{ position:'absolute', width:4, height:4, background:'rgba(244,223,160,0.35)', borderRadius:'50%', top:'65%', left:'55%', boxShadow:'0 0 12px rgba(244,223,160,0.5)' }}/>
          <div style={{ position:'absolute', width:2, height:2, background:'rgba(196,169,110,0.4)', borderRadius:'50%', top:'15%', left:'85%', boxShadow:'0 0 6px rgba(196,169,110,0.6)' }}/>
          <div style={{ position:'absolute', width:3, height:3, background:'rgba(244,223,160,0.5)', borderRadius:'50%', top:'78%', left:'25%', boxShadow:'0 0 10px rgba(244,223,160,0.7)' }}/>
        </div>
        <div className="hero-bg-overlay"/>
      </div>

      {/* Orbital rings */}
      <div className="orbital" style={{ width:300, height:300, animationDuration:'60s' }}/>
      <div className="orbital" style={{ width:500, height:500, animationDuration:'90s', animationDirection:'reverse', borderStyle:'dashed' }}/>
      <div className="orbital" style={{ width:720, height:720, animationDuration:'130s' }}/>
      <div className="orbital" style={{ width:980, height:980, animationDuration:'160s', animationDirection:'reverse', opacity:0.5 }}/>

      {/* Pulse rings */}
      <div className="pulse-ring"/>
      <div className="pulse-ring" style={{ animationDelay:'1.4s' }}/>
      <div className="pulse-ring" style={{ animationDelay:'2.8s' }}/>

      <div className="hero-content">
        <div className="hero-eyebrow">Maison de Parfum &nbsp;·&nbsp; Paris &nbsp;·&nbsp; Est. 2019</div>
        <div className="hero-crown"><HeroCrown /></div>
        <h1 className="hero-title" ref={titleRef}/>
        <p className="hero-tagline">Beyond The Ordinary</p>
        <div className="hero-line"/>
        <p style={{ fontFamily:'var(--font-sans)', fontSize:14, fontWeight:300, lineHeight:1.9, color:'rgba(200,190,175,0.45)', maxWidth:540, margin:'0 auto 48px', opacity:0, animation:'fadeUp 1s var(--ease-expo) 3s forwards' }}>
          Where artistry transcends the visible. Each RAAFÉN fragrance is a world — crafted for those who understand that true luxury is felt, not worn.
        </p>
        <div className="hero-btns">
          <a href="#collections" className="btn-primary"  onClick={e => scrollTo(e,'#collections')}>Explore Collection</a>
          <a href="#story"       className="btn-secondary" onClick={e => scrollTo(e,'#story')}>Our Story</a>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-mouse"><div className="scroll-wheel"/></div>
      </div>
    </section>
  );
}
