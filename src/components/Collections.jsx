import { useState } from 'react';
import Reveal from './Reveal';
import { PRODUCTS } from '../data';
import styles from '../modules/Collections.module.css';

const TWO_PRODUCTS = PRODUCTS.slice(0, 2);

function ProductCard({ product, onAddToCart, index }) {
  const [wished, setWished] = useState(false);
  const img = product.img || `https://picsum.photos/seed/${product.seed}/800/1000`;
  const thumbImg = product.img || `https://picsum.photos/seed/${product.seed}/150/200`;

  return (
    <Reveal delay={index * 0.15}>
      <div className={styles.card}>
        {product.badge && (
          <span
            className={`${styles.badge} ${
              product.badge === 'Bestseller'
                ? styles.badgeBest
                : styles.badgeLtd
            }`}
          >
            {product.badge}
          </span>
        )}

        {/* Image */}
        <div className={styles.imgWrap}>
          <img
            src={img}
            alt={product.name}
            className={styles.img}
          />

          <div className={styles.imgOverlay} />

          {/* Hover CTA over image */}
          <div className={styles.hoverCta}>
            <button
              className={styles.atcBtn}
              onClick={() =>
                onAddToCart(product.name, product.price, thumbImg)
              }
            >
              Add to Collection · ${product.price}
            </button>
          </div>
        </div>

        {/* Info */}
        <div className={styles.info}>
          <div className={styles.meta}>
            <span className={styles.type}>
              {product.type}
            </span>

            <button
              className={`${styles.wish} ${
                wished ? styles.wished : ''
              }`}
              onClick={() => setWished((w) => !w)}
              aria-label="Wishlist"
            >
              {wished ? '♥' : '♡'}
            </button>
          </div>

          <div className={styles.name}>
            {product.name}
          </div>

          <div className={styles.notes}>
            {product.notes}
          </div>

          <div className={styles.footer}>
            <span className={styles.price}>
              ${product.price}
            </span>

            <div className={styles.stars}>
              {product.stars.map((on, i) => (
                <span
                  key={i}
                  className={`${styles.star} ${
                    on ? styles.on : ''
                  }`}
                >
                  ★
                </span>
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
    <section
      id="collections"
      className={`section ${styles.section}`}
    >
      {/* Section header */}
      <div className="container">
        <Reveal>
          <div className={styles.header}>
            <span className="tag">
              Signature Collection
            </span>

            <h2 className={styles.title}>
              Crafted for
              <br />
              the few.
            </h2>

            <p className={styles.subtitle}>
              Two fragrances. Two worlds.
              <br />
              Each one a statement.
            </p>

            <div className={styles.headerLine} />
          </div>
        </Reveal>

        {/* Two-product grid */}
        <div className={styles.grid}>
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
          <div className={styles.bottom}>
            <div className={styles.bottomLine} />

            <span className={styles.bottomText}>
              More fragrances arriving — 2025
            </span>

            <div className={styles.bottomLine} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}