import { useRef } from 'react';
import { useReveal } from '../hooks';

export default function Reveal({ children, direction = '', delay = 0, style = {}, className = '', tag: Tag = 'div' }) {
  const ref = useRef(null);
  const visible = useReveal(ref);

  return (
    <Tag
      ref={ref}
      data-reveal={direction || true}
      className={`${visible ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: delay ? `${delay}s` : undefined, ...style }}
    >
      {children}
    </Tag>
  );
}
