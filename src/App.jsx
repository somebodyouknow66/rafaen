import './styles.css';
import { useState, useCallback } from 'react';
import { useCart, useTheme, useToast } from './hooks';

import Cursor        from './components/Cursor';
import Toast         from './components/Toast';
import Nav           from './components/Nav';
import CartDrawer    from './components/CartDrawer';
import Hero          from './components/Hero';
import Marquee       from './components/Marquee';
import Story         from './components/Story';
import FullBleed     from './components/FullBleed';
import Collections   from './components/Collections';
import Philosophy    from './components/Philosophy';
import Gallery       from './components/Gallery';
import ScentFinder   from './components/ScentFinder';
import Testimonials  from './components/Testimonials';
import Newsletter    from './components/Newsletter';
import Contact       from './components/Contact';
import Footer        from './components/Footer';

import { MARQUEE_1, MARQUEE_2 } from './data';

export default function App() {
  const { theme, toggle: toggleTheme } = useTheme();
  const { cart, add, remove, total, count } = useCart();
  const { msg, visible, show: showToast } = useToast();
  const [cartOpen, setCartOpen] = useState(false);

  const handleAddToCart = useCallback((name, price, img) => {
    add(name, price, img);
    setCartOpen(true);
    showToast(`✦ ${name} added to your collection`);
  }, [add, showToast]);

  return (
    <>
      <Cursor />

      {/* Static ambient blobs — no animation for performance */}
      <div className="blob" style={{ width:700,height:700,top:'-15%',left:'-12%',background:'radial-gradient(circle,rgba(139,105,20,0.12),transparent 70%)',opacity:0.7 }}/>
      <div className="blob" style={{ width:550,height:550,bottom:'-10%',right:'-10%',background:'radial-gradient(circle,rgba(180,90,40,0.09),transparent 70%)' }}/>
      <div className="blob" style={{ width:400,height:400,top:'45%',left:'35%',background:'radial-gradient(circle,rgba(196,169,110,0.07),transparent 70%)' }}/>

      <Toast msg={msg} visible={visible} />

      <CartDrawer
        cart={cart}
        total={total}
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        onRemove={remove}
      />

      <Nav
        cartCount={count}
        onCartOpen={() => setCartOpen(true)}
        onThemeToggle={toggleTheme}
        theme={theme}
      />

      <main>
        <Hero />
        <Marquee items={MARQUEE_1} dot="✦" />
        <Collections onAddToCart={handleAddToCart} />
        <FullBleed />
        <Philosophy />
        <Gallery />
        <ScentFinder />
        <Testimonials />
        <Newsletter onToast={showToast} />
        <Marquee items={MARQUEE_2} dot="◆" reverse />
        <Contact onToast={showToast} />
      </main>

      <Footer />
    </>
  );
}