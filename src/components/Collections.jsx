import { useState } from 'react';
import Reveal from './Reveal';
import { PRODUCTS } from '../data';
import styles from '../modules/Collections.module.css';

// ── Replace with your WhatsApp number (country code, no + or spaces) ──
const WHATSAPP_NUMBER = 'YOUR_NUMBER_HERE'; // e.g. 923001234567

const TWO_PRODUCTS = PRODUCTS.slice(0, 2);

function orderOnWhatsApp(productName, price) {
  const msg = `Hi, I'd like to order *${productName}* — $${price}. Please assist me with the purchase.`;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

function ProductCard({ product, index }) {
  const [wished, setWished] = useState(false);
  const img = product.img || `https://picsum.photos/seed/${product.seed}/800/1000`;

  return (
    <Reveal delay={index * 0.15}>
      <div className={styles.card}>
        {product.badge && (
          <span className={`${styles.badge} ${product.badge === 'Bestseller' ? styles.badgeBest : styles.badgeLtd}`}>
            {product.badge}
          </span>
        )}

        <div className={styles.imgWrap}>
          <img src={img} alt={product.name} className={styles.img} />
          <div className={styles.imgOverlay} />
        </div>

        <div className={styles.info}>
          <div className={styles.meta}>
            <span className={styles.type}>{product.type}</span>
            <button
              className={`${styles.wish} ${wished ? styles.wished : ''}`}
              onClick={() => setWished((w) => !w)}
              aria-label="Wishlist"
            >
              {wished ? '♥' : '♡'}
            </button>
          </div>

          <div className={styles.name}>{product.name}</div>
          <div className={styles.notes}>{product.notes}</div>

          <div className={styles.footer}>
            <span className={styles.price}>${product.price}</span>
            <div className={styles.stars}>
              {product.stars.map((on, i) => (
                <span key={i} className={`${styles.star} ${on ? styles.on : ''}`}>★</span>
              ))}
            </div>
          </div>

          <button className={styles.orderBtn} onClick={() => orderOnWhatsApp(product.name, product.price)}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.532 5.857L.057 23.571a.75.75 0 00.921.921l5.714-1.475A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 01-4.96-1.355l-.355-.213-3.693.952.974-3.589-.233-.371A9.712 9.712 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
            </svg>
            Order via WhatsApp
          </button>
        </div>
      </div>
    </Reveal>
  );
}

export default function Collections() {
  return (
    <section id="collections" className={`section ${styles.section}`}>
      <div className="container">
        <Reveal>
          <div className={styles.header}>
            <span className="tag">Signature Collection</span>
            <h2 className={styles.title}>Crafted for<br />the few.</h2>
            <p className={styles.subtitle}>Two fragrances. Two worlds.<br />Each one a statement.</p>
            <div className={styles.headerLine} />
          </div>
        </Reveal>

        <div className={styles.grid}>
          {TWO_PRODUCTS.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>

        <Reveal delay={0.35}>
          <div className={styles.bottom}>
            <div className={styles.bottomLine} />
            <span className={styles.bottomText}>More fragrances arriving — 2025</span>
            <div className={styles.bottomLine} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}