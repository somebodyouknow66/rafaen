import Reveal from './Reveal';
import styles from '../modules/FullBleed.module.css';

export default function FullBleed() {
  return (
    <div className={styles.fullBleed}>
      <img src="https://picsum.photos/seed/raafen-wide-dark/1920/800" alt="" />
      <div className={styles.fullBleedOverlay} />
      <div className={styles.fullBleedText}>
        <Reveal direction="scale" className={`${styles.fullBleedWord} gs gs-slow`}>
          RAAFÉN
        </Reveal>
        <div className={styles.fullBleedRule} />
        <Reveal className={styles.fullBleedSub}>
          Maison de Parfum · Paris
        </Reveal>
      </div>
    </div>
  );
};