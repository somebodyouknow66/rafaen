import Reveal from './Reveal';

export default function FullBleed() {
  return (
    <div className="full-bleed">
      <img src="https://picsum.photos/seed/raafen-wide-dark/1920/800" alt=""/>
      <div className="full-bleed-overlay"/>
      <div className="full-bleed-text">
        <Reveal direction="scale" className="full-bleed-word gs gs-slow">RAAFÉN</Reveal>
        <div className="full-bleed-rule"/>
        <Reveal className="full-bleed-sub">Maison de Parfum · Paris</Reveal>
      </div>
    </div>
  );
}
