import { useEffect, useState } from 'react';
import { useCart } from '../../context/CartContext';
import CheckoutModal from '../CheckoutModal/CheckoutModal';
import './QuickView.css';

const QuickView = ({ product, isOpen, onClose }) => {
    const { addToCart } = useCart();
    const [showCheckout, setShowCheckout] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    if (!isOpen || !product) return null;

    const handleAddToCart = () => {
        addToCart(product);
        onClose();
    };

    const handleBuyNow = () => {
        addToCart(product);
        setShowCheckout(true);
    };

    const handleCheckoutClose = () => {
        setShowCheckout(false);
        onClose();
    };

    return (
        <div className="quick-view-overlay" onClick={onClose}>
            <div className="quick-view" onClick={(e) => e.stopPropagation()}>
                {/* Close Button */}
                <button className="quick-view__close" onClick={onClose} aria-label="Close">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>

                {/* Product Image */}
                <div className="quick-view__image-container">
                    <img src={product.image} alt={product.name} className="quick-view__image" />
                    {product.badge && (
                        <span className="quick-view__badge">{product.badge}</span>
                    )}
                </div>

                {/* Product Details */}
                <div className="quick-view__details">
                    <div className="quick-view__header">
                        <span className="quick-view__category">{product.category}</span>
                        <h2 className="quick-view__name">{product.name}</h2>
                    </div>

                    <div className="quick-view__pricing">
                        <span className="quick-view__price">৳{product.price}</span>
                        {product.originalPrice && (
                            <span className="quick-view__original-price">৳{product.originalPrice}</span>
                        )}
                    </div>

                    <p className="quick-view__description">
                        Premium quality product from our exclusive collection.
                        Crafted with attention to detail for the discerning customer.
                    </p>

                    <div className="quick-view__features">
                        <div className="quick-view__feature">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M20 6L9 17l-5-5" />
                            </svg>
                            <span>100% Authentic</span>
                        </div>
                        <div className="quick-view__feature">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M20 6L9 17l-5-5" />
                            </svg>
                            <span>Free Shipping</span>
                        </div>
                        <div className="quick-view__feature">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M20 6L9 17l-5-5" />
                            </svg>
                            <span>Easy Returns</span>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="quick-view__actions">
                        <button className="quick-view__add-btn" onClick={handleAddToCart}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <path d="M16 10a4 4 0 01-8 0" />
                            </svg>
                            <span>Add to Cart</span>
                        </button>
                        <button className="quick-view__buy-btn" onClick={handleBuyNow}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                            <span>Buy Now</span>
                            <span className="quick-view__buy-btn-price">৳{product.price}</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Checkout Modal */}
            <CheckoutModal
                isOpen={showCheckout}
                onClose={handleCheckoutClose}
            />
        </div>
    );
};

export default QuickView;
