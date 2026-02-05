import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import './CheckoutModal.css';

const CheckoutModal = ({ isOpen, onClose }) => {
    const { cartItems, getCartTotal, clearCart } = useCart();
    const [paymentMethod, setPaymentMethod] = useState('');
    const [payNowOption, setPayNowOption] = useState('');
    const [orderPlaced, setOrderPlaced] = useState(false);
    const [customerInfo, setCustomerInfo] = useState({
        name: '',
        phone: '',
        address: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCustomerInfo(prev => ({ ...prev, [name]: value }));
    };

    const handlePlaceOrder = () => {
        if (!customerInfo.name || !customerInfo.phone || !customerInfo.address) {
            alert('Please fill in all fields');
            return;
        }
        if (!paymentMethod) {
            alert('Please select a payment method');
            return;
        }
        if (paymentMethod === 'pay-now' && !payNowOption) {
            alert('Please select a payment option');
            return;
        }

        // Simulate order placement
        setOrderPlaced(true);
        setTimeout(() => {
            clearCart();
            setOrderPlaced(false);
            setPaymentMethod('');
            setPayNowOption('');
            setCustomerInfo({ name: '', phone: '', address: '' });
            onClose();
        }, 3000);
    };

    if (!isOpen) return null;

    return (
        <div className="checkout-overlay" onClick={onClose}>
            <div className="checkout-modal" onClick={(e) => e.stopPropagation()}>
                {orderPlaced ? (
                    <div className="checkout-success">
                        <div className="checkout-success__icon">✓</div>
                        <h2>Order Placed Successfully!</h2>
                        <p>Thank you for your order. We'll contact you soon.</p>
                    </div>
                ) : (
                    <>
                        <div className="checkout-modal__header">
                            <h2>Checkout</h2>
                            <button className="checkout-modal__close" onClick={onClose}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M18 6L6 18M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="checkout-modal__content">
                            {/* Order Summary */}
                            <div className="checkout-section">
                                <h3>Order Summary</h3>
                                <div className="checkout-items">
                                    {cartItems.map(item => (
                                        <div key={item.id} className="checkout-item">
                                            <img src={item.image} alt={item.name} />
                                            <div className="checkout-item__info">
                                                <span className="checkout-item__name">{item.name}</span>
                                                <span className="checkout-item__qty">x{item.quantity}</span>
                                            </div>
                                            <span className="checkout-item__price">৳{(item.price * item.quantity).toFixed(2)}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="checkout-total">
                                    <span>Total</span>
                                    <span className="checkout-total__amount">৳{getCartTotal().toFixed(2)}</span>
                                </div>
                            </div>

                            {/* Customer Info */}
                            <div className="checkout-section">
                                <h3>Delivery Information</h3>
                                <div className="checkout-form">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Full Name"
                                        value={customerInfo.name}
                                        onChange={handleInputChange}
                                        className="checkout-input"
                                    />
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone Number"
                                        value={customerInfo.phone}
                                        onChange={handleInputChange}
                                        className="checkout-input"
                                    />
                                    <textarea
                                        name="address"
                                        placeholder="Delivery Address"
                                        value={customerInfo.address}
                                        onChange={handleInputChange}
                                        className="checkout-input checkout-textarea"
                                    />
                                </div>
                            </div>

                            {/* Payment Method */}
                            <div className="checkout-section">
                                <h3>Payment Method</h3>
                                <div className="payment-options">
                                    <label className={`payment-option ${paymentMethod === 'cod' ? 'active' : ''}`}>
                                        <input
                                            type="radio"
                                            name="payment"
                                            value="cod"
                                            checked={paymentMethod === 'cod'}
                                            onChange={() => setPaymentMethod('cod')}
                                        />
                                        <div className="payment-option__content">
                                            <span className="payment-option__icon">💵</span>
                                            <span className="payment-option__label">Cash on Delivery</span>
                                        </div>
                                    </label>
                                    <label className={`payment-option ${paymentMethod === 'pay-now' ? 'active' : ''}`}>
                                        <input
                                            type="radio"
                                            name="payment"
                                            value="pay-now"
                                            checked={paymentMethod === 'pay-now'}
                                            onChange={() => setPaymentMethod('pay-now')}
                                        />
                                        <div className="payment-option__content">
                                            <span className="payment-option__icon">💳</span>
                                            <span className="payment-option__label">Pay Now</span>
                                        </div>
                                    </label>
                                </div>

                                {/* Pay Now Options */}
                                {paymentMethod === 'pay-now' && (
                                    <div className="pay-now-options">
                                        <label className={`pay-now-option ${payNowOption === 'bkash' ? 'active' : ''}`}>
                                            <input
                                                type="radio"
                                                name="paynow"
                                                value="bkash"
                                                checked={payNowOption === 'bkash'}
                                                onChange={() => setPayNowOption('bkash')}
                                            />
                                            <div className="pay-now-option__content">
                                                <span className="pay-now-option__logo bkash">bKash</span>
                                            </div>
                                        </label>
                                        <label className={`pay-now-option ${payNowOption === 'rocket' ? 'active' : ''}`}>
                                            <input
                                                type="radio"
                                                name="paynow"
                                                value="rocket"
                                                checked={payNowOption === 'rocket'}
                                                onChange={() => setPayNowOption('rocket')}
                                            />
                                            <div className="pay-now-option__content">
                                                <span className="pay-now-option__logo rocket">Rocket</span>
                                            </div>
                                        </label>
                                        <label className={`pay-now-option ${payNowOption === 'card' ? 'active' : ''}`}>
                                            <input
                                                type="radio"
                                                name="paynow"
                                                value="card"
                                                checked={payNowOption === 'card'}
                                                onChange={() => setPayNowOption('card')}
                                            />
                                            <div className="pay-now-option__content">
                                                <span className="pay-now-option__logo card">💳 Card</span>
                                            </div>
                                        </label>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="checkout-modal__footer">
                            <button className="checkout-btn" onClick={handlePlaceOrder}>
                                Place Order - ৳{getCartTotal().toFixed(2)}
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default CheckoutModal;
