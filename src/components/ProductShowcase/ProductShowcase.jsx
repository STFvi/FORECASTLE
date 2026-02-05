import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import QuickView from '../QuickView/QuickView';
import CheckoutModal from '../CheckoutModal/CheckoutModal';
import './ProductShowcase.css';

// Import sneaker images
import jordan1Img from '../../assets/images/sneaker_jordan1_1769680427514.png';
import yeezyImg from '../../assets/images/sneaker_yeezy_1769680457017.png';
import airmaxImg from '../../assets/images/sneaker_airmax_1769680480717.png';
import dunkImg from '../../assets/images/sneaker_dunk_1769680518358.png';

// Import jersey images
import barcelonaImg from '../../assets/images/jersey_barcelona_1769680162478.png';
import realMadridImg from '../../assets/images/jersey_real_madrid_1769680257435.png';
import manUtdImg from '../../assets/images/jersey_manchester_united_1769680290808.png';
import psgImg from '../../assets/images/jersey_psg_1769680329826.png';
import bayernImg from '../../assets/images/jersey_bayern_1769680362568.png';

// Import t-shirt images
import tshirtsImg from '../../assets/images/premium_tshirts_1769678973201.png';

const ProductShowcase = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [checkoutProduct, setCheckoutProduct] = useState(null);
    const { addToCart } = useCart();

    const categories = [
        { id: 'all', name: 'All Products' },
        { id: 'sneakers', name: 'Sneakers' },
        { id: 'jerseys', name: 'Club Jerseys' },
        { id: 'tshirts', name: 'T-Shirts' },
    ];

    const products = [
        // Sneakers
        {
            id: 1,
            name: 'Nike Air Jordan 1 Retro High OG',
            category: 'sneakers',
            price: 189,
            originalPrice: 220,
            image: jordan1Img,
            badge: 'Bestseller',
        },
        {
            id: 2,
            name: 'Adidas Yeezy Boost 350 V2',
            category: 'sneakers',
            price: 280,
            originalPrice: 320,
            image: yeezyImg,
            badge: 'Popular',
        },
        {
            id: 3,
            name: 'Nike Air Max 90 Infrared',
            category: 'sneakers',
            price: 150,
            originalPrice: 175,
            image: airmaxImg,
            badge: null,
        },
        {
            id: 4,
            name: 'Nike Dunk Low Panda',
            category: 'sneakers',
            price: 120,
            originalPrice: null,
            image: dunkImg,
            badge: 'Hot',
        },

        // Club Jerseys - Top 5
        {
            id: 5,
            name: 'FC Barcelona Home Kit 24/25',
            category: 'jerseys',
            price: 95,
            originalPrice: null,
            image: barcelonaImg,
            badge: 'New Arrival',
        },
        {
            id: 6,
            name: 'Real Madrid Home Kit 24/25',
            category: 'jerseys',
            price: 95,
            originalPrice: null,
            image: realMadridImg,
            badge: 'Bestseller',
        },
        {
            id: 7,
            name: 'Manchester United Home Kit 24/25',
            category: 'jerseys',
            price: 95,
            originalPrice: null,
            image: manUtdImg,
            badge: null,
        },
        {
            id: 8,
            name: 'Paris Saint-Germain Home Kit 24/25',
            category: 'jerseys',
            price: 95,
            originalPrice: null,
            image: psgImg,
            badge: 'Popular',
        },
        {
            id: 9,
            name: 'Bayern Munich Home Kit 24/25',
            category: 'jerseys',
            price: 95,
            originalPrice: null,
            image: bayernImg,
            badge: null,
        },

        // T-Shirts
        {
            id: 10,
            name: 'Premium Cotton Essentials - Black',
            category: 'tshirts',
            price: 45,
            originalPrice: 60,
            image: tshirtsImg,
            badge: 'Premium',
        },
        {
            id: 11,
            name: 'Premium Cotton Essentials - White',
            category: 'tshirts',
            price: 45,
            originalPrice: 60,
            image: tshirtsImg,
            badge: null,
        },
        {
            id: 12,
            name: 'Premium Cotton Essentials - Navy',
            category: 'tshirts',
            price: 45,
            originalPrice: null,
            image: tshirtsImg,
            badge: null,
        },
    ];

    const filteredProducts = activeCategory === 'all'
        ? products
        : products.filter(p => p.category === activeCategory);

    return (
        <section className="products" id="products">
            <div className="container">
                {/* Section Header */}
                <div className="products__header">
                    <div className="products__badge">Our Collection</div>
                    <h2 className="products__title">
                        Premium <span className="text-gradient">Products</span>
                    </h2>
                    <p className="products__description">
                        Discover our curated selection of premium sneakers, authentic club jerseys from the world's top teams,
                        and quality essentials — all in one exclusive destination.
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="products__tabs">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            className={`products__tab ${activeCategory === cat.id ? 'active' : ''}`}
                            onClick={() => setActiveCategory(cat.id)}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>

                {/* Products Grid */}
                <div className="products__grid">
                    {filteredProducts.map((product, index) => (
                        <article
                            key={product.id}
                            className="product-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="product-card__image-wrapper">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="product-card__image"
                                />
                                {product.badge && (
                                    <span className="product-card__badge">{product.badge}</span>
                                )}
                                <div className="product-card__overlay">
                                    <button
                                        className="product-card__quick-view"
                                        onClick={() => setSelectedProduct(product)}
                                    >
                                        Quick View
                                    </button>
                                </div>
                            </div>
                            <div className="product-card__content">
                                <h3 className="product-card__name">{product.name}</h3>
                                <div className="product-card__pricing">
                                    <span className="product-card__price">৳{product.price}</span>
                                    {product.originalPrice && (
                                        <span className="product-card__original-price">
                                            ৳{product.originalPrice}
                                        </span>
                                    )}
                                </div>
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
                        </article>
                    ))}
                </div>

                {/* View All CTA */}
                <div className="products__cta">
                    <Link to="/products" className="btn btn-secondary" onClick={() => window.scrollTo(0, 0)}>
                        View All Products
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>

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
        </section>
    );
};

export default ProductShowcase;
