import './CartDrawer.css';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartDrawer = () => {
  const { items, isOpen, toggleCart, removeFromCart, clearCart } = useContext(CartContext);

  const total = items.reduce((s, p) => s + (parseInt(String(p.price).replace(/[^0-9]/g, '')) || 0) * (p.qty || 1), 0);

  return (
    <div className={`cart-drawer ${isOpen ? 'open' : ''}`} aria-hidden={!isOpen}>
      <div className="cart-header">
        <h3>Your cart</h3>
        <button className="close-btn" onClick={toggleCart} aria-label="Close cart">×</button>
      </div>
      <div className="cart-body">
        {items.length === 0 ? (
          <div className="empty">Your cart is empty</div>
        ) : (
          items.map((it) => (
            <div key={it.id} className="cart-item">
              <img src={it.image} alt={it.name} />
              <div className="ci-info">
                <div className="ci-name">{it.name}</div>
                <div className="ci-meta">{it.qty} × {it.price}</div>
              </div>
              <button className="ci-remove" onClick={() => removeFromCart(it.id)} aria-label={`Remove ${it.name}`}>Remove</button>
            </div>
          ))
        )}
      </div>
      <div className="cart-footer">
        <div className="cart-total">Total: ₹{total}</div>
        <div className="cart-actions">
          <button className="clear-btn" onClick={clearCart}>Clear</button>
          <button className="checkout-btn" disabled={items.length===0}>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
