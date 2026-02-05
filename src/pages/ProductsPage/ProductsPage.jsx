import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './ProductsPage.css';

// Import product images
import jordan1Img from '../../assets/images/sneaker_jordan1_1769680427514.png';
import yeezyImg from '../../assets/images/sneaker_yeezy_1769680457017.png';
import airmaxImg from '../../assets/images/sneaker_airmax_1769680480717.png';
import dunkImg from '../../assets/images/sneaker_dunk_1769680518358.png';

import barcelonaImg from '../../assets/images/jersey_barcelona_1769680162478.png';
import realMadridImg from '../../assets/images/jersey_real_madrid_1769680257435.png';
import manUtdImg from '../../assets/images/jersey_manchester_united_1769680290808.png';
import psgImg from '../../assets/images/jersey_psg_1769680329826.png';
import bayernImg from '../../assets/images/jersey_bayern_1769680362568.png';

import tshirtsImg from '../../assets/images/premium_tshirts_1769678973201.png';

import { useCart } from '../../context/CartContext';
import QuickView from '../../components/QuickView/QuickView';
import CheckoutModal from '../../components/CheckoutModal/CheckoutModal';

const ProductsPage = () => {
    const { addToCart } = useCart();
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [checkoutProduct, setCheckoutProduct] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const activeCategory = searchParams.get('category') || 'all';
    const searchQuery = searchParams.get('search') || '';

    const categories = [
        { id: 'all', name: 'All Products', icon: '🛍️' },
        { id: 'sneakers', name: 'Sneakers', icon: '👟' },
        { id: 'jerseys', name: 'Jerseys', icon: '⚽' },
        { id: 'tshirts', name: 'T-Shirts', icon: '👕' },
    ];

    const products = [
        // Sneakers
        { id: 1, name: 'Air Jordan 1 Retro High', price: 180, category: 'sneakers', image: jordan1Img, badge: 'New' },
        { id: 2, name: 'Yeezy Boost 350 V2', price: 220, category: 'sneakers', image: yeezyImg, badge: 'Hot' },
        { id: 3, name: 'Nike Air Max 90', price: 130, category: 'sneakers', image: airmaxImg },
        { id: 4, name: 'Nike Dunk Low', price: 110, category: 'sneakers', image: dunkImg, badge: 'Sale' },

        // Jerseys
        { id: 5, name: 'FC Barcelona Home 24/25', price: 90, category: 'jerseys', image: barcelonaImg, badge: 'New' },
        { id: 6, name: 'Real Madrid Home 24/25', price: 90, category: 'jerseys', image: realMadridImg },
        { id: 7, name: 'Manchester United Away 24/25', price: 85, category: 'jerseys', image: manUtdImg },
        { id: 8, name: 'PSG Third Kit 24/25', price: 95, category: 'jerseys', image: psgImg, badge: 'Hot' },
        { id: 9, name: 'Bayern Munich Home 24/25', price: 90, category: 'jerseys', image: bayernImg },

        // T-Shirts
        { id: 10, name: 'Premium Cotton Tee - Black', price: 45, category: 'tshirts', image: tshirtsImg },
        { id: 11, name: 'Premium Cotton Tee - White', price: 45, category: 'tshirts', image: tshirtsImg },
        { id: 12, name: 'Oversized Graphic Tee', price: 55, category: 'tshirts', image: tshirtsImg, badge: 'New' },
    ];

    const filteredProducts = products.filter(p => {
        const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const handleCategoryChange = (categoryId) => {
        setSearchParams({
            category: categoryId,
            ...(searchQuery ? { search: searchQuery } : {})
        });
    };

    return (
        <div className="products-page">
            {/* Secondary Navigation */}
            <nav className="products-nav">
                <div className="products-nav__container">
                    <h2 className="products-nav__title">Shop</h2>
                    <div className="products-nav__categories">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                className={`products-nav__btn ${activeCategory === cat.id ? 'active' : ''}`}
                                onClick={() => handleCategoryChange(cat.id)}
                            >
                                <span className="products-nav__icon">{cat.icon}</span>
                                <span className="products-nav__name">{cat.name}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Products Grid */}
            <section className="products-grid-section">
                <div className="container">
                    <div className="products-header">
                        <h1 className="products-header__title">
                            {searchQuery ? `Results for "${searchQuery}"` : categories.find(c => c.id === activeCategory)?.name}
                        </h1>
                        <p className="products-header__count">
                            {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
                        </p>
                    </div>

                    <div className="products-grid">
                        {filteredProducts.map((product, index) => (
                            <div
                                key={product.id}
                                className="product-card"
                                style={{ '--delay': `${index * 0.05}s` }}
                            >
                                {product.badge && (
                                    <span className={`product-card__badge product-card__badge--${product.badge.toLowerCase()}`}>
                                        {product.badge}
                                    </span>
                                )}
                                <div className="product-card__image-wrapper">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="product-card__image"
                                    />
                                    <div className="product-card__overlay">
                                        <button
                                            className="product-card__quick-view"
                                            onClick={() => setSelectedProduct(product)}
                                        >
                                            Quick View
                                        </button>
                                    </div>
                                </div>
                                <div className="product-card__info">
                                    <h3 className="product-card__name">{product.name}</h3>
                                    <div className="product-card__footer">
                                        <span className="product-card__price">৳{product.price}</span>
                                        <div className="product-card__buttons">
                                            <button
                                                className="product-card__add-btn"
                                                onClick={() => addToCart(product)}
                                                aria-label={`Add ${product.name} to cart`}
                                            >
                                                <span className="product-card__plus">+</span>
                                            </button>
                                            <button
                                                className="product-card__buy-btn"
                                                onClick={() => {
                                                    addToCart(product);
                                                    setCheckoutProduct(product);
                                                }}
                                                aria-label={`Buy ${product.name} now`}
                                            >
                                                Buy Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quick View Modal */}
            <QuickView
                product={selectedProduct}
                isOpen={!!selectedProduct}
                onClose={() => setSelectedProduct(null)}
            />

            {/* Checkout Modal for Buy Now */}
            <CheckoutModal
                isOpen={!!checkoutProduct}
                onClose={() => setCheckoutProduct(null)}
            />
        </div>
    );
};

export default ProductsPage;
