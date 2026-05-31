import { useState } from 'react';
import Reveal from './Reveal';
import styles from '../modules/Newsletter.module.css';

export default function Newsletter({ onToast }) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onToast('✦ Welcome to the RAAFÉN Inner Circle');
    setEmail('');
  };

  return (
    <section className="section">
      {/* ── Background layout elements ── */}
      <div className={styles.bg}>
        <img src="https://picsum.photos/seed/raafen-nl-bg/1920/600" alt="" />
        <div className={styles.bgOverlay} />
      </div>

      <div className="container">
        {/* Pass custom module layouts directly into your Reveal wrapper wrapper wrapper */}
        <Reveal className={styles.inner}>
          {/* Decorative Floating Monogram Emblem */}
          <svg
            width="44"
            height="44"
            viewBox="0 0 100 100"
            fill="none"
            style={{
              marginBottom: 20,
              opacity: 0.6,
              animation: 'crownFloat 5s ease-in-out infinite',
            }}
          >
            <path d="M12 68L8 28 L28 48 L50 12 L72 48 L92 28 L88 68Z" fill="#c9a96e" />
            <rect x="10" y="70" width="80" height="9" rx="2" fill="#c9a96e" />
          </svg>

          {/* Typography elements mapped to module spaces */}
          <h2 className={styles.title}>Inner Circle</h2>
          <p className={styles.sub}>The RAAFÉN Inner Circle</p>
          <p className={styles.desc}>
            Exclusive previews. Limited edition access. Private invitations. The world of RAAFÉN,
            unveiled first to those who truly belong.
          </p>

          {/* Form and Input field maps */}
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="email"
              className={styles.input}
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className={styles.submit}>
              Join RAAFÉN
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
};