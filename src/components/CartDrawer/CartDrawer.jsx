import { useRef, useEffect, useState } from 'react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import CheckoutModal from '../CheckoutModal/CheckoutModal';
import './CartDrawer.css';

const CartDrawer = () => {
    const {
        isCartOpen,
        setIsCartOpen,
        cartItems,
        removeFromCart,
        updateQuantity,
        getCartTotal
    } = useCart();

    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
    const drawerRef = useRef(null);

    // Close on escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') setIsCartOpen(false);
        };

        if (isCartOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = '';
        };
    }, [isCartOpen, setIsCartOpen]);

    const handleCheckout = () => {
        setIsCartOpen(false);
        setIsCheckoutOpen(true);
    };

    if (!isCartOpen && !isCheckoutOpen) return null;

    return (
        <>
            {isCartOpen && (
                <div className="cart-overlay" onClick={() => setIsCartOpen(false)}>
                    <aside
                        className="cart-drawer"
                        onClick={e => e.stopPropagation()}
                        ref={drawerRef}
                    >
                        <div className="cart-drawer__header">
                            <h2>Shopping Cart ({cartItems.length})</h2>
                            <button
                                className="cart-drawer__close"
                                onClick={() => setIsCartOpen(false)}
                                aria-label="Close cart"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M18 6L6 18M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="cart-drawer__content">
                            {cartItems.length === 0 ? (
                                <div className="cart-drawer__empty">
                                    <span className="cart-drawer__empty-icon">🛍️</span>
                                    <p>Your cart is empty</p>
                                    <button
                                        className="btn btn-secondary"
                                        onClick={() => setIsCartOpen(false)}
                                    >
                                        Continue Shopping
                                    </button>
                                </div>
                            ) : (
                                <div className="cart-items">
                                    {cartItems.map(item => (
                                        <div key={item.id} className="cart-item">
                                            <div className="cart-item__image">
                                                <img src={item.image} alt={item.name} />
                                            </div>
                                            <div className="cart-item__details">
                                                <h3 className="cart-item__name">{item.name}</h3>
                                                <p className="cart-item__price">৳{item.price}</p>
                                                <div className="cart-item__controls">
                                                    <div className="quantity-controls">
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                            aria-label="Decrease quantity"
                                                        >
                                                            -
                                                        </button>
                                                        <span>{item.quantity}</span>
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                            aria-label="Increase quantity"
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                    <button
                                                        className="cart-item__remove"
                                                        onClick={() => removeFromCart(item.id)}
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {cartItems.length > 0 && (
                            <div className="cart-drawer__footer">
                                <div className="cart-total">
                                    <span>Subtotal</span>
                                    <span className="cart-total__amount">৳{getCartTotal().toFixed(2)}</span>
                                </div>
                                <p className="cart-note">Shipping & taxes calculated at checkout</p>
                                <button className="btn btn-primary btn-block" onClick={handleCheckout}>
                                    Checkout
                                </button>
                            </div>
                        )}
                    </aside>
                </div>
            )}

            <CheckoutModal
                isOpen={isCheckoutOpen}
                onClose={() => setIsCheckoutOpen(false)}
            />
        </>
    );
};

export default CartDrawer;

