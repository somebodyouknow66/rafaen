import { useEffect, useRef } from 'react';

export default function Cursor({ enabled = true }) {
  const cursorRef = useRef(null);

  useEffect(() => {
    if (!enabled) return;
    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMove = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top  = e.clientY + 'px';
    };

    document.addEventListener('mousemove', onMove);
    return () => document.removeEventListener('mousemove', onMove);
  }, [enabled]);

  if (!enabled) return null;
  return <div id="cursor-dot" ref={cursorRef} />;
}
