import styles from '../modules/Marquee.module.css';

export default function Marquee({ items, dot = '✦', reverse = false }) {
  const doubled = [...items, ...items, ...items, ...items];

  return (
    <div className={`${styles.section} ${reverse ? styles.reverse : ''}`}>
      <div className={styles.track}>
        {doubled.map((item, i) => (
          <span key={i}>
            <span className={styles.item}>{item}</span>
            <span className={styles.dot}>{dot}</span>
          </span>
        ))}
      </div>
    </div>
  );
};