import { GALLERY_SEEDS } from '../data';

export default function Gallery() {
  return (
    <section className="section" id="gallery-section" style={{ padding: 0 }}>
      <div className="gallery-grid">
        {GALLERY_SEEDS.map(seed => (
          <div className="gallery-item" key={seed}>
            <img src={`https://picsum.photos/seed/${seed}/800/900`} alt=""/>
            <div className="gallery-item-overlay"><div className="gallery-plus">+</div></div>
          </div>
        ))}
      </div>
    </section>
  );
}
