import { useState } from 'react';
import { useNavScroll } from '../hooks';
import { NAV_LINKS } from '../data';
import styles from '../modules/Nav.module.css';

const CrownSVG = ({ size = 26 }) => (
  <svg
    className="crown-icon"
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    style={{ flexShrink: 0, overflow: 'visible' }}
  >
    <defs>
      <linearGradient id="cg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b6914" />
        <stop offset="50%" stopColor="#f4dfa0" />
        <stop offset="100%" stopColor="#c9a96e" />
      </linearGradient>
    </defs>
    <path d="M12 68L8 28 L28 48 L50 12 L72 48 L92 28 L88 68Z" fill="url(#cg)" />
    <rect x="10" y="70" width="80" height="9" rx="2" fill="url(#cg)" />
    <circle cx="8" cy="26" r="5" fill="#f4dfa0" />
    <circle cx="50" cy="11" r="7" fill="#f4dfa0" />
    <circle cx="92" cy="26" r="5" fill="#f4dfa0" />
  </svg>
);

export default function Nav({ cartCount, onCartOpen, onThemeToggle, theme }) {
  const scrolled = useNavScroll();
  const [mmOpen, setMmOpen] = useState(false);

  const scrollTo = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMmOpen(false);
  };

  return (
    <>
      {/* ── Main Navigation Bar ── */}
      <nav
        id="nav"
        className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}
      >
        <a href="#hero" className={styles.logo} onClick={(e) => scrollTo(e, '#hero')}>
          <CrownSVG />
          <span style={{ position: 'relative', zIndex: 1 }}>RAAFÉN</span>
        </a>

        <div className={styles.links}>
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={styles.link}
              onClick={(e) => scrollTo(e, l.href)}
            >
              {l.text}
            </a>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {/* Theme Toggle Controller */}
          <button
            id="theme-toggle"
            className={styles.themeToggle}
            onClick={onThemeToggle}
            aria-label="Toggle theme"
          >
            <span className={styles.sun}>☀</span>
            <span className={styles.moon}>☿</span>
          </button>

          {/* Bag / Cart Icon Button */}
          <button className={styles.cartBtn} onClick={onCartOpen} aria-label="Cart">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            <span className={`${styles.cartCount} ${cartCount > 0 ? styles.show : ''}`}>
              {cartCount}
            </span>
          </button>

          {/* Desktop Call To Action */}
          <a
            href="#collections"
            className={styles.link}
            onClick={(e) => scrollTo(e, '#collections')}
          >
            <span>Explore</span>
          </a>

          {/* Mobile Hamburguer Menu Trigger */}
          <button
            className={styles.menuBtn}
            id="menu-btn"
            aria-label="Menu"
            onClick={() => setMmOpen(true)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </nav>

      {/* ── Fullscreen Overlay Mobile Drawer Menu ── */}
      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${mmOpen ? styles.open : ''}`}
      >
        <button className={styles.mmClose} onClick={() => setMmOpen(false)}>
          ✕
        </button>
        <a href="#hero" className={styles.mmLink} onClick={(e) => scrollTo(e, '#hero')}>
          RAAFÉN
        </a>
        <div className={styles.gd} style={{ width: 60 }} />
        
        {NAV_LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className={styles.mmLink}
            onClick={(e) => scrollTo(e, l.href)}
          >
            {l.text}
          </a>
        ))}
      </div>
    </>
  );
};