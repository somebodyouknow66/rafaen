import { GALLERY_SEEDS } from '../data';
import styles from '../modules/Gallery.module.css';

export default function Gallery() {
  return (
    <section className="section" id="gallery-section" style={{ padding: 0 }}>
      <div className={styles.grid}>
        {GALLERY_SEEDS.map((seed) => (
          <div className={styles.item} key={seed}>
            <img src={`https://picsum.photos/seed/${seed}/800/900`} alt="" />
            <div className={styles.overlay}>
              <div className={styles.plus}>+</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}