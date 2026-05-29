export default function CartDrawer({ cart, total, onClose, onRemove, open }) {
  return (
    <>
      <div className={`drawer-overlay ${open ? 'show' : ''}`} onClick={onClose} />
      <div id="cart-drawer" className={open ? 'open' : ''}>
        <div className="drawer-header">
          <span className="drawer-title">Your Selection</span>
          <button className="drawer-close" onClick={onClose}>✕</button>
        </div>
        <div className="cart-items">
          {cart.length === 0 ? (
            <div className="empty-cart">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 01-8 0"/>
              </svg>
              <p>Your collection awaits</p>
            </div>
          ) : (
            cart.map(item => (
              <div className="cart-item" key={item.name}>
                <img src={item.img} alt={item.name} className="cart-item-img" />
                <div className="cart-item-info">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-sub">Qty: {item.qty}</div>
                  <div className="cart-item-price">${(item.price * item.qty).toLocaleString()}</div>
                  <button className="cart-item-remove" onClick={() => onRemove(item.name)}>Remove</button>
                </div>
              </div>
            ))
          )}
        </div>
        {cart.length > 0 && (
          <div className="drawer-footer">
            <div className="cart-total">
              <span className="cart-total-label">Total</span>
              <span className="cart-total-amount">${total.toLocaleString()}</span>
            </div>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        )}
      </div>
    </>
  );
}
