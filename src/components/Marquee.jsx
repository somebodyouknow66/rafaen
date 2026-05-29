export default function Marquee({ items, dot = '✦', reverse = false }) {
  const doubled = [...items, ...items, ...items, ...items];
  return (
    <div className={`marquee-section${reverse ? ' marquee-r' : ''}`}>
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i}>
            <span className="marquee-item">{item}</span>
            <span className="marquee-dot">{dot}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
