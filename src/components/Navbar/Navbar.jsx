
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useCart } from '../../context/CartContext';
import './Navbar.css';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const { getCartCount, toggleCart } = useCart(); // Use Cart Context
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


    // Search State
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const searchRef = useRef(null);

    const location = useLocation();
    const navigate = useNavigate();

    // Search Data
    const searchData = [
        // Pages
        { type: 'page', name: 'Home', path: '/', keywords: ['home', 'main'] },
        { type: 'page', name: 'Products', path: '/products', keywords: ['products', 'shop', 'store'] },
        { type: 'page', name: 'Coffee House', path: '/cafe', keywords: ['coffee', 'cafe', 'drinks'] },
        { type: 'page', name: 'About Us', path: '/about', keywords: ['about', 'story', 'team'] },

        // Categories
        { type: 'category', name: 'Sneakers', path: '/products?category=sneakers', keywords: ['sneakers', 'shoes', 'footwear', 'kicks'] },
        { type: 'category', name: 'Jerseys', path: '/products?category=jerseys', keywords: ['jerseys', 'football', 'soccer', 'kits'] },
        { type: 'category', name: 'T-Shirts', path: '/products?category=tshirts', keywords: ['tshirts', 'clothing', 'apparel', 'tops'] },

        // Products - Sneakers
        { type: 'product', name: 'Air Jordan 1 Retro High', path: '/products?search=jordan', keywords: ['jordan', 'nike', 'air', 'high'] },
        { type: 'product', name: 'Yeezy Boost 350 V2', path: '/products?search=yeezy', keywords: ['yeezy', 'adidas', 'boost', '350'] },
        { type: 'product', name: 'Nike Air Max 90', path: '/products?search=air max', keywords: ['nike', 'air', 'max', '90', 'running'] },
        { type: 'product', name: 'Nike Dunk Low', path: '/products?search=dunk', keywords: ['nike', 'dunk', 'low', 'sb'] },

        // Products - Jerseys
        { type: 'product', name: 'FC Barcelona Home 24/25', path: '/products?search=barcelona', keywords: ['barcelona', 'fcb', 'barca', 'messi', 'spain'] },
        { type: 'product', name: 'Real Madrid Home 24/25', path: '/products?search=real madrid', keywords: ['real', 'madrid', 'halamadrid', 'spain'] },
        { type: 'product', name: 'Manchester United Away', path: '/products?search=manchester', keywords: ['manchester', 'united', 'mufc', 'england'] },
        { type: 'product', name: 'PSG Third Kit', path: '/products?search=psg', keywords: ['psg', 'paris', 'saint', 'germain', 'france'] },
        { type: 'product', name: 'Bayern Munich Home', path: '/products?search=bayern', keywords: ['bayern', 'munich', 'germany'] },

        // Products - T-Shirts
        { type: 'product', name: 'Premium Cotton Tee', path: '/products?search=cotton tee', keywords: ['cotton', 'tee', 'black', 'white', 'basic'] },
        { type: 'product', name: 'Oversized Graphic Tee', path: '/products?search=graphic tee', keywords: ['oversized', 'graphic', 'streetwear', 'print'] },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setIsSearchFocused(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Search Logic
    useEffect(() => {
        if (searchQuery.trim().length < 1) {
            setSuggestions([]);
            return;
        }

        const queryParts = searchQuery.toLowerCase().split(' ').filter(p => p.length > 0);

        const results = searchData.filter(item => {
            const itemName = item.name.toLowerCase();
            const itemKeywords = item.keywords.join(' ').toLowerCase();

            // Allow matching if ANY part of the query matches name or keywords
            return queryParts.some(part =>
                itemName.includes(part) || itemKeywords.includes(part)
            );
        }).slice(0, 8); // Limit to 8 results for better UX

        setSuggestions(results);
    }, [searchQuery]);

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/ products ? search = ${encodeURIComponent(searchQuery)} `);
            setIsSearchFocused(false);
            window.scrollTo(0, 0);
        }
    };

    const handleSuggestionClick = (item) => {
        navigate(item.path);
        setSearchQuery('');
        setIsSearchFocused(false);
        window.scrollTo(0, 0);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : '';
    };

    const navLinks = [
        { name: 'Home', href: '/', isRoute: true },
        { name: 'Products', href: '/products', isRoute: true },
        { name: 'Coffee House', href: '/cafe', isRoute: true },
        { name: 'About', href: '/about', isRoute: true },
    ];

    return (
        <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
            <nav className="navbar__container">
                {/* Left Section (Back + Logo) */}
                <div className="navbar__left">
                    {/* Back Button */}
                    {location.pathname !== '/' && (
                        <Link to="/" className="navbar__back-btn" aria-label="Go back to home" onClick={() => window.scrollTo(0, 0)}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M19 12H5M12 19l-7-7 7-7" />
                            </svg>
                        </Link>
                    )}

                    {/* Logo */}
                    <Link to="/" className="navbar__logo" onClick={() => window.scrollTo(0, 0)}>
                        <span className="navbar__logo-text">Forecastle</span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <ul className="navbar__links">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                to={link.href}
                                className={`navbar__link ${location.pathname === link.href ? 'active' : ''}`}
                                onClick={() => window.scrollTo(0, 0)}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Actions & Search */}
                <div className="navbar__actions">
                    {/* Inline Search Bar */}
                    <div className={`navbar__search ${isSearchFocused ? 'focused' : ''}`} ref={searchRef}>
                        <form onSubmit={handleSearchSubmit} className="navbar__search-form">
                            <svg className="navbar__search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="11" cy="11" r="8" />
                                <path d="M21 21l-4.35-4.35" />
                            </svg>
                            <input
                                type="text"
                                className="navbar__search-input"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onFocus={() => setIsSearchFocused(true)}
                            />
                        </form>

                        {/* Search Suggestions Dropdown */}
                        {isSearchFocused && searchQuery && (
                            <div className="navbar__search-dropdown">
                                {suggestions.length > 0 ? (
                                    suggestions.map((item, index) => (
                                        <div
                                            key={index}
                                            className="navbar__search-item"
                                            onClick={() => handleSuggestionClick(item)}
                                        >
                                            <span className="navbar__search-item-icon">
                                                {item.type === 'product' ? '🛍️' : item.type === 'category' ? '📂' : '📄'}
                                            </span>
                                            <span className="navbar__search-item-name">{item.name}</span>
                                        </div>
                                    ))
                                ) : (
                                    <div className="navbar__search-empty">No results</div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Theme Toggle */}
                    <button
                        className="navbar__action-btn navbar__theme-toggle"
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="5" />
                                <line x1="12" y1="1" x2="12" y2="3" />
                                <line x1="12" y1="21" x2="12" y2="23" />
                                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                                <line x1="1" y1="12" x2="3" y2="12" />
                                <line x1="21" y1="12" x2="23" y2="12" />
                                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                            </svg>
                        ) : (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                            </svg>
                        )}
                    </button>

                    {/* Cart Button */}
                    <button className="navbar__action-btn navbar__cart-btn" aria-label="Shopping Cart" onClick={toggleCart}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <path d="M16 10a4 4 0 01-8 0" />
                        </svg>
                        {getCartCount() > 0 && (
                            <span className="navbar__cart-count">{getCartCount()}</span>
                        )}
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button
                        className={`navbar__menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
                        onClick={toggleMobileMenu}
                        aria-label="Toggle Menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`navbar__mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                    <ul className="navbar__mobile-links">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    to={link.href}
                                    className="navbar__mobile-link"
                                    onClick={() => { setIsMobileMenuOpen(false); window.scrollTo(0, 0); }}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="navbar__mobile-cta">
                        <button
                            className="btn btn-secondary navbar__mobile-theme-toggle"
                            onClick={toggleTheme}
                        >
                            {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
                        </button>
                        <Link to="/products" className="btn btn-primary" onClick={() => setIsMobileMenuOpen(false)}>
                            Shop Now
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
