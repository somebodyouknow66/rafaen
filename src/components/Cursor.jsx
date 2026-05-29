import { useEffect, useRef } from 'react';

export default function Cursor({ enabled = true }) {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const pos     = useRef({ mx: 0, my: 0, rx: 0, ry: 0 });
  const rafRef  = useRef(null);

  useEffect(() => {
    if (!enabled) return;
    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const onMove = (e) => {
      pos.current.mx = e.clientX;
      pos.current.my = e.clientY;
      dot.style.left = e.clientX + 'px';
      dot.style.top  = e.clientY + 'px';
    };
    document.addEventListener('mousemove', onMove);

    const anim = () => {
      const p = pos.current;
      p.rx += (p.mx - p.rx) * 0.12;
      p.ry += (p.my - p.ry) * 0.12;
      ring.style.left = p.rx + 'px';
      ring.style.top  = p.ry + 'px';
      rafRef.current = requestAnimationFrame(anim);
    };
    rafRef.current = requestAnimationFrame(anim);

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [enabled]);

  if (!enabled) return null;
  return (
    <>
      <div id="cursor-dot"  ref={dotRef}  />
      <div id="cursor-ring" ref={ringRef} />
    </>
  );
}
