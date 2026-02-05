import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchModal.css';

const SearchModal = ({ isOpen, onClose }) => {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const inputRef = useRef(null);
    const navigate = useNavigate();

    // All searchable items
    const searchData = [
        // Pages
        { type: 'page', name: 'Home', path: '/', keywords: ['home', 'main', 'start'] },
        { type: 'page', name: 'Products', path: '/products', keywords: ['products', 'shop', 'store', 'buy'] },
        { type: 'page', name: 'Coffee House', path: '/cafe', keywords: ['coffee', 'cafe', 'drinks', 'menu'] },
        { type: 'page', name: 'About Us', path: '/about', keywords: ['about', 'story', 'team', 'info'] },

        // Products - Sneakers
        { type: 'product', name: 'Air Jordan 1 Retro High', path: '/products?category=sneakers', keywords: ['jordan', 'nike', 'sneaker', 'shoes', 'basketball'] },
        { type: 'product', name: 'Yeezy Boost 350 V2', path: '/products?category=sneakers', keywords: ['yeezy', 'adidas', 'boost', 'kanye'] },
        { type: 'product', name: 'Nike Air Max 90', path: '/products?category=sneakers', keywords: ['airmax', 'nike', 'running', 'classic'] },
        { type: 'product', name: 'Nike Dunk Low', path: '/products?category=sneakers', keywords: ['dunk', 'nike', 'skateboard', 'street'] },

        // Products - Jerseys
        { type: 'product', name: 'FC Barcelona Jersey', path: '/products?category=jerseys', keywords: ['barcelona', 'barca', 'laliga', 'spain', 'football'] },
        { type: 'product', name: 'Real Madrid Jersey', path: '/products?category=jerseys', keywords: ['real', 'madrid', 'laliga', 'spain', 'football'] },
        { type: 'product', name: 'Manchester United Jersey', path: '/products?category=jerseys', keywords: ['manchester', 'united', 'mufc', 'premier', 'england'] },
        { type: 'product', name: 'PSG Jersey', path: '/products?category=jerseys', keywords: ['psg', 'paris', 'france', 'ligue1'] },
        { type: 'product', name: 'Bayern Munich Jersey', path: '/products?category=jerseys', keywords: ['bayern', 'munich', 'bundesliga', 'germany'] },

        // Products - T-Shirts
        { type: 'product', name: 'Premium Cotton Tee', path: '/products?category=tshirts', keywords: ['tshirt', 'cotton', 'basic', 'casual'] },
        { type: 'product', name: 'Oversized Graphic Tee', path: '/products?category=tshirts', keywords: ['oversized', 'graphic', 'streetwear'] },

        // Categories
        { type: 'category', name: 'Sneakers Collection', path: '/products?category=sneakers', keywords: ['sneakers', 'shoes', 'footwear'] },
        { type: 'category', name: 'Jerseys Collection', path: '/products?category=jerseys', keywords: ['jerseys', 'football', 'soccer', 'sports'] },
        { type: 'category', name: 'T-Shirts Collection', path: '/products?category=tshirts', keywords: ['tshirts', 'tops', 'apparel'] },

        // Cafe items
        { type: 'cafe', name: 'Espresso', path: '/cafe', keywords: ['espresso', 'coffee', 'strong'] },
        { type: 'cafe', name: 'Cappuccino', path: '/cafe', keywords: ['cappuccino', 'milk', 'foam'] },
        { type: 'cafe', name: 'Latte', path: '/cafe', keywords: ['latte', 'milk', 'smooth'] },
        { type: 'cafe', name: 'Cold Brew', path: '/cafe', keywords: ['cold', 'brew', 'iced'] },
    ];

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    useEffect(() => {
        if (query.trim().length < 1) {
            setSuggestions([]);
            return;
        }

        const searchQuery = query.toLowerCase();
        const results = searchData.filter(item => {
            const nameMatch = item.name.toLowerCase().includes(searchQuery);
            const keywordMatch = item.keywords.some(k => k.includes(searchQuery));
            return nameMatch || keywordMatch;
        }).slice(0, 8); // Limit to 8 results

        setSuggestions(results);
        setSelectedIndex(-1);
    }, [query]);

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setSelectedIndex(prev => Math.min(prev + 1, suggestions.length - 1));
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setSelectedIndex(prev => Math.max(prev - 1, -1));
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (selectedIndex >= 0 && suggestions[selectedIndex]) {
                handleSelect(suggestions[selectedIndex]);
            } else if (suggestions.length > 0) {
                handleSelect(suggestions[0]);
            }
        } else if (e.key === 'Escape') {
            onClose();
        }
    };

    const handleSelect = (item) => {
        navigate(item.path);
        window.scrollTo(0, 0);
        setQuery('');
        onClose();
    };

    const getTypeIcon = (type) => {
        switch (type) {
            case 'page': return '📄';
            case 'product': return '🛍️';
            case 'category': return '📂';
            case 'cafe': return '☕';
            default: return '🔍';
        }
    };

    const getTypeLabel = (type) => {
        switch (type) {
            case 'page': return 'Page';
            case 'product': return 'Product';
            case 'category': return 'Category';
            case 'cafe': return 'Café Menu';
            default: return 'Result';
        }
    };

    if (!isOpen) return null;

    return (
        <div className="search-modal" onClick={onClose}>
            <div className="search-modal__container" onClick={(e) => e.stopPropagation()}>
                <div className="search-modal__input-wrapper">
                    <svg className="search-modal__icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="8" />
                        <path d="M21 21l-4.35-4.35" />
                    </svg>
                    <input
                        ref={inputRef}
                        type="text"
                        className="search-modal__input"
                        placeholder="Search products, pages, cafe..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <kbd className="search-modal__kbd">ESC</kbd>
                </div>

                {suggestions.length > 0 && (
                    <div className="search-modal__results">
                        {suggestions.map((item, index) => (
                            <div
                                key={index}
                                className={`search-modal__result ${index === selectedIndex ? 'selected' : ''}`}
                                onClick={() => handleSelect(item)}
                                onMouseEnter={() => setSelectedIndex(index)}
                            >
                                <span className="search-modal__result-icon">{getTypeIcon(item.type)}</span>
                                <div className="search-modal__result-content">
                                    <span className="search-modal__result-name">{item.name}</span>
                                    <span className="search-modal__result-type">{getTypeLabel(item.type)}</span>
                                </div>
                                <svg className="search-modal__result-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M9 18l6-6-6-6" />
                                </svg>
                            </div>
                        ))}
                    </div>
                )}

                {query.trim().length > 0 && suggestions.length === 0 && (
                    <div className="search-modal__empty">
                        <span>No results found for "{query}"</span>
                    </div>
                )}

                <div className="search-modal__footer">
                    <span><kbd>↑</kbd><kbd>↓</kbd> to navigate</span>
                    <span><kbd>↵</kbd> to select</span>
                    <span><kbd>esc</kbd> to close</span>
                </div>
            </div>
        </div>
    );
};

export default SearchModal;
