import { FOOTER_LINKS } from '../data';

export default function Footer() {
  const scrollTo = (e, href) => {
    e.preventDefault();
    if (href === '#') return;
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo gs gs-slow">RAAFÉN</span>
            <span className="footer-tagline">Beyond The Ordinary</span>
            <p className="footer-brand-text">A maison built on the belief that true luxury is felt, not worn. RAAFÉN exists for those who understand that a fragrance is not just a scent — it is a declaration.</p>
          </div>
          <div>
            <div className="footer-col-title">Collection</div>
            <ul className="footer-links">
              {FOOTER_LINKS.collection.map(name => (
                <li key={name}><a href="#" className="footer-link">{name}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Maison</div>
            <ul className="footer-links">
              {FOOTER_LINKS.maison.map(({ label, href }) => (
                <li key={label}><a href={href} className="footer-link" onClick={e => scrollTo(e, href)}>{label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Support</div>
            <ul className="footer-links">
              {FOOTER_LINKS.support.map(({ label, href }) => (
                <li key={label}><a href={href} className="footer-link" onClick={e => scrollTo(e, href)}>{label}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-copy">© 2025 RAAFÉN · Maison de Parfum · All rights reserved</span>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
