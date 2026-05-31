import { FOOTER_LINKS } from '../data';
import styles from '../modules/Footer.module.css';

export default function Footer() {
  const scrollTo = (e, href) => {
    e.preventDefault();
    if (href === '#') return;
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <span className={`${styles.logo} gs gs-slow`}>RAAFÉN</span>
            <span className={styles.tagline}>Beyond The Ordinary</span>
            <p>
              A maison built on the belief that true luxury is felt, not worn.
              RAAFÉN exists for those who understand that a fragrance is not
              just a scent — it is a declaration.
            </p>
          </div>

          <div>
            <div className={styles.colTitle}>Collection</div>
            <ul className={styles.links}>
              {FOOTER_LINKS.collection.map((name) => (
                <li key={name}>
                  <a href="#" className={styles.link}>
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className={styles.colTitle}>Maison</div>
            <ul className={styles.links}>
              {FOOTER_LINKS.maison.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className={styles.link}
                    onClick={(e) => scrollTo(e, href)}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className={styles.colTitle}>Support</div>
            <ul className={styles.links}>
              {FOOTER_LINKS.support.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className={styles.link}
                    onClick={(e) => scrollTo(e, href)}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <span className={styles.copy}>
            © 2025 RAAFÉN · Maison de Parfum · All rights reserved
          </span>
          <div className={styles.legal}>
            <a href="#" className={styles.legalLink}>
              Privacy Policy
            </a>
            <a href="#" className={styles.legalLink}>
              Terms of Use
            </a>
            <a href="#" className={styles.legalLink}>
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}