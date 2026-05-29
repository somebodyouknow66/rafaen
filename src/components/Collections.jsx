import { useState } from 'react';
import Reveal from './Reveal';
import { PRODUCTS } from '../data';

function StarRating({ stars }) {
  return (
    <div className="product-rating">
      {stars.map((on, i) => <span key={i} className={`star${on ? ' on' : ''}`}>★</span>)}
    </div>
  );
}

function ProductCard({ product, onAddToCart, delay }) {
  const [wished, setWished] = useState(false);
  const img = `https://picsum.photos/seed/${product.seed}/600/720`;
  const thumbImg = `https://picsum.photos/seed/${product.seed}/150/200`;

  const badgeClass = product.badge === 'Bestseller' ? 'badge-best' : 'badge-ltd';

  return (
    <Reveal delay={delay}>
      <div className="product-card">
        {product.badge && <span className={`product-badge ${badgeClass}`}>{product.badge}</span>}
        <div className="product-img-wrap">
          <img src={img} alt={product.name} className="product-img"/>
          <div className="product-overlay"/>
          <div className="product-actions">
            <button className="product-atc" onClick={() => onAddToCart(product.name, product.price, thumbImg)}>Add to Cart</button>
            <button className="product-wish" onClick={() => setWished(w => !w)}>{wished ? '♥' : '♡'}</button>
          </div>
        </div>
        <div className="product-info">
          <div className="product-type">{product.type}</div>
          <div className="product-name">{product.name}</div>
          <div className="product-notes">{product.notes}</div>
          <div className="product-footer">
            <span className="product-price gs">${product.price}</span>
            <StarRating stars={product.stars}/>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Collections({ onAddToCart }) {
  const scrollTo = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="collections" className="section">
      <div className="container">
        <div className="collection-intro">
          <Reveal direction="left" className="collection-intro-text">
            <span className="tag">Signature Collection</span>
            <h2 className="section-title gs gs-slow" style={{ marginTop:12 }}>The Six</h2>
            <p className="section-sub">Six worlds. Six stories. One house.</p>
          </Reveal>
          <Reveal direction="right" className="collection-intro-link">
            <a href="#" className="story-cta">
              <span className="story-cta-line"/>
              View All
            </a>
          </Reveal>
        </div>
        <div className="products-grid">
          {PRODUCTS.map((p, i) => (
            <ProductCard
              key={p.id}
              product={p}
              onAddToCart={onAddToCart}
              delay={[0.05,0.12,0.19,0.08,0.16,0.24][i]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
