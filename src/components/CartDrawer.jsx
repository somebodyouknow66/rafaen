import styles from '../modules/CartDrawer.module.css';

export default function CartDrawer({
  cart,
  total,
  onClose,
  onRemove,
  open,
}) {
  return (
    <>
      <div
        className={`${styles.drawerOverlay} ${open ? styles.show : ''}`}
        onClick={onClose}
      />

      <div
        id="cart-drawer"
        className={`${styles.cartDrawer} ${open ? styles.open : ''}`}
      >
        <div className={styles.drawerHeader}>
          <span className={styles.drawerTitle}>Your Selection</span>

          <button
            className={styles.drawerClose}
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <div className={styles.cartItems}>
          {cart.length === 0 ? (
            <div className={styles.emptyCart}>
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>

              <p>Your collection awaits</p>
            </div>
          ) : (
            cart.map((item) => (
              <div
                className={styles.cartItem}
                key={item.name}
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className={styles.cartItemImg}
                />

                <div className={styles.cartItemInfo}>
                  <div className={styles.cartItemName}>
                    {item.name}
                  </div>

                  <div className={styles.cartItemSub}>
                    Qty: {item.qty}
                  </div>

                  <div className={styles.cartItemPrice}>
                    ${(item.price * item.qty).toLocaleString()}
                  </div>

                  <button
                    className={styles.cartItemRemove}
                    onClick={() => onRemove(item.name)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className={styles.drawerFooter}>
            <div className={styles.cartTotal}>
              <span className={styles.cartTotalLabel}>
                Total
              </span>

              <span className={styles.cartTotalAmount}>
                ${total.toLocaleString()}
              </span>
            </div>

            <button className={styles.checkoutBtn}>
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}