import { useState } from 'react';
import Reveal from './Reveal';
import { PRODUCTS } from '../data';

const TWO_PRODUCTS = PRODUCTS.slice(0, 2);

function ProductCard({ product, onAddToCart, index }) {
  const [wished, setWished] = useState(false);
  const img = `https://picsum.photos/seed/${product.seed}/800/1000`;
  const thumbImg = `https://picsum.photos/seed/${product.seed}/150/200`;

  return (
    <Reveal delay={index * 0.15}>
      <div className="pc2-card">
        {product.badge && (
          <span className={`pc2-badge ${product.badge === 'Bestseller' ? 'badge-best' : 'badge-ltd'}`}>
            {product.badge}
          </span>
        )}

        {/* Image */}
        <div className="pc2-img-wrap">
          <img src={img} alt={product.name} className="pc2-img" />
          <div className="pc2-img-overlay" />

          {/* Hover CTA over image */}
          <div className="pc2-hover-cta">
            <button
              className="pc2-atc-btn"
              onClick={() => onAddToCart(product.name, product.price, thumbImg)}
            >
              Add to Collection · ${product.price}
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="pc2-info">
          <div className="pc2-meta">
            <span className="pc2-type">{product.type}</span>
            <button
              className={`pc2-wish${wished ? ' wished' : ''}`}
              onClick={() => setWished(w => !w)}
              aria-label="Wishlist"
            >
              {wished ? '♥' : '♡'}
            </button>
          </div>

          <div className="pc2-name">{product.name}</div>
          <div className="pc2-notes">{product.notes}</div>

          <div className="pc2-footer">
            <span className="pc2-price">${product.price}</span>
            <div className="pc2-stars">
              {product.stars.map((on, i) => (
                <span key={i} className={`star${on ? ' on' : ''}`}>★</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Collections({ onAddToCart }) {
  return (
    <section id="collections" className="section pc2-section">

      {/* Section header */}
      <div className="container">
        <Reveal>
          <div className="pc2-header">
            <span className="tag">Signature Collection</span>
            <h2 className="pc2-title">Crafted for<br />the few.</h2>
            <p className="pc2-subtitle">
              Two fragrances. Two worlds.<br />Each one a statement.
            </p>
            <div className="pc2-header-line" />
          </div>
        </Reveal>

        {/* Two-product grid */}
        <div className="pc2-grid">
          {TWO_PRODUCTS.map((p, i) => (
            <ProductCard
              key={p.id}
              product={p}
              onAddToCart={onAddToCart}
              index={i}
            />
          ))}
        </div>

        {/* Bottom strip */}
        <Reveal delay={0.35}>
          <div className="pc2-bottom">
            <div className="pc2-bottom-line" />
            <span className="pc2-bottom-text">More fragrances arriving — 2025</span>
            <div className="pc2-bottom-line" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}