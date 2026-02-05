import { useState, useEffect } from 'react';
import AdminPanel from '../AdminPanel/AdminPanel';
import './JoinModal.css';

// Secret admin credentials
const ADMIN_EMAIL = 'admin@forecastle.com';
const ADMIN_PASSWORD = 'Forecastle2024!';

const JoinModal = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [isLogin, setIsLogin] = useState(true);
    const [error, setError] = useState('');
    const [isAdminMode, setIsAdminMode] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
            // Reset state when modal closes
            setEmail('');
            setPassword('');
            setName('');
            setError('');
            setIsAdminMode(false);
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') {
                if (isAdminMode) {
                    setIsAdminMode(false);
                } else {
                    onClose();
                }
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose, isAdminMode]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        // Check for admin credentials
        if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
            setIsAdminMode(true);
            return;
        }

        // Regular user login/signup simulation
        if (isLogin) {
            // Simulate login
            if (email && password) {
                alert(`Welcome back! Logged in as ${email}`);
                onClose();
            } else {
                setError('Please fill in all fields');
            }
        } else {
            // Simulate signup
            if (name && email && password) {
                if (password.length < 6) {
                    setError('Password must be at least 6 characters');
                    return;
                }
                alert(`Welcome to Forecastle, ${name}! Account created.`);
                onClose();
            } else {
                setError('Please fill in all fields');
            }
        }
    };

    if (!isOpen) return null;

    // Show Admin Panel if admin credentials entered
    if (isAdminMode) {
        return (
            <AdminPanel
                onClose={() => {
                    setIsAdminMode(false);
                    onClose();
                }}
                onBack={() => setIsAdminMode(false)}
            />
        );
    }

    return (
        <div className="join-modal-overlay" onClick={onClose}>
            <div className="join-modal" onClick={(e) => e.stopPropagation()}>
                {/* Close Button */}
                <button className="join-modal__close" onClick={onClose} aria-label="Close">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>

                {/* Header */}
                <div className="join-modal__header">
                    <div className="join-modal__logo">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <circle cx="12" cy="5" r="2" />
                            <line x1="12" y1="7" x2="12" y2="21" />
                            <path d="M5 12c0 4 3 7 7 9 4-2 7-5 7-9" />
                        </svg>
                    </div>
                    <h2 className="join-modal__title">
                        {isLogin ? 'Welcome Back' : 'Join Forecastle'}
                    </h2>
                    <p className="join-modal__subtitle">
                        {isLogin
                            ? 'Sign in to access your account'
                            : 'Create an account to get started'}
                    </p>
                </div>

                {/* Form */}
                <form className="join-modal__form" onSubmit={handleSubmit}>
                    {!isLogin && (
                        <div className="join-modal__field">
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter your name"
                            />
                        </div>
                    )}

                    <div className="join-modal__field">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="join-modal__field">
                        <label htmlFor="password">Password</label>
                        <div className="join-modal__password-wrapper">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                            />
                            <button
                                type="button"
                                className="join-modal__toggle-password"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" />
                                        <line x1="1" y1="1" x2="23" y2="23" />
                                    </svg>
                                ) : (
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                        <circle cx="12" cy="12" r="3" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    {error && <p className="join-modal__error">{error}</p>}

                    <button type="submit" className="join-modal__submit">
                        {isLogin ? 'Sign In' : 'Create Account'}
                    </button>
                </form>

                {/* Toggle Login/Signup */}
                <div className="join-modal__toggle">
                    <span>
                        {isLogin ? "Don't have an account?" : 'Already have an account?'}
                    </span>
                    <button
                        type="button"
                        onClick={() => {
                            setIsLogin(!isLogin);
                            setError('');
                        }}
                    >
                        {isLogin ? 'Sign Up' : 'Sign In'}
                    </button>
                </div>

                {/* Features */}
                <div className="join-modal__features">
                    <div className="join-modal__feature">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M20 6L9 17l-5-5" />
                        </svg>
                        <span>Exclusive Deals</span>
                    </div>
                    <div className="join-modal__feature">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M20 6L9 17l-5-5" />
                        </svg>
                        <span>Early Access</span>
                    </div>
                    <div className="join-modal__feature">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M20 6L9 17l-5-5" />
                        </svg>
                        <span>Member Rewards</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinModal;
