import { useState, useEffect, useCallback, useRef } from 'react';

/* ── THEME ── */
export function useTheme() {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('raafen-theme') || 'dark'; } catch { return 'dark'; }
  });

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    try { localStorage.setItem('raafen-theme', theme); } catch {}
  }, [theme]);

  const toggle = useCallback(() => setTheme(t => t === 'light' ? 'dark' : 'light'), []);
  return { theme, toggle };
}

/* ── CART ── */
export function useCart() {
  const [cart, setCart] = useState([]);

  const add = useCallback((name, price, img) => {
    setCart(prev => {
      const existing = prev.find(i => i.name === name);
      if (existing) return prev.map(i => i.name === name ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { name, price, img, qty: 1 }];
    });
  }, []);

  const remove = useCallback((name) => {
    setCart(prev => prev.filter(i => i.name !== name));
  }, []);

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const count = cart.reduce((s, i) => s + i.qty, 0);

  return { cart, add, remove, total, count };
}

/* ── TOAST ── */
export function useToast() {
  const [msg, setMsg] = useState('');
  const [visible, setVisible] = useState(false);
  const timerRef = useRef(null);

  const show = useCallback((message) => {
    setMsg(message);
    setVisible(true);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setVisible(false), 3500);
  }, []);

  return { msg, visible, show };
}

/* ── NAV SCROLL ── */
export function useNavScroll() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);
  return scrolled;
}

/* ── INTERSECTION OBSERVER REVEAL ── */
export function useReveal(ref, options = {}) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); obs.unobserve(entry.target); }
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px', ...options });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, options]);
  return visible;
}
